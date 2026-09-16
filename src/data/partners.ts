export interface Partner {
  name: string;
  tier: 'founding' | 'technical' | 'supporting' | 'software';
  logo?: string;
  /** Set when the logo artwork is dark ink drawn for light backgrounds. */
  logoOnLight?: boolean;
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
    name: "Wind Athletes Canada",
    tier: "technical",
    url: "https://www.windathletes.ca/",
    logo: "/images/partners/windathletes-logo.png",
    logoOnLight: true,
    description: "Loaned BladeRider Moth serving as our test platform for design validation and a source of spare parts.",
  },
  {
    name: "Chisholm Lumber",
    tier: "supporting",
    url: "https://www.chisholmlumber.com/",
    logo: "/images/partners/chisholm-logo.png",
    logoOnLight: true,
    description: "Raw timber supplied for the boat build, milled by a family forest products operation running since 1857.",
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
