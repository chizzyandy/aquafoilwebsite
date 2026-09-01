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
  { name: "Andrew Chisholm", role: "Co-Founder", discipline: "Mechanical Engineering", image: "/images/Team/AndrewChisholm.jpeg", linkedin: "https://www.linkedin.com/in/andrew-chisholm1/" },
  { name: "Thomas Hung", role: "Co-Founder", discipline: "Engineering Physics", image: "/images/Team/ThomasHung.jpeg", linkedin: "https://www.linkedin.com/in/thomas-hung-8a3082299" },
  { name: "Aidan Woods", role: "CFD Lead", discipline: "Engineering Physics", image: "/images/Team/AidanWoods.png", linkedin: "https://www.linkedin.com/in/aidan-woods-34860a347/" },
  { name: "Sarah Delamere", role: "CFD Research Lead", discipline: "Engineering Physics", image: "/images/Team/SarahDelamere.jpeg", linkedin: "https://www.linkedin.com/in/sarahdelamere/" },
  { name: "Tory Mee", role: "CFD Foil Lead", discipline: "Engineering Physics", image: "/images/Team/ToryMee.jpeg", linkedin: "https://www.linkedin.com/in/tory-mee/" },
  { name: "Joel Voyer", role: "Mechanical Lead", discipline: "Engineering Physics" },
  { name: "Tochukwu Odiwa", role: "CFD Hull Lead", discipline: "Engineering Physics", image: "/images/Team/TochukwuOdiwa.png", linkedin: "https://www.linkedin.com/in/tochukwu-odiwa-ba8480282/" },
  { name: "Ethan Astri", role: "Computation Lead", discipline: "Applied Math", image: "/images/Team/EthanAstri.jpeg", linkedin: "https://www.linkedin.com/in/ethan-astri-3887372a0/" },
  { name: "Nicolas Kaye", role: "Networks Lead", discipline: "Computer Engineering", image: "/images/Team/NicholasKaye.jpeg", linkedin: "https://www.linkedin.com/in/nicolas-kaye-4005552b4/" },
  { name: "Jubal Clapp", role: "Radar Lead", discipline: "Electrical Engineering", linkedin: "https://www.linkedin.com/in/jubal-clapp/" },
];

export const advisors: Advisor[] = [
  { name: "Dr. Bradley Diak", title: "Professor", affiliation: "Smith School of Engineering, Queen's University" },
  { name: "Dr. Patrick Oosthuizen", title: "Professor Emeritus", affiliation: "Department of Mechanical & Materials Engineering" },
  { name: "Jane Doe", title: "Senior Engineer", affiliation: "Composites Industry" },
];
