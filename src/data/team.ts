export interface TeamMember {
  name: string;
  role?: string;
  discipline?: string;
  image?: string;
  linkedin?: string;
}

export interface SubTeam {
  name: string;
  blurb: string;
  /** Row in the pyramid, 1 = directly below the captains. Rows widen going down. */
  tier: number;
  members: TeamMember[];
}

export interface Advisor {
  name: string;
  title: string;
  affiliation: string;
  /** The domain this advisor covers for the team. */
  focus?: string;
  image?: string;
  link?: string;
  linkLabel?: string;
}

export const captains: TeamMember[] = [
  { name: "Andrew Chisholm", role: "Co-Founder", discipline: "Mechanical Engineering", image: "/images/Team/AndrewChisholm.jpeg", linkedin: "https://www.linkedin.com/in/andrew-chisholm1/" },
  { name: "Thomas Hung", role: "Co-Founder", discipline: "Engineering Physics", image: "/images/Team/ThomasHung.jpeg", linkedin: "https://www.linkedin.com/in/thomas-hung-8a3082299" },
];

export const subTeams: SubTeam[] = [
  {
    name: "CFD",
    blurb: "Hydrodynamic simulation of the hull and foils, and the computation that makes it tractable.",
    tier: 3,
    members: [
      { name: "Aidan Woods", role: "CFD Lead", discipline: "Engineering Physics", image: "/images/Team/AidanWoods.png", linkedin: "https://www.linkedin.com/in/aidan-woods-34860a347/" },
      { name: "Sarah Delamere", role: "CFD Research Lead", discipline: "Engineering Physics", image: "/images/Team/SarahDelamere.jpeg", linkedin: "https://www.linkedin.com/in/sarahdelamere/" },
      { name: "Tory Mee", role: "CFD Foil Lead", discipline: "Engineering Physics", image: "/images/Team/ToryMee.jpeg", linkedin: "https://www.linkedin.com/in/tory-mee/" },
      { name: "Ethan Astri", role: "Computation Lead", discipline: "Applied Math", image: "/images/Team/EthanAstri.jpeg", linkedin: "https://www.linkedin.com/in/ethan-astri-3887372a0/" },
      { name: "Nicolas Kaye", role: "Networks Lead", discipline: "Computer Engineering", image: "/images/Team/NicholasKaye.jpeg", linkedin: "https://www.linkedin.com/in/nicolas-kaye-4005552b4/" },
    ],
  },
  {
    name: "Systems",
    blurb: "Mechanical systems, actuation, and the control hardware that keeps the boat flying.",
    tier: 1,
    members: [
      { name: "Joel Voyer", role: "Mechanical Lead", discipline: "Engineering Physics" },
      { name: "Evan Jones", linkedin: "https://www.linkedin.com/in/evanjones06/", image: "/images/Team/EvanJones.jpeg" },
    ],
  },
  {
    name: "Structures",
    blurb: "Composite layup, structural analysis, and the fabrication of the hull and foil assemblies.",
    tier: 2,
    members: [
      { name: "James Mackenzie", image: "/images/Team/JamesMackenzie.jpeg", linkedin: "https://www.linkedin.com/in/james-mackenzie-14b613394/" },
      { name: "Allison Branch", image: "/images/Team/AllisonBranch.jpeg", linkedin: "https://www.linkedin.com/in/allison-branch-a4a56a339/" },
    ],
  },
  {
    name: "Sonar",
    blurb: "Acoustic sensing and ride-height detection for autonomous flight control.",
    tier: 1,
    members: [
      { name: "Jubal Clapp", role: "Sonar Lead", discipline: "Electrical Engineering", image: "/images/Team/JubalClapp.jpeg", linkedin: "https://www.linkedin.com/in/jubal-clapp/" },
    ],
  },
  {
    name: "Business",
    blurb: "Sponsorship, outreach, and communications that fund and carry the project.",
    tier: 2,
    members: [
      { name: "Brooke Irish", role: "Communications Officer", image: "/images/Team/BrookeIrish.jpeg", linkedin: "https://www.linkedin.com/in/brooke-irish-14431a315/" },
      { name: "Ella Radcliffe", role: "Business Lead", image: "/images/Team/EllaRadcliffe.jpeg", linkedin: "https://www.linkedin.com/in/ella-radcliffe-5b5170382/" },
    ],
  },
];

export const advisors: Advisor[] = [
  {
    name: "Steve Killing",
    title: "Yacht Designer",
    affiliation: "Steve Killing Yacht Design",
    focus: "Naval Architecture",
    link: "https://stevekilling.com/",
    linkLabel: "Website",
  },
  {
    name: "Dr. Barbara da Silva",
    title: "Assistant Professor",
    affiliation: "Mechanical & Materials Engineering, Queen's University",
    focus: "Fluid Dynamics",
    link: "https://bdasilva.smithengineering.queensu.ca/people/",
    linkLabel: "FloWER Lab",
  },
  {
    name: "Alex Benjamin",
    title: "Chief Revenue Officer & Partner",
    affiliation: "ITS Consulting",
    focus: "Business",
    link: "https://www.linkedin.com/in/alex-benjamin-667965/",
    linkLabel: "LinkedIn",
  },
  {
    name: "Dr. Maria Teresa Chiri",
    title: "Assistant Professor",
    affiliation: "Mathematics & Statistics, Queen's University",
    focus: "Faculty Support",
    link: "https://mariateresachiri.weebly.com/",
    linkLabel: "Website",
  },
];

/** Sub-teams grouped into pyramid rows, narrowest first. */
export const teamTiers: SubTeam[][] = Array.from(
  new Set(subTeams.map((t) => t.tier))
)
  .sort((a, b) => a - b)
  .map((tier) => subTeams.filter((t) => t.tier === tier));
