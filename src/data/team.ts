export interface TeamMember {
  name: string;
  role: string;
  discipline: string;
  image?: string;
  linkedin?: string;
}

export interface Advisor {
  name: string;
  title: string;
  affiliation: string;
  image?: string;
}

export const teamLeads: TeamMember[] = [
  { name: "Andrew Chisholm", role: "Co-Founder", discipline: "Mechanical Engineering", linkedin: "https://www.linkedin.com/in/andrew-chisholm1/" },
  { name: "Thomas Hung", role: "Co-Founder", discipline: "Engineering Physics", linkedin: "https://www.linkedin.com/in/thomas-hung-8a3082299" },
  { name: "Aidan Woods", role: "CFD Lead", discipline: "Engineering Physics" },
  { name: "Joel Voyer", role: "Mechanical Lead", discipline: "Engineering Physics" },
  { name: "Jack Smith", role: "Business Lead", discipline: "Commerce" },
];

export const teamMembers: TeamMember[] = [
  { name: "Alex Chen", role: "Composites", discipline: "Mechanical Engineering" },
  { name: "Sarah Jenkins", role: "CFD Analysis", discipline: "Engineering Physics" },
  { name: "Michael Patel", role: "Fabrication", discipline: "Mechanical Engineering" },
  { name: "Emily Wong", role: "Structural Analysis", discipline: "Civil Engineering" },
  { name: "David Kim", role: "Systems Design", discipline: "Mechatronics" },
  { name: "Jessica Lee", role: "Materials Testing", discipline: "Materials Engineering" },
  { name: "Ryan Martinez", role: "Foil Design", discipline: "Mechanical Engineering" },
  { name: "Olivia Davis", role: "Hull Design", discipline: "Engineering Physics" },
  { name: "Daniel Taylor", role: "Manufacturing", discipline: "Mechanical Engineering" },
  { name: "Sophia Wilson", role: "Data Systems", discipline: "Computer Engineering" },
];

export const advisors: Advisor[] = [
  { name: "Dr. Bradley Diak", title: "Professor", affiliation: "Smith School of Engineering, Queen's University" },
  { name: "Dr. Patrick Oosthuizen", title: "Professor Emeritus", affiliation: "Department of Mechanical & Materials Engineering" },
  { name: "Jane Doe", title: "Senior Engineer", affiliation: "Composites Industry" },
];

export interface Founder {
  name: string;
  role: string;
  discipline: string;
  linkedin: string;
  website?: string;
  bio: string;
  highlights: string[];
}

export const founders: Founder[] = [
  {
    name: "Andrew Chisholm",
    role: "Co-Founder",
    discipline: "Mechanical Engineering",
    linkedin: "https://www.linkedin.com/in/andrew-chisholm1/",
    bio: "A Schulich Leader studying Mechanical Engineering at Queen’s, Andrew is a WASZP Junior World Champion (2025) who has competed internationally across Europe and North America. He has coached youth sailing programs, interned with the NorthStar SailGP team in Germany, and brings years of experience optimizing boat setup and race strategy at the highest levels of the sport.",
    highlights: ["WASZP Junior World Champion 2025", "NorthStar SailGP Shore Team Intern", "Schulich Leader", "Youth Sailing Coach"],
  },
  {
    name: "Thomas Hung",
    role: "Co-Founder",
    discipline: "Engineering Physics",
    linkedin: "https://www.linkedin.com/in/thomas-hung-8a3082299",
    website: "https://www.thomashung.space/",
    bio: "An Engineering Physics student at Queen’s, Thomas represented Team Canada at the ISAF Youth Sailing World Championships in iQFOiL windsurfing (Brazil 2023, Italy 2024). He has designed robotic end-effectors with the Canadian Space Agency, serves as mechanical team director for Queen’s autonomous surface vehicle team aQuatonomous, and holds an NSERC undergraduate research grant. He brings hands-on experience in composites manufacturing, CFD simulation, and structural analysis.",
    highlights: ["Team Canada — ISAF Youth Worlds", "Canadian Space Agency Collaborator", "NSERC USRA Grant Holder", "aQuatonomous Mechanical Director"],
  },
];

export const disciplines = [
  { name: "CFD & Hydrodynamics", count: 4 },
  { name: "Mechanical Integration", count: 5 },
  { name: "Business & Sponsorship", count: 3 },
  { name: "Structural Analysis", count: 2 },
  { name: "Manufacturing & Fabrication", count: 5 },
];
