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
    title: "CFD — Hull",
    period: "May – Jun 14, 2026",
    status: "active",
    description: "Computational fluid dynamics analysis to validate and freeze the hull shape. Meshing, simulation, and optimization runs on the 32-core cluster, with final drag and lift coefficients reviewed against performance targets.",
    milestones: [
      "Preliminary meshing, simulation, and optimization complete",
      "CFD runs on 32-core HPC cluster",
      "Hull shape validated and version-controlled",
      "Results reviewed and accepted by team leads — Gate 1",
    ],
  },
  {
    id: "02",
    phase: "Phase 02",
    title: "CFD — Foil & Wings",
    period: "May – Aug 16, 2026",
    status: "active",
    description: "Parallel CFD campaign to validate foil and wing shapes. Runs from preliminary design through three iterative stages, culminating in validated mainfoil, rudderfoil, and wing geometry ready for structural analysis inputs.",
    milestones: [
      "Preliminary foil and wing design and meshing",
      "Secondary design following 32-core optimization run",
      "Final foil and wing geometry validated",
      "Lift, drag, and moment coefficients reviewed against VPP targets — Gate 3",
    ],
  },
  {
    id: "03",
    phase: "Phase 03",
    title: "System Design",
    period: "May – Jun 28, 2026",
    status: "upcoming",
    description: "Full CAD model of the complete boat system, ready to present to sponsors and begin structural analysis. Covers gantry, wing, mast post, and moth reference measurements, with an assembly clash check and sponsor-ready render.",
    milestones: [
      "Moth reference measurements collected (Biecker, Mach 2, Exocet, Wasp)",
      "Gantry, wing, and mast post CAD models complete",
      "Full top-level assembly with clash check",
      "Sponsor-ready render produced — Gate 2",
    ],
  },
  {
    id: "04",
    phase: "Phase 04",
    title: "Structural Analysis",
    period: "Jun 14 – Oct 2026",
    status: "upcoming",
    description: "Material selection, FEA, and layup schedule definition for all primary structural members. Lab coupon testing runs in parallel. Gate 4 must pass before any mold construction begins.",
    milestones: [
      "Internal hull and deck structure designed",
      "FEA completed for hull, foil, gantry, and wings",
      "Material selection finalized — resin, fibre, core",
      "Fiber direction plan and layup schedule approved — Gate 4",
    ],
  },
  {
    id: "05",
    phase: "Phase 05",
    title: "Manufacturing Prep",
    period: "Mid-Sep – Dec 2026",
    status: "upcoming",
    description: "Design and construction of all molds, and definition of fabrication processes for wings and gantry. All mold work must complete before winter exams. No mold construction begins until Gate 4 passes.",
    milestones: [
      "Hull and foil mold designs complete",
      "Hull mold construction complete",
      "Foil mold construction complete",
      "Wing and gantry fabrication processes defined",
    ],
  },
  {
    id: "06",
    phase: "Phase 06",
    title: "Purchasing & Design Review",
    period: "Nov 15 – Dec 13, 2026",
    status: "upcoming",
    description: "Design is locked. All major purchases are approved and ordered before the exam period. Full Bill of Materials with supplier quotes, budget review, and team role confirmation. No design changes after this gate without formal change control.",
    milestones: [
      "Full Bill of Materials with supplier quotes produced",
      "All large material purchases approved and ordered",
      "Risk register reviewed — all high risks have mitigation owners",
      "S1 Report at least 50% drafted — Gate 5",
    ],
  },
  {
    id: "07",
    phase: "Phase 07",
    title: "Manufacturing",
    period: "Jan – Apr 2027",
    status: "upcoming",
    description: "Full composite fabrication of the boat: hull layup, foil fabrication, wing panel construction, and gantry assembly. All work proceeds from frozen designs and approved materials.",
    milestones: [
      "Hull composite layup from mold",
      "Mainfoil and rudderfoil fabricated",
      "Rigid wing panels manufactured",
      "Rudder gantry assembled — Gate 6",
    ],
  },
  {
    id: "08",
    phase: "Phase 08",
    title: "Validation",
    period: "Apr – May 2027",
    status: "upcoming",
    description: "Structural integrity and dimensional checks on all manufactured components. IMCA class compliance verified and measured. Flight control system tested on land. Faculty Advisor safety sign-off required before water entry.",
    milestones: [
      "Structural integrity checks on all primary components",
      "IMCA dimensional compliance verified",
      "Flight control system (wand, flap linkage) functional on land",
      "Faculty Advisor safety sign-off — Gate 7",
    ],
  },
  {
    id: "09",
    phase: "Phase 09",
    title: "Testing",
    period: "May – Jul 2027",
    status: "upcoming",
    description: "On-water testing begins when the lake is free (~May). GPS performance trials for SuMoth S2 submission. At least three qualifying runs completed per SMC course specifications.",
    milestones: [
      "First on-water trials",
      "Minimum 3 qualifying GPS runs completed",
      "GPS data submitted to SMC organisation",
      "Performance Showcasing video submitted — Gate 8",
    ],
  },
  {
    id: "10",
    phase: "Phase 10",
    title: "Documentation",
    period: "May 2026 – Aug 2027",
    status: "active",
    description: "Continuous documentation throughout the full project lifecycle supporting SuMoth Challenge submissions. Covers Blog Posts A, B, and C, the S1 Design Report, MS360 LCA Report, S2 Manufacturing Report, and S3 Fleet Racing at Lake Garda.",
    milestones: [
      "Blog Posts A & B (Aug and Nov 2026)",
      "S1 Design Report + LCA Report (Jan 2027)",
      "S2 Manufacturing Report (Jun 2027)",
      "S3 Fleet Racing — Lake Garda (Jul 2027)",
    ],
  },
];
