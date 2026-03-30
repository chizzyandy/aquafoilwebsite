export interface TimelinePhase {
  id: string;
  phase: string;
  title: string;
  period: string;
  status: 'completed' | 'active' | 'upcoming';
  description: string;
  milestones: string[];
}

export const timelinePhases: TimelinePhase[] = [
  {
    id: "01",
    phase: "Phase 01",
    title: "Foundation",
    period: "Sep 2024 — Dec 2024",
    status: "completed",
    description: "Team formation, initial research, and project scoping. Establishing engineering requirements and design constraints for a sustainable foiling Moth.",
    milestones: [
      "Team assembled — 30+ members across 6 disciplines",
      "SuMoth Challenge 2027 entry confirmed",
      "Initial design requirements established",
      "Literature review and benchmarking complete",
    ],
  },
  {
    id: "02",
    phase: "Phase 02",
    title: "Concept Design",
    period: "Jan 2025 — Apr 2025",
    status: "active",
    description: "Hull and foil concept development. CFD analysis using OpenFOAM. Material selection and preliminary structural analysis.",
    milestones: [
      "Hull concept selection",
      "Foil profile optimization — CFD workflow established",
      "Sustainable material candidates identified",
      "Preliminary structural models",
    ],
  },
  {
    id: "03",
    phase: "Phase 03",
    title: "Detailed Design",
    period: "May 2025 — Dec 2025",
    status: "upcoming",
    description: "Full engineering design, structural analysis, and manufacturing planning. Component-level specification for hull, foils, and rigging systems.",
    milestones: [
      "Detailed hull and foil CAD models",
      "FEA structural validation",
      "Manufacturing process planning",
      "Bill of materials finalized",
    ],
  },
  {
    id: "04",
    phase: "Phase 04",
    title: "Fabrication",
    period: "Jan 2026 — Aug 2026",
    status: "upcoming",
    description: "Composite layup, tooling, and assembly. Component fabrication and subsystem integration. Quality control and documentation.",
    milestones: [
      "Mould and tooling production",
      "Hull composite layup",
      "Foil fabrication",
      "Systems integration",
    ],
  },
  {
    id: "05",
    phase: "Phase 05",
    title: "Testing & Refinement",
    period: "Sep 2026 — Mar 2027",
    status: "upcoming",
    description: "On-water testing, performance validation, and iterative refinement. Data-driven optimization of foil setup and sail configuration.",
    milestones: [
      "Initial water trials",
      "Performance data collection",
      "Design refinements",
      "Race-readiness validation",
    ],
  },
  {
    id: "06",
    phase: "Phase 06",
    title: "Competition",
    period: "2027",
    status: "upcoming",
    description: "SuMoth Challenge 2027. Full competition preparation, logistics, and race execution.",
    milestones: [
      "Final pre-race testing",
      "Competition logistics",
      "SuMoth Challenge 2027",
      "Post-competition analysis",
    ],
  },
];
