import {Header} from "./header";
import {Hello} from "./hello";
import {ProjectsSection} from "./projectsSection";

export const Homepage = () => {
    return(
        <div className="bg-white">
        <Header/>
            <main className="isolate">
            <Hello id="about"/>
            <ProjectsSection id="projects"/>
            </main>
        </div>
    )
}