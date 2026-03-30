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
  { name: "Andrew Chisholm", role: "Project Lead", discipline: "Mechanical Engineering" },
  { name: "Team Lead 2", role: "Chief Engineer", discipline: "Mechanical Engineering" },
  { name: "Team Lead 3", role: "Design Lead", discipline: "Engineering Physics" },
  { name: "Team Lead 4", role: "Materials Lead", discipline: "Materials Engineering" },
  { name: "Team Lead 5", role: "Structures Lead", discipline: "Civil Engineering" },
  { name: "Team Lead 6", role: "Hydrodynamics Lead", discipline: "Mechanical Engineering" },
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
  { name: "Member 11", role: "Surface Finishing", discipline: "Materials Engineering" },
  { name: "Member 12", role: "Testing", discipline: "Mechanical Engineering" },
  { name: "Member 13", role: "CAD/CAM", discipline: "Mechanical Engineering" },
  { name: "Member 14", role: "Rigging", discipline: "Mechanical Engineering" },
  { name: "Member 15", role: "Outreach", discipline: "Engineering & Management" },
  { name: "Member 16", role: "Documentation", discipline: "Engineering & Management" },
  { name: "Member 17", role: "Composites", discipline: "Materials Engineering" },
  { name: "Member 18", role: "Analysis", discipline: "Engineering Physics" },
  { name: "Member 19", role: "Fabrication", discipline: "Mechanical Engineering" },
  { name: "Member 20", role: "Design", discipline: "Mechanical Engineering" },
  { name: "Member 21", role: "Testing", discipline: "Civil Engineering" },
  { name: "Member 22", role: "Materials", discipline: "Materials Engineering" },
  { name: "Member 23", role: "CAD", discipline: "Mechanical Engineering" },
  { name: "Member 24", role: "Analysis", discipline: "Engineering Physics" },
];

export const advisors: Advisor[] = [
  { name: "Faculty Advisor 1", title: "Professor", affiliation: "Smith School of Engineering, Queen's University" },
  { name: "Faculty Advisor 2", title: "Associate Professor", affiliation: "Department of Mechanical & Materials Engineering" },
  { name: "Industry Advisor", title: "Senior Engineer", affiliation: "Composites Industry" },
];

export const disciplines = [
  { name: "Structures & Composites", count: 8 },
  { name: "Hydrodynamics & CFD", count: 5 },
  { name: "Hull & Foil Design", count: 6 },
  { name: "Materials Science", count: 5 },
  { name: "Systems & Integration", count: 3 },
  { name: "Manufacturing & Fabrication", count: 3 },
];
