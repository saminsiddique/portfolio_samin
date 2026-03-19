export interface ResearchInterest {
  area: string;
  description: string;
}

export interface ResearchItem {
  id: string;
  title: string;
  status: "ongoing" | "completed" | "published";
  description: string;
  tags: string[];
  journal?: string;
  date?: string;
  doi?: string;
  coAuthors?: string[];
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

export const researchItems: ResearchItem[] = [
  {
    id: "tea-energy-systems",
    title: "Techno-Economic Assessment of Distributed Energy Systems",
    status: "ongoing",
    description:
      "Developing a framework to evaluate the economic viability and technical performance of distributed energy generation systems under varying operational scenarios.",
    tags: ["Techno-Economic Analysis", "Energy Systems", "Feasibility Study"],
  },
  {
    id: "milp-energy-optimization",
    title: "MILP-Based Optimization of Hybrid Energy System Configurations",
    status: "ongoing",
    description:
      "Formulating mixed-integer linear programming models to optimize the design and dispatch strategy of hybrid energy systems for cost and efficiency.",
    tags: ["MILP", "Optimization", "Hybrid Energy"],
  },
  {
    id: "airfoil-comparison",
    title: "Comparative Aerodynamic Analysis of Low-Reynolds-Number Airfoils",
    status: "ongoing",
    description:
      "Investigating the aerodynamic performance of various airfoil profiles at low Reynolds numbers through CFD simulation and analytical comparison.",
    tags: ["CFD", "Airfoil Design", "Low Reynolds Number"],
  },
];
