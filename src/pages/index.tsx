import React from "react";
import "../styles/index.scss";
import photo from "../assets/images/photo.png";
import docker from "../assets/images/docker.png";
import nodejs from "../assets/images/nodejs.png";
import express from "../assets/images/express.png";
import reactIcon from "../assets/images/react.png";
import typescript from "../assets/images/typescript.png";
import kotlin from "../assets/images/kotlin.png";
import graphql from "../assets/images/graphql.png";
import email from "../assets/images/email.png";
import location from "../assets/images/location.png";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";

type Techno = {
  name: string;
  image: string;
};

type Contact = {
  icon: string;
  content: string;
};

type Experience = {
  name: string;
  startDate: string;
  endDate: string;
  desc: string;
};

type Study = {
  school: string;
  cursus: string;
  startDate: string;
  endDate: string;
};

type Project = {
  name: string;
  content: string;
};

const technos: Techno[] = [
  {
    name: "Node JS",
    image: nodejs
  },
  {
    name: "React",
    image: reactIcon
  },
  {
    name: "Typescript",
    image: typescript
  },
  {
    name: "Express",
    image: express
  },
  {
    name: "GraphQL",
    image: graphql
  },
  {
    name: "React Native",
    image: reactIcon
  },
  {
    name: "Kotlin",
    image: kotlin
  },
  {
    name: "Docker",
    image: docker
  }
];

const contact: Contact[] = [
  { content: "julian.gardez@outlook.com", icon: email },
  { content: "59300, Valenciennes", icon: location },
  { content: "linkedin.com/in/juliangardez", icon: linkedin },
  { content: "github.com/JulianCDC", icon: github }
];

const langs: string[] = ["Français", "Anglais"];

const experiences: Experience[] = [
  {
    name: "Stage à Valenciennes Métropole",
    startDate: "Juillet 2019",
    endDate: "Septembre 2019",
    desc: "Développeur Front-end React, Back-end Node"
  },
  {
    name: "Stage dans une auto-entreprise",
    startDate: "Août 2018",
    endDate: "Octobre 2018",
    desc: "Développeur Android et iOS"
  }
];

const studies: Study[] = [
  {
    school: "Supinfo International University - Valenciennes",
    startDate: "2017",
    endDate: "2020",
    cursus: "Études d’informatique - 3ème année"
  },
  {
    school: "Lycée du Hainaut - Valenciennes",
    startDate: "2014",
    endDate: "2017",
    cursus: "Baccalauréat STI2D"
  }
];

const projects: Project[] = [
  {
    name: "Valenciennes Métropole - Rehdeval",
    content:
      "Solution de création et traitement de demandes par formulaire, frontend réalisé avec React, backend réalisé avec NodeJs. Fonctionnalités d’ajout de formulaire, clotures, changement d’état, retour en arrière, validation, création de compte"
  },
  {
    name: "Auto-entreprise - Spring",
    content:
      "Application de magie (mentalisme) pour Android et iOS, utilisant plusieurs fonctionnalités de l’appareil comme l’appareil photo, le gyroscope, l’acceleromètre, les services, la détection précise des mouvement de l’appareil et leur direction."
  }
];

function Index() {
  return (
    <div className="w-page h-page flex flex-col p-5 border-black border-solid border-2">
      <div className="w-full h-auto flex p-6 items-center">
        <div className="flex flex-col flex-grow leading-normal">
          <h1 className="text-6xl font-bold">Julian Gardez</h1>
          <h2 className="text-5xl font-bold">Développeur</h2>
        </div>
        <img className="h-64 w-64 rounded-full" src={photo}></img>
      </div>
      <hr className="ml-6" />
      <div className="flex flex-grow flex-row pl-6">
        <div className="w-2/5 px-3">
          <div className="sidebar-section">
            <h3 className="sidebar-heading">Technologies</h3>
            <div className="sidebar-content grid-cols-4 grid gap-1">
              {technos.map(techno => (
                <div
                  className="h-auto flex flex-col items-center mt-3"
                  key={techno.name}
                >
                  <p className="text-xs pb-1">{techno.name}</p>
                  <img className="w-full" src={techno.image} />
                </div>
              ))}
            </div>
          </div>
          <div className="sidebar-section">
            <h3 className="sidebar-heading">Coordonnées</h3>
            <div className="sidebar-content flex flex-col">
              {contact.map(contact => (
                <div
                  className="h-auto w-full flex flex-row items-center mb-3"
                  key={contact.content}
                >
                  <img className="h-10" src={contact.icon} />
                  <p className="text-lg ml-4 flex-grow">{contact.content}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="-mt-3 sidebar-section">
            <h3 className="sidebar-heading">Langues</h3>
            <div className="sidebar-content flex flex-col">
              {langs.map(lang => (
                <p
                  className="text-xl h-auto w-full mb-3 text-center leading-relaxed"
                  key={lang}
                >
                  {lang}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="w-3/5 ml-8">
          <div className="main-section">
            <h3 className="main-heading">Expériences</h3>
            <div className="main-content flex flex-col">
              {experiences.map(experience => (
                <div
                  className="h-auto w-full flex flex-col items-start mb-8"
                  key={experience.name}
                >
                  <p className="text-lg font-medium">
                    {experience.name}&nbsp;
                    <span className="text-sm font-normal">
                      ({experience.startDate} - {experience.endDate})
                    </span>
                  </p>
                  <p className="text-base mt-2">{experience.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="main-section">
            <h3 className="main-heading">Études</h3>
            <div className="main-content flex flex-col">
              {studies.map(study => (
                <div
                  className="h-auto w-full flex flex-col items-start mb-8"
                  key={study.school}
                >
                  <p className="text-lg font-medium">
                    {study.cursus}&nbsp;
                    <span className="text-sm font-normal">
                      ({study.startDate} - {study.endDate})
                    </span>
                  </p>
                  <p className="text-base mt-2">{study.school}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="main-section">
            <h3 className="main-heading">Projets</h3>
            <div className="main-content flex flex-col">
              {projects.map(project => (
                <div
                  className="h-auto w-full flex flex-col items-start mb-8"
                  key={project.name}
                >
                  <p className="text-lg font-medium">{project.name}</p>
                  <p className="text-base mt-2 leading-relaxed">
                    {project.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
