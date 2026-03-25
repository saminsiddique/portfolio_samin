export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "3D-Printed Robotic Arm",
    description:
      "Designed a fully articulated robotic arm in SolidWorks with multiple degrees of freedom for pick-and-place operations. Manufactured all structural components using 3D printing technology and assembled a functional, movable arm capable of controlled motion.",
    image: "/images/robot_arm_proj.jpg",
    categories: ["CAD", "3D Printing", "SolidWorks"],
  },
  {
    id: 2,
    title: "Heat Exchanger CFD Analysis",
    description:
      "Simulated fluid flow and heat transfer in a shell-and-tube heat exchanger using ANSYS Fluent. Optimized baffle spacing for improved thermal performance.",
    image: "https://placehold.co/800x600/e2e8f0/475569?text=Heat+Exchanger+CFD",
    categories: ["CFD", "ANSYS"],
  },
  {
    id: 3,
    title: "Robotic Gripper Mechanism",
    description:
      "Modeled a compliant robotic gripper with multiple degrees of freedom in SolidWorks. Analyzed stress distribution under gripping loads using FEA.",
    image: "https://placehold.co/800x600/e2e8f0/475569?text=Robotic+Gripper",
    categories: ["CAD", "SolidWorks", "FEA"],
  },
  {
    id: 4,
    title: "Airfoil Aerodynamics Study",
    description:
      "Performed CFD analysis on NACA 2412 airfoil at various angles of attack using ANSYS Fluent. Compared lift and drag coefficients with theoretical values.",
    image: "https://placehold.co/800x600/e2e8f0/475569?text=Airfoil+CFD",
    categories: ["CFD", "ANSYS", "MATLAB"],
  },
  {
    id: 5,
    title: "Pressure Vessel FEA",
    description:
      "Conducted finite element analysis on a cylindrical pressure vessel to evaluate von Mises stress distribution and factor of safety under internal pressure loading.",
    image: "https://placehold.co/800x600/e2e8f0/475569?text=Pressure+Vessel+FEA",
    categories: ["FEA", "ANSYS", "SolidWorks"],
  },
  {
    id: 6,
    title: "Inventory Management System",
    description:
      "Built a Python-based inventory tracking tool with a GUI for managing parts and materials. Integrated CSV export and data visualization with Matplotlib.",
    image: "https://placehold.co/800x600/e2e8f0/475569?text=Inventory+System",
    categories: ["Python", "MATLAB"],
  },
];

export const allCategories = [
  "All",
  "CAD",
  "3D Printing",
  "SolidWorks",
  "FEA",
  "CFD",
  "ANSYS",
  "MATLAB",
  "Python",
];
