export interface Partner {
  name: string;
  tier: 'founding' | 'technical' | 'supporting';
  logo?: string;
  url?: string;
  description?: string;
}

export const partners: Partner[] = [
  {
    name: "Queen's University",
    tier: "founding",
    description: "Institutional home and academic partner.",
  },
  {
    name: "Smith School of Engineering",
    tier: "founding",
    description: "Faculty support, facilities, and academic oversight.",
  },
  // Add partners here as they are confirmed
  // {
  //   name: "Partner Name",
  //   tier: "technical",
  //   logo: "/images/partners/partner-logo.svg",
  //   url: "https://partner.com",
  //   description: "Brief description of partnership.",
  // },
];

export const partnershipValues = [
  {
    title: "Engineering Relevance",
    description: "Direct connection to real design decisions in materials, fabrication, and structural engineering at the competitive edge.",
  },
  {
    title: "Sustainable Performance Proof",
    description: "Evidence — not claims — that sustainability and performance are compatible in serious engineering contexts.",
  },
  {
    title: "Talent Pipeline",
    description: "Access and visibility with the next generation of precision engineers at Queen's University.",
  },
  {
    title: "Technical Storytelling",
    description: "Your brand associated with credible, photogenic, measurable engineering work. Real content, real attribution.",
  },
  {
    title: "Brand Alignment",
    description: "Early-stage partnership with a programme built for prominence. The first partners will be the most visible.",
  },
];
