// All copy for the site. This file is the single source of truth for text:
// components render from it and never hard-code copy.
// Spelling is British (orthopaedic, paediatrics) except the hospital name, which is kept as given.

export const site = {
  name: "Dr. Tina Nimrod Mahlon",
  shortName: "Tina Nimrod Mahlon",
  postNominal: "MBBS",
  email: "tinanimrod28@gmail.com",
  emailSubject: "Opportunity for Dr. Mahlon",
  meta: {
    title: "Dr. Tina Nimrod Mahlon — Medical Doctor",
    description:
      "Medical doctor based in Abuja, Nigeria, with hospital, clinic-leadership and humanitarian field experience across Abuja, Borno and Gombe States.",
  },
} as const;

export const nav = [
  { label: "Profile", href: "#profile" },
  { label: "Experience", href: "#experience" },
  { label: "Areas of practice", href: "#practice" },
  { label: "Research", href: "#research" },
  { label: "Training", href: "#training" },
  { label: "Contact", href: "#contact" },
] as const;

/** Phone menu (≤ 920px): button labels for the slim sticky header. */
export const menu = {
  open: "Menu",
  close: "Close",
} as const;

export const hero = {
  eyebrow: "Medical doctor · Abuja, Nigeria",
  title: "Dr. Tina Nimrod Mahlon",
  statement:
    "I bring emergency, primary and humanitarian care to communities where it is hardest to reach.",
  intro:
    // Draft for Dr. Mahlon to approve.
    "I trained at the University of Maiduguri. I’m curious about the world and the beauty in it, and passionate about making healthcare accessible, delivered with excellence and empathy.",
  primaryCta: { label: "Say hello", href: "#contact" },
  secondaryCta: { label: "See my experience", href: "#experience" },
  portraitAlt:
    "Portrait of Dr. Tina Nimrod Mahlon in grey scrubs, smiling over her shoulder with a white coat and red stethoscope",
  facts: [
    { label: "Qualification", value: "MBBS, University of Maiduguri, 2024" },
    { label: "Focus", value: "Emergency, primary and humanitarian care" },
    { label: "Currently", value: "Royal Orthopedic Hospital, Abuja" },
    { label: "Languages", value: "English · Hausa · Tangale" },
  ],
} as const;

export const profile = {
  number: "01",
  label: "Profile",
  lead: "I am a medically trained humanitarian, committed to equitable, crisis-responsive healthcare in underserved and disaster-affected communities.",
  body: "My work so far spans patient assessment, emergency care and the day-to-day running of clinical teams. I am careful with detail, comfortable carrying several responsibilities at once, and I communicate easily across cultures and languages. Above all I work to humanitarian principles: every patient is treated with dignity, neutrality and confidentiality.",
  stats: [
    {
      value: 50,
      suffix: "+",
      text: "patients treated every week across outpatient and inpatient care at General Hospital Billiri",
    },
    {
      value: 5,
      suffix: "",
      text: "clinical rotations completed: paediatrics, internal medicine, emergency care, surgery, and obstetrics & gynaecology",
    },
    {
      value: 3,
      suffix: "",
      text: "working languages for consultation and counselling: English, Hausa and Tangale",
    },
  ],
  map: {
    alt: "Outline map of Nigeria marking Maiduguri, Billiri and Abuja, joined in the order I have worked in them",
    caption: "Where I have worked: Maiduguri, then Billiri, and now Abuja.",
  },
} as const;

