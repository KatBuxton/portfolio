import {Hello} from "./components/hello";
import {ProjectsSection} from "./components/projectsSection";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Homepage} from "./components/homepage";

export default function App() {

  return(
      <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Homepage />}/>
                  <Route path="/about" element={<Hello />}/>
                  <Route path="/projects" element={<ProjectsSection />}/>
              </Routes>
          </BrowserRouter>
  )
}

