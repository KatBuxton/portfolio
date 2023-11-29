import {AboutSection} from "./components/aboutSection";
import {ProjectsSection} from "./components/projectsSection";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Homepage} from "./components/homepage";
import ProjectDetailPage from "./components/projectDetailPage";

export default function App() {

  return(
      <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Homepage />}/>
                  <Route path="/about" element={<AboutSection id="about"/>}/>
                  <Route path="/projects" element={<ProjectsSection id="projects"/>}/>
                  <Route path="/project/:projectId" element={<ProjectDetailPage />}/>
              </Routes>
          </BrowserRouter>
  )
}
