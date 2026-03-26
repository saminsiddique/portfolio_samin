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
      "Built a portable LVDT-based surface roughness and texture measuring device from scratch as part of ME 2208 sessional. Designed a custom variable inductance sensor, developed C++ firmware on Arduino Uno for real-time data acquisition and OLED display, and conditioned raw analog signals using an LM324 Op-Amp circuit.",
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
];

export const allCategories = [
  "All",
  "CAD",
  "3D Printing",
  "SolidWorks",
  "FEA",
  "Arduino",
  "Embedded",
];
