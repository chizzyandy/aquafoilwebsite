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

export const teamMembers: TeamMember[] = [
  { name: "Andrew Chisholm", role: "Co-Founder", discipline: "Mechanical Engineering", linkedin: "https://www.linkedin.com/in/andrew-chisholm1/" },
  { name: "Thomas Hung", role: "Co-Founder", discipline: "Engineering Physics", linkedin: "https://www.linkedin.com/in/thomas-hung-8a3082299" },
  { name: "Aidan Woods", role: "CFD Lead", discipline: "Engineering Physics", linkedin: "https://www.linkedin.com/in/aidan-woods-34860a347/" },
  { name: "Joel Voyer", role: "Mechanical Lead", discipline: "Engineering Physics" },
  { name: "Tochukwu Odiwa", role: "CFD Hull Lead", discipline: "Engineering Physics", linkedin: "https://www.linkedin.com/in/tochukwu-odiwa-ba8480282/" },
  { name: "Ethan Astri", role: "Computation Lead", discipline: "Applied Math", linkedin: "https://www.linkedin.com/in/ethan-astri-3887372a0/" },
  { name: "Nicolas Kaye", role: "Networks Lead", discipline: "Computer Engineering", linkedin: "https://www.linkedin.com/in/nicolas-kaye-4005552b4/" },
];

export const advisors: Advisor[] = [
  { name: "Dr. Bradley Diak", title: "Professor", affiliation: "Smith School of Engineering, Queen's University" },
  { name: "Dr. Patrick Oosthuizen", title: "Professor Emeritus", affiliation: "Department of Mechanical & Materials Engineering" },
  { name: "Jane Doe", title: "Senior Engineer", affiliation: "Composites Industry" },
];
