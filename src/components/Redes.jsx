import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import "../styles/components/redes.sass";

const redesSociais = [
  {
    name: "linkedIn",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/lucasdevtec/",
  },
  {
    name: "github",
    icon: <FaGithub />,
    link: "https://github.com/lucasdevtec/",
  },
];

export default function Redes() {
  return (
    <section id="redes-sociais">
      {redesSociais.map((redeSocial) => (
        <a
          href={redeSocial.link}
          className="social-btn"
          key={redeSocial.name}
          id={redeSocial.name}
        >
          {redeSocial.icon}
        </a>
      ))}
    </section>
  );
}
