import { test } from 'node:test';
import assert from 'node:assert/strict';
import { deliverRequest, emailFallback, requestEmail, validateRequest } from '../src/lib/requests.ts';

const contact = { kind: 'contact', name: 'Research Test', email: 'test@example.com', organization: 'Example Organization', projectDetails: 'A test research brief.', consent: true };
const settings = { apiKey: 'test-key', from: 'Mirror Metrics <sender@example.com>', to: 'inbox@example.com' };

test('accepts and trims a valid inquiry', () => {
  const result = validateRequest({ ...contact, name: '  Research Test  ', email: ' test@example.com ' });
  assert.equal(result.data.name, 'Research Test');
  assert.equal(result.data.email, 'test@example.com');
});
test('rejects malformed email, missing consent, honeypots, and oversized content', () => {
  for (const overrides of [{ email: 'bad-email' }, { email: 'a\nb@example.com' }, { consent: false }, { website: 'spam' }, { projectDetails: 'x'.repeat(5001) }]) assert.ok(validateRequest({ ...contact, ...overrides }).error);
});
test('requires name and organization for an inquiry', () => {
  assert.ok(validateRequest({ ...contact, name: '' }).error);
  assert.ok(validateRequest({ ...contact, organization: '' }).error);
});
test('requires sensible proposal settings and sample sizes', () => {
  const proposal = { ...contact, kind: 'proposal', studyType: 'Social research', geography: 'Dhaka', methodology: 'Survey', sampleSize: 2400 };
  assert.ok(validateRequest(proposal).data);
  for (const sampleSize of [0, 299, 12001, 500.5, '2400', null]) assert.ok(validateRequest({ ...proposal, sampleSize }).error);
  assert.ok(validateRequest({ ...proposal, methodology: '' }).error);
});
test('newsletter requires explicit consent without requiring a name', () => {
  assert.ok(validateRequest({ kind: 'newsletter', email: 'test@example.com', consent: true }).data);
  assert.ok(validateRequest({ kind: 'newsletter', email: 'test@example.com', consent: false }).error);
});
test('fallback preserves the complete brief in a properly encoded mailto', () => {
  const data = { ...contact, projectDetails: 'A&B? Notes: 50% + research\nNext line.' };
  const link = emailFallback(data);
  const parsed = new URL(link);
  assert.equal(parsed.protocol, 'mailto:');
  assert.equal(parsed.searchParams.get('body'), requestEmail(data).text);
});
test('does not claim success or call a provider without delivery settings', async () => {
  const result = await deliverRequest(contact, {}, () => { throw new Error('should not send'); });
  assert.equal(result.ok, false);
  assert.equal(result.status, 503);
});
test('sends the brief to the configured inbox with reply-to and plain text', async () => {
  let captured;
  const result = await deliverRequest(contact, settings, async (url, init) => {
    captured = { url, init, body: JSON.parse(init.body) };
    return Response.json({ id: 'email-test-reference' });
  });
  assert.equal(result.ok, true);
  assert.equal(captured.url, 'https://api.resend.com/emails');
  assert.deepEqual(captured.body.to, ['inbox@example.com']);
  assert.equal(captured.body.reply_to, contact.email);
  assert.ok(captured.body.text.includes(contact.projectDetails));
  assert.equal(captured.body.html, undefined);
});
test('a provider rejection cannot become a success state', async () => {
  const result = await deliverRequest(contact, settings, async () => Response.json({ message: 'rejected' }, { status: 422 }));
  assert.equal(result.ok, false);
  assert.equal(result.status, 502);
});
test('requires a provider delivery reference, including for a 200 response', async () => {
  const result = await deliverRequest(contact, settings, async () => Response.json({}));
  assert.equal(result.ok, false);
});
test('network errors and timeouts produce an honest failure with a retry path', async () => {
  const result = await deliverRequest(contact, settings, async () => { throw new DOMException('timed out', 'TimeoutError'); });
  assert.equal(result.ok, false);
  assert.match(result.message, /email/);
});
