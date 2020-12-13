import angular from "../assets/images/angular.png";
import express from "../assets/images/express.png";
import ionic from "../assets/images/ionic.png";
import nestjs from "../assets/images/nest.svg";
import nextjs from "../assets/images/nextjs.png";
import node from "../assets/images/nodejs.png";
import react from "../assets/images/react.png";
import typescript from "../assets/images/typescript.png";

type Techno = {
  name: string;
  image: string;
  level: number;
  mainColor: string;
};

const technos: Techno[] = [
  {
    name: "Node JS",
    image: node,
    level: 95,
    mainColor: "#8CC84B"
  },
  {
    name: "React",
    image: react,
    level: 95,
    mainColor: "#61DAFB"
  },
  {
    name: "Angular",
    image: angular,
    level: 70,
    mainColor: "#B52E31"
  },
  {
    name: "Typescript",
    image: typescript,
    level: 90,
    mainColor: "#0079CB"
  },
  {
    name: "Express",
    image: express,
    level: 90,
    mainColor: "#F0F0F0"
  },
  {
    name: "Nest",
    image: nestjs,
    level: 85,
    mainColor: "#E0234E"
  },
  {
    name: "Ionic",
    image: ionic,
    level: 75,
    mainColor: "#478AFF"
  },
  {
    name: "NextJS",
    image: nextjs,
    level: 90,
    mainColor: "#393939"
  }
];

export default technos;