export type Role = {
  dates: string;
  place: string;
  current?: boolean;
  title: string;
  organisation: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

// Newest first. The first role carries the "Current role" tag.
export const experience: { number: string; label: string; heading: string; currentTag: string; roles: Role[] } = {
  number: "02",
  label: "Experience",
  heading: "Five settings, one standard of care.",
  currentTag: "Current role",
  roles: [
    {
      dates: "Sep 2026 – Present",
      place: "Abuja, FCT",
      current: true,
      title: "Medical Doctor",
      organisation: "Royal Orthopedic Hospital, Abuja",
      summary:
        "I care for orthopaedic patients in clinic and on the wards every day, from first history to treatment plan, and assist in theatre on minor and major cases alike.",
      highlights: [
        "Run daily consultations for outpatients and inpatients, taking histories, making diagnoses and outlining treatment plans.",
        "Carry out inpatient work-ups, ordering laboratory investigations and collecting samples.",
        "Assist in orthopaedic surgery, including open reduction of fractures and hip and knee replacements.",
        "Manage the full range of everyday orthopaedic cases, both minor and major.",
      ],
      tags: ["Orthopaedics", "Fracture care", "Joint replacement", "Surgical assisting"],
    },
    {
      dates: "Feb – Aug 2026",
      place: "Lugbe, Abuja",
      title: "Medical Director",
      organisation: "M3 Clinic and Maternity",
      summary:
        "I led the clinic as medical director while remaining its hands-on doctor, seeing every patient from first history to discharge and heading the whole staff team.",
      highlights: [
        "Saw all patients personally: took histories, examined, requested investigations, made diagnoses and treated.",
        "Admitted patients who needed inpatient care and managed them until they were well enough for discharge.",
        "Headed the full clinic team of nurses, laboratory technicians and pharmacists.",
        "Ran antenatal booking and follow-up visits, and performed ultrasound scans for pregnant women.",
      ],
      tags: ["Clinical leadership", "General practice", "Antenatal care", "Obstetric ultrasound"],
    },
    {
      dates: "Aug – Dec 2025",
      place: "Billiri, Gombe State",
      title: "Medical Doctor",
      organisation: "General Hospital Billiri",
      summary:
        "I ran outpatient clinics and ward rounds at a district hospital, led the health-worker team and covered the emergency room when patient numbers peaked.",
      highlights: [
        "Treated 50+ patients a week with compassionate, patient-centred care in outpatient and inpatient settings.",
        "Led a team of health workers, setting team plans and seeing them carried out on time.",
        "Triaged and stabilised patients in the emergency room during periods of peak influx.",
        "Performed caesarean sections, appendectomies, herniorrhaphies and cystectomies.",
        "Counselled patients and caregivers on conditions, treatment plans and prognosis, and referred promptly when a case was beyond hospital level.",
      ],
      tags: ["Outpatient & inpatient", "Emergency triage", "Surgery", "Team leadership"],
    },
    {
      dates: "Apr 2024 – Mar 2025",
      place: "Maiduguri, Borno State",
      title: "House Officer",
      organisation: "University of Maiduguri Teaching Hospital (UMTH)",
      summary:
        "I spent a year in supervised practice, rotating through paediatrics, internal medicine, emergency care, surgery, and obstetrics & gynaecology.",
      highlights: [
        "Ran outpatient consultations and daily ward rounds in every department of posting.",
        "Weighed and screened under-fives daily with bedside anthropometric tools, managed malnutrition to WHO protocol and referred severe acute cases promptly.",
        "Registered and followed up antenatal patients, conducted deliveries and managed antepartum, intrapartum and postpartum complications.",
        "Resuscitated newborns with low APGAR scores after delivery.",
        "Assisted in and carried out surgical procedures including caesarean section and appendectomy.",
      ],
      tags: [
        "Paediatrics",
        "Obstetrics & gynaecology",
        "Neonatal resuscitation",
        "Malnutrition screening",
        "Surgery",
        "Internal medicine",
      ],
    },
    {
      dates: "Mar – May 2022",
      place: "Maiduguri, Borno State",
      title: "Medical Doctor",
      organisation: "Médecins Sans Frontières (MSF), Operational Centre Paris",
      summary:
        "I provided clinical care and supervision in a stabilisation centre for children with severe acute malnutrition and medical complications.",
      highlights: [
        "Supervised the daily clinical management of stabilisation-centre patients, keeping admission, discharge and transfer criteria understood and respected by the team.",
        "Supported delivery of community-based management of acute malnutrition (CMAM) and infant and young child feeding (IYCF) with nutrition and State Ministry of Health staff.",
        "Followed hospitalised and internally displaced patients through daily visits, deciding discharges and transfers with fellow doctors and keeping families informed.",
        "Conducted needs assessments and drafted reports, concept notes and project proposals.",
        "Took part in cluster and inter-sectoral coordination meetings, and handled data collection, analysis and reporting.",
      ],
      tags: ["SAM stabilisation", "CMAM & IYCF", "Needs assessment", "Cluster coordination"],
    },
  ],
};

export const practice = {
  number: "03",
  label: "Areas of practice",
  heading: "What I bring to a team.",
  intro:
    "Hands-on clinical skill, backed by the documentation, coordination and humanitarian standards that field programmes depend on.",
  cards: [
    {
      title: "Emergency & primary care",
      text: "Triage and stabilisation, outpatient clinics, ward rounds, clinical diagnosis and timely referral.",
    },
    {
      title: "Nutrition in emergencies",
      text: "Stabilisation-centre care for severe acute malnutrition, CMAM, IYCF and anthropometric screening.",
    },
    {
      title: "Maternal & newborn health",
      text: "Antenatal care and obstetric ultrasound, deliveries, management of obstetric complications and neonatal resuscitation.",
    },
    {
      title: "Surgical procedures",
      text: "Caesarean section, appendectomy, herniorrhaphy and cystectomy, plus assisting in fracture fixation and hip and knee replacement.",
    },
    {
      title: "Humanitarian practice",
      text: "Accountability to Affected Populations, Sphere standards, gender-sensitive medical support and disaster response.",
    },
    {
      title: "Data, reporting & outreach",
      text: "Clinical documentation and EMR, data collection and analysis, reporting, health promotion and community outreach.",
    },
  ],
} as const;

export const research = {
  number: "04",
  label: "Research",
  // Constant header: says what the study is. Drafts for Dr. Mahlon to approve.
  kicker: "Final-year MBBS research project · University of Maiduguri · 2023",
  title: "Zinc deficiency and infant health",
  // Text slides that advance on their own above the dot field. `view` sets which dot view each slide shows.
  // Wording is drafted for Dr. Mahlon to approve; the figures must match the dot field exactly.
  slides: [
    {
      view: "all",
      headline: "Half the infants we tested were short of zinc.",
      body: "With four classmates, I measured serum zinc in 246 infants under 12 months at two hospitals in Maiduguri, with and without diarrhoea.",
    },
    {
      view: "groups",
      headline: "Low zinc was more common with diarrhoea.",
      body: "67 of 116 infants with diarrhoea had low serum zinc, against 56 of 130 without.",
    },
    {
      view: "groups",
      headline: "Age, feeding and growth were linked to it.",
      body: "Among infants with diarrhoea, low zinc was linked with:",
      pills: ["Age 8–10 months", "Not exclusively breastfed", "Underweight", "Stunting"],
    },
    {
      view: "all",
      headline: "The fix starts with caregivers.",
      body: "We recommended helping caregivers recognise zinc-rich foods and work them into their infants’ diets.",
    },
  ] as { view: "all" | "groups"; headline: string; body: string; pills?: string[] }[],
  slideControls: {
    label: "Study findings",
    slide: "Slide",
    of: "of",
    pause: "Pause",
    play: "Play",
  },
  // Study at a glance, styled as a lab request form (left column on desktop).
  slip: {
    heading: "Study at a glance",
    rows: [
      { term: "Test", value: "Serum zinc" },
      { term: "Patients", value: "246 infants under 12 months" },
      { term: "Sites", value: "UMTH · State Specialist Hospital" },
      { term: "Collected", value: "March–April 2023" },
      { term: "Supervisor", value: "Prof. S. J. Yahaya" },
    ],
  },
  // Figures for the dot field. Use these exactly; add no other statistics.
  // 116 and 130 are column totals from the report's Table 5: confirm with Dr. Mahlon.
  stat: {
    low: 123,
    total: 246,
    of: "of",
    line: "infants had low serum zinc (below 63.8 µg/dl).",
  },
  views: {
    label: "Choose how to show the infants",
    all: "All infants",
    groups: "With and without diarrhoea",
    // Shorter labels on phones (≤ 560px) so both buttons fit on one line.
    allShort: "All",
    groupsShort: "By diarrhoea",
  },
  groups: [
    { low: 67, total: 116, caption: "With diarrhoea: 67 of 116 low" },
    { low: 56, total: 130, caption: "Without diarrhoea: 56 of 130 low" },
  ],
  /** Screen-reader description of the dot field, per view. */
  figureLabels: {
    all: "123 of 246 infants had low serum zinc.",
    groups:
      "With diarrhoea, 67 of 116 infants had low serum zinc. Without diarrhoea, 56 of 130 infants had low serum zinc.",
  },
  credits: "Submitted October 2023 · Approved by the UMTH Research and Ethics Committee",
  /** Co-authors, named only with their permission. Credits show "With …" only when this has names. */
  coauthors: [] as string[],
  coauthorsPrefix: "With",
  reportLink: {
    label: "Request the full report",
    subject: "Request: serum zinc study report",
  },
};

export const training = {
  number: "05",
  label: "Training",
  heading: "Education, certificates and service.",
  columns: [
    {
      title: "Education",
      items: [
        {
          name: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
          detail: "University of Maiduguri, Borno State · 2024",
        },
      ],
    },
    {
      title: "Certificates",
      items: [
        { name: "Integrated Disease Surveillance & Response (IDSR)", detail: "NPHCDA · 2025" },
        { name: "Newborn Care Foundation", detail: "NPHCDA · 2025" },
        { name: "Hypertension Control in Nigeria", detail: "NPHCDA · 2025" },
        { name: "Basic Life Support (BLS)", detail: "Training completed" },
      ],
    },
    {
      title: "Volunteering",
      items: [
        { name: "Flood Response Medical Volunteer", detail: "Borno State · 2024" },
        { name: "CMDA medical outreaches", detail: "Borno State" },
        { name: "Public Health Webinar Series", detail: "Continuing education" },
      ],
    },
    {
      title: "Languages & tools",
      items: [
        { name: "English, Hausa", detail: "Fluent" },
        { name: "Tangale", detail: "Native" },
        {
          name: "Electronic medical records",
          detail: "Clinical documentation systems, data entry and reporting tools, Excel, Word, PowerPoint",
        },
      ],
    },
  ],
} as const;

export const contact = {
  number: "06",
  label: "Contact",
  heading: "Have a role, a project or a question? Let’s talk.",
  body: "I’m glad to hear from employers, programme teams, researchers and anyone working to make care reach further. Write to me directly; I’m happy to share my full CV and references on request.",
  cta: "Email me",
  // Clicking "Email me" or the address copies the address (and "Email me" still opens the mail app).
  copied: "Copied",
  copiedNote: "Address copied. Paste it wherever you write from.",
  copyAddressLabel: "Copy email address",
} as const;

export const footer = {
  copyright: "© 2026 Dr. Tina Nimrod Mahlon",
  backToTop: "Back to top",
  navLabel: "Footer",
  sectionsLabel: "Sections",
  // Optional details. Each one appears in the footer only once it is filled in; confirm with Dr. Mahlon first.
  profiles: [] as { label: string; href: string }[], // e.g. { label: "LinkedIn", href: "https://www.linkedin.com/in/…" }
  registration: { label: "MDCN registration", value: "" }, // Medical and Dental Council of Nigeria number
  availability: "", // e.g. "Open to clinical and humanitarian roles"
};

// Accessibility-only text (not shown in the design).
export const a11y = {
  skipLink: "Skip to content",
  skillsLabel: "Skills used",
  primaryNav: "Primary",
  menuNav: "Sections",
} as const;
