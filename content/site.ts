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
  photoCredit: "Stanley Mshelia Photography",
} as const;

export const nav = [
  { label: "Profile", href: "#profile" },
  { label: "Experience", href: "#experience" },
  { label: "Areas of practice", href: "#practice" },
  { label: "Training", href: "#training" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Medical doctor · Abuja, Nigeria",
  title: "Dr. Tina Nimrod Mahlon",
  statement:
    "I bring emergency, primary and humanitarian care to communities where it is hardest to reach.",
  intro:
    "I trained at the University of Maiduguri and now work at Royal Orthopedic Hospital, Abuja. Before that I served as medical director of a clinic and maternity in Abuja, and worked in a teaching hospital, a district hospital and an MSF stabilisation centre for severe acute malnutrition across Borno and Gombe States.",
  primaryCta: "Get in touch",
  secondaryCta: { label: "See my experience", href: "#experience" },
  portraitAlt:
    "Portrait of Dr. Tina Nimrod Mahlon in grey scrubs, smiling over her shoulder with a white coat and red stethoscope",
  portraitCaption: "Photograph: Stanley Mshelia Photography",
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
  title: "Assessment of serum zinc levels in children under 12 months, with and without diarrhoea.",
  note: "I carried out this study at the University of Maiduguri Teaching Hospital and the State Specialist Hospital, Borno State.",
} as const;

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
  heading: "Hiring for a clinical or humanitarian health role? Let’s talk.",
  body: "I’m currently based in Abuja, Nigeria. Write to me directly to talk about a position or to ask for my full CV. I’m happy to share references on request.",
  cta: "Email me",
} as const;

export const footer = {
  copyright: "© 2026 Dr. Tina Nimrod Mahlon",
  credit: "Portrait by Stanley Mshelia Photography",
} as const;

// Accessibility-only text (not shown in the design).
export const a11y = {
  skipLink: "Skip to content",
  skillsLabel: "Skills used",
} as const;
