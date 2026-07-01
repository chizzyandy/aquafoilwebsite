export interface Update {
  id: string;
  title: string;
  date: string;
  category: 'design' | 'materials' | 'fabrication' | 'team' | 'milestone';
  summary: string;
  image?: string;
  link?: string;
}

export const updates: Update[] = [
  {
    id: "update-006",
    title: "CFD Workflow Established",
    date: "2026-03-15",
    category: "design",
    summary: "OpenFOAM pipeline operational. Initial foil profile simulations showing promising lift-to-drag characteristics across target speed range.",
  },
  {
    id: "update-005",
    title: "Material Testing Underway",
    date: "2026-02-28",
    category: "materials",
    summary: "Bio-based epoxy systems and natural fibre reinforcement candidates entering mechanical testing phase. Benchmarking against conventional composites.",
  },
  {
    id: "update-004",
    title: "Hull Concept Review Complete",
    date: "2026-02-10",
    category: "design",
    summary: "Three hull concepts evaluated against performance, manufacturability, and sustainability criteria. Lead concept selected for detailed development.",
  },
  {
    id: "update-003",
    title: "Partnership Programme Launch",
    date: "2026-01-20",
    category: "milestone",
    summary: "Formal partnership framework established. Engineering relevance, sustainable performance proof, and talent pipeline form the core value proposition.",
  },
  {
    id: "update-002",
    title: "Team at Full Strength",
    date: "2025-11-15",
    category: "team",
    summary: "30+ members now onboard across structures, hydrodynamics, materials, design, and systems. Six engineering disciplines represented.",
  },
  {
    id: "update-001",
    title: "SuMoth Challenge 2027 Entry",
    date: "2025-10-01",
    category: "milestone",
    summary: "aQuaFoil officially enters the SuMoth Challenge 2027 — the premier sustainable foiling Moth competition. Design brief established.",
  },
];

export const categoryLabels: Record<Update['category'], string> = {
  design: "Design",
  materials: "Materials",
  fabrication: "Fabrication",
  team: "Team",
  milestone: "Milestone",
};
