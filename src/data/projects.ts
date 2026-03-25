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
    title: "Arduino-Based Surface Roughness Tester",
    description:
      "Built a portable LVDT-based surface roughness and texture measuring device from scratch as part of ME 2208 sessional. Designed a custom variable inductance sensor, developed C++ firmware on Arduino Uno for real-time data acquisition and OLED display, and conditioned raw analog signals using an LM324 Op-Amp circuit. Took the project from breadboard prototype through custom PCB design to final assembly.",
    image: "/images/measure_proj.jpg",
    categories: ["Arduino", "Embedded"],
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
  "Arduino",
  "Embedded",
];
