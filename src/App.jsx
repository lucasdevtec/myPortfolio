import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";

import "./styles/components/app.sass";

export default function App() {
  return (
    <div id="portfolio">
      <h1>Lucas Gabriel</h1>
      <SideBar />
      <MainContent />
    </div>
  );
}
