import AboutConteiner from "./AboutConteiner";
import TechConteiner from "./TechConteiner";

import "../styles/components/maincontent.sass";

export default function MainContent() {
  return (
    <>
      <main id="main">
        <AboutConteiner />
        <TechConteiner />
      </main>
    </>
  );
}
