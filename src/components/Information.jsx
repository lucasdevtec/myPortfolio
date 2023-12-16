import "../styles/components/info.sass";

import { AiFillEnvironment, AiFillPhone, AiFillMail } from "react-icons/ai";

const dadosDeContato = [
  {
    name: "Telefone",
    icon: <AiFillPhone id="phone-icon" />,
    data: "(84) 99979-7930",
  },
  {
    name: "Email",
    icon: <AiFillMail id="email-icon" />,
    data: "lucasprogjr@gmail.com",
  },
  {
    name: "Localização",
    icon: <AiFillEnvironment id="pin-icon" />,
    data: "Natal - RN",
  },
];

const Information = () => {
  return (
    <section id="information">
      {dadosDeContato.map((dadodecontato) => (
        <div className="info-card" key={dadodecontato.name}>
          {dadodecontato.icon}
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
