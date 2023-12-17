import { DiNodejs, DiReact, DiGit, DiJavascript } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";

import "../styles/components/techs.sass";

const skills = [
  {
    name: "Javascript",
    icon: <DiJavascript />,
    id: "js",
    descricao: "Linguagem de Progamação.",
  },
  {
    name: "ReactJS",
    icon: <DiReact id="react" />,
    id: "react",
    descricao: "Biblioteca para criar Interfaces.",
  },
  {
    name: "NodeJS",
    icon: <DiNodejs className="node" />,
    id: "node",
    descricao: "Runtime JS para Back-End.",
  },
  {
    name: "Git",
    icon: <DiGit className="git" />,
    id: "git",
    descricao: "Controle de versão.",
  },
  {
    name: "Postgres",
    icon: <BiLogoPostgresql />,
    id: "postgres",
    descricao: "Banco de Dados.",
  },
];

const TechConteiner = () => {
  return (
    <section className="technologies-container">
      <h2>
        Techs <span></span>
      </h2>
      <div className="technologies-grid">
        {skills.map((skill) => (
          <div className="technology-card" id={skill.id} key={skill.id}>
            {skill.icon}
            <div className="techInfo">
              <h3>{skill.name}</h3>
              <p>{skill.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechConteiner;
