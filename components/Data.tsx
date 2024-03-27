export interface Datas {
  id: number;
  title: string;
  name: string;
  image: "/img/Toko.png" | "/img/Food.png" | "/img/Kuak.pmg";
  desc1: string;
  desc2: string;
  logo1: "/icon/figma.png" | "/icon/ai.png" | "/icon/ps.png";
  logo2: "/icon/figma.png" | "/icon/ai.png" | "/icon/ps.png";
  logo3: "/icon/figma.png" | "/icon/ai.png" | "/icon/ps.png";
  btn1: string;
  btn2: string;
  btnlink: string;
}

export const ListData: Datas[] = [
  {
    id: 1,
    name: "Food Market",
    title:
      "Create a UI design for a food market mobile application using Figma.",
    image: "/img/Food.png",
    desc1:
      "The Food Market application is a mobile-based application that provides digital-based food ordering services from MSMEs in Indonesia.",
    desc2:
      "In creating the UI design for this food market application, I used several tools, including:",
    logo1: "/icon/figma.png",
    logo2: "/icon/ai.png",
    logo3: "/icon/ps.png",
    btn1: "View Prototype",
    btn2: "Details",
    btnlink: "#",
  },
  {
    id: 2,
    title:
      "Create an online shop website for Yakusa.Comp using Laravel and Boostrap.",
    name: "Yakusa Store",
    image: "/img/Toko.png",
    desc1: "lorem",
    desc2: "lore,",
    logo1: "/icon/figma.png",
    logo2: "/icon/ai.png",
    logo3: "/icon/ps.png",
    btn1: "Source Code",
    btn2: "Details",
    btnlink: "https://github.com/yogafebriatala24/website-toko-online",
  },
];
