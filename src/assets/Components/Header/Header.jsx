import { GrTechnology } from "react-icons/gr";
import { HeaderS } from "./style";

function Header() {
  return (
    <>
      <HeaderS>
        <div>
          <h1>
            <GrTechnology color="red" />
            Lucas Gabriel
          </h1>
        </div>

        <nav>
          <ul>
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Contatos</li>
          </ul>
        </nav>
      </HeaderS>
    </>
  );
}
export default Header;
