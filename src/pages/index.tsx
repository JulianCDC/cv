import React from "react";
import photo from "../assets/images/photo.png";
import ProgressBar from "../components/ProgressBar/ProgessBar";
import contact from "../data/contact";
import experiences from "../data/experiences.json";
import projects from "../data/projects.json";
import studies from "../data/studies.json";
import technos from "../data/technos";
import "../styles/index.scss";

type Lang = {
  label: string;
  level: number;
};

const langs: Lang[] = [
  {
    label: "Anglais",
    level: 4
  }
];

const interests: string[] = ["Informatique", "Technologies web"];

function Index() {
  return (
    <div className="flex flex-col p-5 border-2 border-black border-solid w-page h-page">
      <div className="flex items-center w-full h-auto p-6">
        <div className="flex flex-col flex-grow leading-normal">
          <h1 className="text-6xl font-bold text-black">Julian Gardez</h1>
          <h2 className="-ml-1 text-5xl font-bold text-black">
            Développeur Fullstack JS
          </h2>
        </div>
        <img className="w-64 h-64 rounded-full" src={photo}></img>
      </div>
      <hr className="ml-6" />
      <div className="flex flex-row flex-grow pl-6">
        <div className="w-2/5 px-3">
          <div className="sidebar-section">
            <h3 className="sidebar-heading">Technologies</h3>
            <div className="grid grid-cols-4 gap-5 sidebar-content">
              {technos
                .sort((a, b) => b.level - a.level)
                .map(techno => (
                  <div
                    className="flex flex-col items-center h-auto mt-3"
                    key={techno.name}
                  >
                    <p className="pb-1 text-xs">{techno.name}</p>
                    <div
                      className="flex w-full align-middle"
                      style={{ height: "100px" }}
                    >
                      <img className="object-contain" src={techno.image} />
                    </div>
                    <ProgressBar
                      current={techno.level}
                      max={100}
                      color={techno.mainColor}
                    ></ProgressBar>
                  </div>
                ))}
            </div>
          </div>
          <div className="sidebar-section">
            <h3 className="sidebar-heading">Coordonnées</h3>
            <div className="flex flex-col sidebar-content">
              {contact.map(contact => (
                <div
                  className="flex flex-row items-center w-full h-auto mb-3"
                  key={contact.content}
                >
                  <img className="h-10" src={contact.icon} />
                  <p className="flex-grow ml-4 text-lg">{contact.content}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="-mt-3 sidebar-section">
            <h3 className="sidebar-heading">Langues</h3>
            <div className="flex flex-col sidebar-content">
              {langs.map(lang => (
                <div
                  className="flex items-center justify-center w-full h-auto mb-3 text-xl leading-relaxed"
                  key={lang.label}
                >
                  <div className="w-2/4">{lang.label}</div>
                  <div className="w-2/4">
                    <ProgressBar
                      max={5}
                      current={lang.level}
                      color="#964CE0"
                    ></ProgressBar>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="-mt-3 sidebar-section">
            <h3 className="sidebar-heading">Centres d&apos;intêret</h3>
            <div className="flex flex-col sidebar-content">
              {interests.map(interest => (
                <p
                  className="w-full h-auto mb-3 text-xl leading-relaxed text-center"
                  key={interest}
                >
                  {interest}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="w-3/5 ml-8">
          <div className="main-section">
            <h3 className="main-heading">Expériences</h3>
            <div className="flex flex-col main-content">
              {experiences.map(experience => (
                <div
                  className="flex flex-col items-start w-full h-auto mb-8"
                  key={experience.name}
                >
                  <p className="text-lg font-medium">
                    {experience.name}&nbsp;
                    <span className="text-sm font-normal">
                      ({experience.startDate} - {experience.endDate})
                    </span>
                  </p>
                  <p className="mt-2 text-base">{experience.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="main-section">
            <h3 className="main-heading">Études</h3>
            <div className="flex flex-col main-content">
              {studies.map(study => (
                <div
                  className="flex flex-col items-start w-full h-auto mb-8"
                  key={study.school}
                >
                  <p className="text-lg font-medium">
                    {study.cursus}&nbsp;
                    <span className="text-sm font-normal">
                      ({study.startDate} - {study.endDate})
                    </span>
                  </p>
                  <p className="mt-2 text-base">{study.school}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="main-section">
            <h3 className="main-heading">Projets</h3>
            <div className="flex flex-col main-content">
              {projects.map(project => (
                <div
                  className="flex flex-col items-start w-full h-auto mb-8"
                  key={project.name}
                >
                  <p className="text-lg font-medium">{project.name}</p>
                  <p className="mt-2 text-base leading-relaxed">
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
