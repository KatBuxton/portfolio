import {Header} from "./header";
import {AboutSection} from "./aboutSection";
import {ProjectsSection} from "./projectsSection";
import {ContactSection} from "./contactSection";

export const Homepage = () => {
    return(
        <div className="bg-white">
        <Header/>
            <main className="isolate">
            <AboutSection id="about"/>
            <ProjectsSection id="projects"/>
            <ContactSection id="contact" />
            </main>
        </div>
    )
}