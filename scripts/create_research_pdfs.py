"""Create the website's company overview and clearly labeled illustrative work sample."""
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
import shutil

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'output' / 'pdf'
PUBLIC = ROOT / 'public' / 'downloads'
OUT.mkdir(parents=True, exist_ok=True)
PUBLIC.mkdir(parents=True, exist_ok=True)
FONT_DIR = Path('C:/Windows/Fonts')
for name, filename in [('Sans', 'segoeui.ttf'), ('Semi', 'seguisb.ttf'), ('SerifItalic', 'georgiai.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(FONT_DIR / filename)))
INK = HexColor('#142c3d')
TEAL = HexColor('#217a79')
MUTED = HexColor('#60707a')
LINE = HexColor('#dde4e1')
PALE = HexColor('#edf2e9')
W, H = A4
M = 48

def para(c, text, x, y, width, size=10, color=MUTED, leading=None, font='Sans'):
    style = ParagraphStyle('body', fontName=font, fontSize=size, leading=leading or size*1.65, textColor=color)
    p = Paragraph(text, style)
    _, height = p.wrap(width, H)
    p.drawOn(c, x, y-height)
    return y-height

def label(c, text, x, y, color=TEAL):
    c.setFillColor(color)
    c.setFont('Semi', 7)
    c.drawString(x, y, text)

def heading(c, text, x, y, width, size=29, italic=False):
    return para(c, text, x, y, width, size, TEAL if italic else INK, size*1.12, 'SerifItalic' if italic else 'Semi')

def base(c, number, category):
    c.setFillColor(HexColor('#ffffff'))
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.drawImage(ImageReader(str(ROOT / 'public' / 'logo.png')), M, H-72, width=39, height=24, preserveAspectRatio=True, mask='auto')
    c.setFillColor(INK)
    c.setFont('Semi', 13)
    c.drawString(M+49, H-56, 'Mirror Metrics')
    c.setFont('Sans', 6)
    c.setFillColor(MUTED)
    c.drawString(M+50, H-69, 'R E S E A R C H   L T D')
    label(c, category, W-205, H-58)
    c.setStrokeColor(LINE)
    c.line(M, H-92, W-M, H-92)
    c.line(M, 49, W-M, 49)
    label(c, 'SOCIAL & MARKET RESEARCH / BANGLADESH', M, 33, MUTED)
    c.setFont('Sans', 7)
    c.drawRightString(W-M, 33, f'{number:02d}')

def bullet(c, text, x, y, width, size=10):
    c.setFillColor(TEAL)
    c.circle(x+2, y-6, 1.5, fill=1, stroke=0)
    return para(c, text, x+13, y, width-13, size=size)-9

profile = OUT / 'mirror-metrics-company-profile.pdf'
c = canvas.Canvas(str(profile), pagesize=A4)
c.setTitle('Mirror Metrics Research Ltd | Company Overview')
c.setAuthor('Mirror Metrics Research Ltd')
base(c, 1, 'COMPANY OVERVIEW')
label(c, 'HUMAN INSIGHT. MARKET CLARITY.', M, H-127)
y = heading(c, 'Research for the<br/>decisions ahead.', M, H-150, W-2*M, size=39)
y = heading(c, 'Meaningful impact.', M, y-9, W-2*M, size=36, italic=True)
y = para(c, 'Mirror Metrics Research Ltd is a social and market research organization in Bangladesh. Our focus connects people, communities, and markets through thoughtful study design, fieldwork, and analysis.', M, y-24, W-2*M, size=11)
y -= 32
label(c, 'OUR RESEARCH FOCUS', M, y)
y -= 24
services = [
    ('01', 'Social & development research', 'Baseline, midline and endline studies; program and impact evaluation; community, livelihood and service-access research.'),
    ('02', 'Market & consumer intelligence', 'Consumer behavior, brand health, product and concept testing, customer experience, market sizing and retail research.'),
    ('03', 'Quantitative & qualitative fieldwork', 'Structured digital surveys, in-depth interviews, focus groups, key informant interviews, field supervision and quality review.'),
]
for number, title, body in services:
    c.setStrokeColor(LINE)
    c.line(M, y+6, W-M, y+6)
    label(c, number, M, y-11)
    bottom = para(c, title, M+33, y-2, W-2*M-33, size=14, color=INK, font='Semi')
    y = para(c, body, M+33, bottom-8, W-2*M-33, size=10)-24
c.setFillColor(PALE)
c.roundRect(M, 83, W-2*M, 65, 3, fill=1, stroke=0)
label(c, 'START WITH YOUR QUESTION', M+18, 127)
para(c, 'inquiry@mirrormetrics.com.bd  |  Dhaka, Bangladesh', M+18, 115, W-2*M-36, size=10, color=INK)
c.showPage()
base(c, 2, 'APPROACH & DELIVERABLES')
label(c, 'RIGOROUS BY DESIGN. HUMAN AT EVERY STEP.', M, H-127)
y = heading(c, 'From a clear question<br/>to a useful direction.', M, H-150, W-2*M, size=32)
y -= 32
phases = [
    ('01 / DESIGN', 'Connect the research question to the decision. Define the population, scope, sample, instruments, practical constraints, and participant safeguards.'),
    ('02 / FIELDWORK', 'Pilot the tools, prepare interviewer guidance, and plan collection around language, context, access, and the agreed field schedule.'),
    ('03 / QUALITY', 'Agree validation and supervision procedures in advance. Document review, cleaning, and any changes made during collection.'),
    ('04 / ANALYSIS', 'Answer the research questions clearly. Distinguish findings from interpretation, report limitations, and explain implications for decisions.'),
]
for title, body in phases:
    label(c, title, M, y)
    y = para(c, body, M, y-15, W-2*M, size=10)-23
label(c, 'POTENTIAL PROJECT DELIVERABLES', M, y)
y -= 19
for text in ['Research framework and sampling plan', 'Survey instruments or qualitative discussion guides', 'Documented dataset, codebook, and quality review notes', 'Analytical report, executive summary, and findings presentation']:
    y = bullet(c, text, M, y, W-2*M, size=9)
y -= 4
para(c, 'The final scope, coverage, methods, schedule, and outputs are agreed in the project proposal. This overview does not assert client endorsements, certifications, staff credentials, or completed project results.', M, y, W-2*M, size=9)
c.save()

sample = OUT / 'illustrative-study-brief.pdf'
c = canvas.Canvas(str(sample), pagesize=A4)
c.setTitle('Illustrative Study Brief | Community Service Access')
c.setAuthor('Mirror Metrics Research Ltd')
base(c, 1, 'ILLUSTRATIVE WORK SAMPLE')
label(c, 'SAMPLE DESIGN - NOT A COMPLETED CLIENT STUDY', M, H-127)
y = heading(c, 'Understanding access<br/>to community services.', M, H-150, W-2*M, size=33)
y = para(c, 'An example of how a research brief can connect a practical question, an appropriate approach, and clear deliverables. No data has been collected and no results are reported.', M, y-22, W-2*M, size=11)
y -= 30
label(c, '01 / THE DECISION', M, y)
y = para(c, 'A hypothetical development organization wants to decide which barriers to address when adapting a community service program.', M, y-16, W-2*M)-25
label(c, '02 / THE RESEARCH QUESTIONS', M, y)
y -= 19
for item in ['Who knows about the service, and who does not?', 'What practical, social, or information barriers affect access?', 'How do participants describe their experience?', 'Which changes should be considered for further testing?']:
    y = bullet(c, item, M, y, W-2*M)
y -= 15
label(c, '03 / AN ILLUSTRATIVE APPROACH', M, y)
y = para(c, 'Combine a structured household survey with participant interviews and conversations with program implementers. Review existing program records where permission and suitability allow.', M, y-16, W-2*M)-20
label(c, 'PARTICIPANTS & SCOPE', M, y)
y = para(c, 'Adults in selected program communities, with attention to people who use the service and those who do not. The number of sites and participants should be determined from the objectives, access conditions, and available resources.', M, y-16, W-2*M)
para(c, 'Planning note: this sample deliberately avoids claiming a representative sample or promising a fixed timeline before the context is known.', M, 109, W-2*M, size=9, color=TEAL)
c.showPage()
base(c, 2, 'ILLUSTRATIVE WORK SAMPLE')
label(c, 'FROM DESIGN TO DOCUMENTATION', M, H-127)
y = heading(c, 'A visible process.<br/>A useful set of outputs.', M, H-150, W-2*M, size=32)
y -= 30
sections = [
    ('04 / PARTICIPANT CARE', 'Explain the purpose of the study and voluntary participation in appropriate language. Agree consent, privacy, recontact, and any ethics-review requirements before collection. Avoid collecting identifiers that are not needed.'),
    ('05 / FIELD QUALITY', 'Pilot the instruments. Brief interviewers on wording and difficult situations. Agree supervision and validation checks, document access issues and changes, and keep a clear data-cleaning log.'),
    ('06 / ANALYSIS', 'Describe reach and reported barriers within the limits of the selected sample. Examine interview themes alongside survey findings. Separate observed patterns from possible explanations and avoid causal claims the design cannot support.'),
]
for title, body in sections:
    label(c, title, M, y)
    y = para(c, body, M, y-16, W-2*M, size=10)-24
label(c, '07 / POTENTIAL DELIVERABLES', M, y)
y -= 19
for text in ['Agreed study protocol and piloted instruments', 'Fieldwork documentation and quality review log', 'An anonymized dataset and codebook, where appropriate', 'Findings brief with limitations and areas for further investigation']:
    y = bullet(c, text, M, y, W-2*M, size=9)
y -= 5
para(c, 'Adaptation checklist: confirm the decision, study population, locations, language needs, permissions, budget, timeline, and intended use of the findings before commissioning.', M, y, W-2*M, size=9, color=TEAL)
c.save()
for path in [profile, sample]:
    shutil.copyfile(path, PUBLIC / path.name)
    print(path)
