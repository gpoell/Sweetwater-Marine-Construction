import basicDockImgs from "../../images/serviceoptions/Basic Docks/image";
import customDockImgs from "../../images/serviceoptions/Custom Docks/image";
import dockRepairImgs from "../../images/serviceoptions/Dock Repairs/image";
import pileImgs from "../../images/serviceoptions/Piles/image";
import platformImgs from "../../images/serviceoptions/Platforms/image";
import shoreMgtImgs from "../../images/serviceoptions/Shore Management/image";

export const options = [
  {
    title: "Basic Docks",
    image: basicDockImgs[0].src,
    description:
      "These docks are a faster and simpler solution to providing your boat a home on the water.",
    carousel: basicDockImgs
  },
  {
    title: "Custom Docks",
    image: customDockImgs[0].src,
    description:
      "Custom docks are designed to your requirements, providing your boat with additional coverage to protect it from the weather.",
    carousel: customDockImgs
  },
  {
    title: "Shore Management",
    image: shoreMgtImgs[0].src,
    description:
      "Shore management is critical for protecting your shoreline from erosion and flooding.",
    carousel: shoreMgtImgs
  },
  {
    title: "Dock Repairs",
    image: dockRepairImgs[0].src,
    description:
      "We provide an array of services to help you maintaing a strong dock foundation.",
    carousel: dockRepairImgs
  },
  {
    title: "Platform Docks",
    image: platformImgs[0].src,
    description:
      "Platform docks provide extra space for activities such as swimming, fishing, and lounging.",
    carousel: platformImgs
  },
  {
    title: "Piles",
    image: pileImgs[0].src,
    description:
      "Piles are essential for a secure dock foundation. We drive piles deep into the soil to provide the strongest support for your dock.",
    carousel: pileImgs
  }
];
