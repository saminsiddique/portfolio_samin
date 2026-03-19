export interface Skill {
  name: string;
  proficiency: number;
  category: "Software" | "Analysis" | "Programming";
}

export const skills: Skill[] = [
  { name: "SolidWorks", proficiency: 90, category: "Software" },
  { name: "AutoCAD", proficiency: 80, category: "Software" },
  { name: "CATIA", proficiency: 65, category: "Software" },
  { name: "ANSYS Mechanical", proficiency: 85, category: "Analysis" },
  { name: "ANSYS Fluent", proficiency: 75, category: "Analysis" },
  { name: "Finite Element Analysis", proficiency: 80, category: "Analysis" },
  { name: "CFD Simulation", proficiency: 70, category: "Analysis" },
  { name: "MATLAB", proficiency: 85, category: "Programming" },
  { name: "Python", proficiency: 75, category: "Programming" },
  { name: "Microsoft Office Suite", proficiency: 95, category: "Software" },
];
