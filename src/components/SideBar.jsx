import Avatar from "../img/profile.png";
import Redes from "./Redes";

import "../styles/components/sidebar.sass";

export default function SideBar() {
  return (
    <>
      <aside id="sidebar">
        <img src={Avatar} alt="Lucas Gabriel" />
        <p className="title">Desenvolvedor</p>
        <Redes />
        <p className="Informações"></p>
        <a
          href="http://"
          target="_blank"
          className="btn"
          rel="noopener noreferrer"
        >
          Baixar Currículo
        </a>
      </aside>
    </>
  );
}
