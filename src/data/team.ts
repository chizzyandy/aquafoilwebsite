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
  { name: "Andrew Chisholm", role: "Co-Founder", discipline: "Mechanical Engineering" },
  { name: "Thomas Hung", role: "Co-Founder", discipline: "Engineering Physics" },
  { name: "Aidan Woods", role: "CFD Director", discipline: "Engineering Physics" },
  { name: "Joel Voyer", role: "Mechanical Director", discipline: "Engineering Physics" },
  { name: "Team Lead 5", role: "Business Director", discipline: "Comerce" },
];

export const teamMembers: TeamMember[] = [
  { name: "Member 1", role: "Composites", discipline: "Mechanical Engineering" },
  { name: "Member 2", role: "CFD Analysis", discipline: "Engineering Physics" },
  { name: "Member 3", role: "Fabrication", discipline: "Mechanical Engineering" },
  { name: "Member 4", role: "Structural Analysis", discipline: "Civil Engineering" },
  { name: "Member 5", role: "Systems Design", discipline: "Mechatronics" },
  { name: "Member 6", role: "Materials Testing", discipline: "Materials Engineering" },
  { name: "Member 7", role: "Foil Design", discipline: "Mechanical Engineering" },
  { name: "Member 8", role: "Hull Design", discipline: "Engineering Physics" },
  { name: "Member 9", role: "Manufacturing", discipline: "Mechanical Engineering" },
  { name: "Member 10", role: "Data Systems", discipline: "Computer Engineering" },
];

export const advisors: Advisor[] = [
  { name: "Faculty Advisor 1", title: "Professor", affiliation: "Smith School of Engineering, Queen's University" },
  { name: "Faculty Advisor 2", title: "Associate Professor", affiliation: "Department of Mechanical & Materials Engineering" },
  { name: "Industry Advisor", title: "Senior Engineer", affiliation: "Composites Industry" },
];

export const disciplines = [
  { name: "CFD & Hydrodynamics", count: 4 },
  { name: "Mechanical Integration", count: 5 },
  { name: "Business & Sponsorship", count: 3 },
  { name: "Structural Analysis", count: 2 },
  { name: "Manufacturing & Fabrication", count: 5 },
];
