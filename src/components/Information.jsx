import "../styles/components/info.sass";

import { AiFillEnvironment } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";

const dadosDeContato = [
  {
    name: "Telefone",
    icon: <RiWhatsappFill id="phone-icon" />,
    data: "(84) 99979-7930",
    direcionamento: "https://wa.me/+5584999797930",
  },
  {
    name: "Email",
    icon: <IoIosMail id="email-icon" />,
    data: "lucasprogjr@gmail.com",
    direcionamento: "mailto:lucasprogjr@gmail.com",
  },
  {
    name: "Localização",
    icon: <AiFillEnvironment id="pin-icon" />,
    data: "Natal - RN",
    direcionamento: "https://maps.app.goo.gl/nGdepeQxTB71FXWG8",
  },
];

const Information = () => {
  return (
    <section id="information">
      {dadosDeContato.map((dadodecontato) => (
        <div className="info-card" key={dadodecontato.name}>
          <a
            target="_blank"
            className="hovered"
            href={dadodecontato.direcionamento}
            rel="noreferrer"
          >
            {dadodecontato.icon}
          </a>
          <div>
            <h3>{dadodecontato.name}</h3>
            <p>{dadodecontato.data}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Information;
