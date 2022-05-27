import './App.css';
import IntroSection from "./Components/IntroSection";
import AboutMeSection from "./Components/AboutMeSection";
import ContactMeSection from "./Components/ContactMeSection";
import ProjectsSection from "./Components/ProjectsSection";

function App() {
  return (
    <div className="App">
        <IntroSection/>
        <AboutMeSection/>
        <ProjectsSection/>
        <ContactMeSection/>
    </div>
  );
}

export default App;
