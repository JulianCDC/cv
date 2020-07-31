import React from "react";
import photo from "../assets/images/photo.png";
import ProgressBar from "../components/ProgressBar/ProgessBar";
import contact from "../data/contact";
import experiences from "../data/experiences.json";
import interests from "../data/interests.json";
import langs from "../data/langs.json";
import projects from "../data/projects.json";
import skills from "../data/skills.json";
import studies from "../data/studies.json";
import technos from "../data/technos";
import "../styles/index.scss";

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
        <div className="w-2/6 px-3">
          <div className="sidebar-section">
            <h3 className="sidebar-heading">Technologies</h3>
            <div className="grid grid-cols-4 gap-4 sidebar-content">
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
          <div className="-mt-3 sidebar-section">
            <h3 className="sidebar-heading">Coordonnées</h3>
            <div className="flex flex-col sidebar-content">
              {contact.map((contactElement, index) => (
                <div
                  className={`flex flex-row items-center w-full h-auto ${
                    index < contact.length - 1 ? "mb-3" : null
                  }`}
                  key={contactElement.content}
                >
                  <img className="h-10" src={contactElement.icon} />
                  <p className="flex-grow ml-2 text-lg">
                    {contactElement.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="sidebar-section">
            <h3 className="sidebar-heading">Langues</h3>
            <div className="flex flex-col sidebar-content">
              {langs.map(lang => (
                <div
                  className="flex justify-start w-full h-auto mb-3 text-xl leading-relaxed"
                  key={lang.label}
                >
                  <div>
                    {lang.label} — {lang.level}
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
                  className="w-full h-auto mb-3 text-xl leading-relaxed text-left"
                  key={interest}
                >
                  {interest}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="w-4/6 ml-8">
          <div className="main-section">
            <h3 className="main-heading">Expériences</h3>
            <div className="flex flex-col main-content">
              {experiences.map(experience => (
                <div
                  className="flex flex-col items-start w-full h-auto mb-4"
                  key={experience.name}
                >
                  <p className="text-xl font-medium">
                    {experience.desc}&nbsp;
                    <span className="text-sm font-normal">
                      ({experience.startDate} - {experience.endDate})
                    </span>
                  </p>
                  <p className="mt-2 text-lg">{experience.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="main-section">
            <h3 className="main-heading">Études</h3>
            <div className="flex flex-col main-content">
              {studies.map(study => (
                <div
                  className="flex flex-col items-start w-full h-auto mb-4"
                  key={study.school}
                >
                  <p className="text-xl font-medium">
                    {study.cursus}&nbsp;
                    <span className="text-sm font-normal">
                      ({study.startDate} - {study.endDate})
                    </span>
                  </p>
                  <p className="mt-2 text-lg">{study.school}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="main-section">
            <h3 className="main-heading">Projets</h3>
            <div className="flex flex-col main-content">
              {projects.map(project => (
                <div
                  className="flex flex-col items-start w-full h-auto mb-4"
                  key={project.name}
                >
                  <p className="text-xl font-medium">{project.name}</p>
                  <p className="mt-2 text-lg leading-relaxed">
                    {project.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="main-section">
            <h3 className="main-heading">Compétences</h3>
            <div className="grid grid-cols-3 gap-5 main-content">
              {skills.map(skill => (
                <p className="text-lg" key={skill.name}>
                  {skill.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
