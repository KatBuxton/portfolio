import projects from "../projects";
import {Link} from "react-router-dom";
import {useState} from "react";
import {Spinner} from "./UI/Spinner";

export interface Project {
    id: number;
    title: string;
    short_description: string;
    long_description: string;
    my_role: string;
    project_duration: string;
    tools: string;
    technologies: string;
    libraries: string;
    what_i_learned: string;
    case_study?: string;
    repo?: string;
    features?: string;
    imageUrl?: string;
    href?: string;
    blurb?: string;
    webUrl?: string;
}

interface ProjectsProps {
    id: string;
}

export const ProjectsSection = ({id}: ProjectsProps) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
        console.log("image loaded")
    };

    return (
        <div id={id}
            className="mx-auto mt-4 max-w-7xl sm:px-6 lg:px-8">
            <div
                className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Projects</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-300">
                            An overview of projects I worked on, what technologies were used and what I've learned while
                            working on them. </p>
                    </div>
                    <div
                        className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {projects.map((project) => (
                            <article
                                key={project.id}
                                className="flex flex-col items-start">
                                <Link to={`/project/${project.id}`}>
                                <div className="relative w-full">
                                    {isLoading && (
                                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 rounded-2xl">
                                            <Spinner />
                                        </div>
                                    )}
                                    <img
                                        src={project.imageUrl}
                                        alt=""
                                        className="aspect-[16/9] w-full rounded-2xl bg-gray-900 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                        onLoad={handleImageLoad}
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>
                                </div>
                                <div className="max-w-xl">
                                    <div className="flex flex-col group relative justify-between">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-600">
                                                <span className="absolute inset-0"/>
                                                {project.title}
                                        </h3>
                                        <p className="mt-5 line-clamp-6 text-sm leading-6 text-gray-300">{project.blurb}</p>
                                    </div>
                                </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
                <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
                    <div
                        className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                        style={{
                            clipPath:
                                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}