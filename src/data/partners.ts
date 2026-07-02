export interface Partner {
  name: string;
  tier: 'founding' | 'technical' | 'supporting' | 'software';
  logo?: string;
  url?: string;
  description?: string;
}

export const partners: Partner[] = [
  {
    name: "Smith Engineering at Queen's University",
    tier: "founding",
    url: "https://smithengineering.queensu.ca/index.html",
    description: "Institutional home and faculty support. ",
    logo: "/images/partners/smith-logo.svg",
  },
  {
    name: "SolidWorks",
    tier: "software",
    url: "https://www.solidworks.com/",
    logo: "https://icon.horse/icon/solidworks.com",
    description: "CAD and parametric modelling platform used across mechanical design and assembly.",
  },
  {
    name: "Ansys",
    tier: "software",
    url: "https://www.ansys.com/",
    logo: "/images/partners/ansys-logo.png",
    description: "Structural simulation and finite element analysis for load case validation.",
  },
];

export const partnershipValues = [
  {
    title: "Proof, Not Claims",
    description: "Every decision validated by CFD, FEA, and lifecycle assessment. Your brand ties to documented outcomes, not marketing copy.",
  },
  {
    title: "Talent Before the Market",
    description: "Direct access to Smith Engineering students in CFD, composites, manufacturing, and structural analysis — before they graduate. Lab visits, design reviews, resume bank, and internship pipeline included.",
  },
  {
    title: "First-Mover Advantage",
    description: "We are confirming 2026–2027 partners now. Early partners receive primary placement and the deepest association with the programme across an 18-month build cycle to Lake Garda.",
  },
  {
    title: "ESG & Sustainability Alignment",
    description: "Materials assessed through MarineShift360 lifecycle analysis. Measurable environmental impact, not aspirational language.",
  },
  {
    title: "International Competition Visibility",
    description: "Your brand travels to Lake Garda, Italy alongside teams from 7+ nations during Foiling Week — covered by sailing and engineering media worldwide.",
  },
];
