import assert from 'node:assert/strict';

const origin = process.env.TEST_BASE_URL || 'http://localhost:3000';
const pages = ['/', '/about', '/services', '/projects', '/insights', '/contact', '/privacy', '/insights/writing-a-useful-research-brief', '/insights/choosing-research-methods', '/insights/quality-in-fieldwork'];
const destinations = new Set();
for (const path of pages) {
  const response = await fetch(origin + path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert.match(html, /<h1[\s>]/, `${path}: missing h1`);
  assert.match(html, /rel="canonical"/, `${path}: missing canonical`);
  for (const match of html.matchAll(/href="(\/(?!_next)[^"?#]*)(?:[^"\s]*)"/g)) destinations.add(match[1]);
}
for (const path of [...destinations, '/opengraph-image', '/icon.svg', '/robots.txt', '/sitemap.xml']) {
  const response = await fetch(origin + path);
  assert.equal(response.status, 200, `Broken destination: ${path}`);
}
assert.equal((await fetch(origin + '/this-page-does-not-exist')).status, 404);
console.log(`Verified ${pages.length} pages, ${destinations.size} internal destinations, social preview, icon, robots, sitemap, and a real 404.`);

const post = (body, headers = {}) => fetch(origin + '/api/requests', {method:'POST',headers:{'Content-Type':'application/json',...headers},body:JSON.stringify(body)});
assert.equal((await post({})).status, 400);
assert.equal((await post({}, {'Origin':'https://unrelated.example'})).status, 403);
assert.equal((await post({}, {'Content-Type':'text/plain'})).status, 415);
assert.equal((await post({projectDetails:'x'.repeat(17000)})).status, 413);
const inquiry = {kind:'contact',name:'Verification Test',email:'test@example.com',organization:'Example Organization',consent:true,projectDetails:'Local verification only.'};
const response = await post(inquiry);
assert.equal(response.status, 503, 'Expected an honest unavailable response with no provider configured');
const result = await response.json();
assert.equal(result.emailFallback, true);
assert.notEqual(result.ok, true);
console.log('Verified request validation, origin check, content type, body limit, and unconfigured-delivery fallback. No email was sent.');
