export interface Datas {
  id: number;
  title: string;
  name: string;
  image:
    | "/img/Toko.png"
    | "/img/Food.png"
    | "/img/Kuak.pmg"
    | "/img/travel.png"
    | "/img/game.png";
  desc1: string;
  desc2: string;
  logo1: "/icon/figma.svg" | "/icon/Laravel.svg" | "/icon/ts.svg";
  logo2:
    | "/icon/html.svg"
    | "/icon/bootstrap.svg"
    | "/icon/ai.svg"
    | "/icon/next.svg";
  logo3:
    | "/icon/react.svg"
    | "/icon/vue.svg"
    | "/icon/ps.svg"
    | "/icon/figma.svg"
    | "/icon/bootstrap.svg";
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
    logo1: "/icon/figma.svg",
    logo2: "/icon/ai.svg",
    logo3: "/icon/ps.svg",
    btn1: "View Prototype",
    btn2: "Details",
    btnlink: "#",
  },
  {
    id: 2,
    title: "Create an online shop website using Laravel.",
    name: "Online Shop",
    image: "/img/Toko.png",
    desc1:
      "This responsive online shop website provides many features, including: login & registration, financial reports, transactions, etc.",
    desc2:
      "In building this online shop website, I used several technologies, including:",
    logo1: "/icon/Laravel.svg",
    logo2: "/icon/bootstrap.svg",
    logo3: "/icon/vue.svg",
    btn1: "Source Code",
    btn2: "Details",
    btnlink: "https://github.com/yogafebriatala24/website-toko-online",
  },
  {
    id: 3,
    title: "Create an Top Up Game website using NextJS.",
    name: "Top Up Game",
    image: "/img/game.png",
    desc1:
      "This responsive Typescript website provides many features, including: login & registration, financial reports, transactions, etc.",
    desc2:
      "In building this Top Up Game website, I used several technologies, including:",
    logo1: "/icon/ts.svg",
    logo2: "/icon/next.svg",
    logo3: "/icon/bootstrap.svg",
    btn1: "Source Code",
    btn2: "Details",
    btnlink: "https://github.com/yogafebriatala24/Voucher-Game",
  },
  {
    id: 4,
    title: "Create an travel website using Laravel.",
    name: "Travel",
    image: "/img/travel.png",
    desc1:
      "This responsive travel website provides many features, including: login & registration, financial reports, transactions, etc.",
    desc2:
      "In building this travel website, I used several technologies, including:",
    logo1: "/icon/Laravel.svg",
    logo2: "/icon/bootstrap.svg",
    logo3: "/icon/figma.svg",
    btn1: "Source Code",
    btn2: "Details",
    btnlink: "https://github.com/yogafebriatala24/Yogsapp",
  },
];
