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
    title: "Technical Proof",
    description: "CFD, FEA, and lifecycle assessment turn the partnership into documented engineering progress, not generic sustainability copy.",
  },
  {
    title: "Talent Pipeline",
    description: "Meet Smith Engineering students through reviews, lab visits, and recruiting touchpoints tied to a real build cycle.",
  },
  {
    title: "Competition Visibility",
    description: "Your brand appears across the vessel, team media, and SuMoth Challenge representation at Lake Garda.",
  },
];
