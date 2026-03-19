export interface ResearchInterest {
  area: string;
  description: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  link?: string;
}

export const researchInterests: ResearchInterest[] = [
  {
    area: "Techno-Economic Analysis",
    description:
      "Evaluating the feasibility and cost-effectiveness of energy systems through integrated technical and economic modeling.",
  },
  {
    area: "Optimization Modeling",
    description:
      "MILP-based optimization for energy system design and operation, balancing performance with resource constraints.",
  },
  {
    area: "Aerodynamics",
    description:
      "Comparative analysis of airfoil profiles and flow characteristics using computational and analytical methods.",
  },
];

// TODO: Replace this demo entry with your actual publications
export const publications: Publication[] = [
  {
    title: "Demo Publication — Replace With Your Own",
    authors: "S. Siddique, A. Collaborator",
    journal: "Journal of Example Studies",
    year: 2026,
    doi: "10.1234/demo.2026.001",
  },
];
