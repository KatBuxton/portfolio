import { useParams, Link } from 'react-router-dom';
import projects from "../projects";
import {CursorArrowRaysIcon} from "@heroicons/react/20/solid";
import {AiFillGithub} from "react-icons/ai"
import {useEffect} from "react";

const ProjectDetailPage = () => {
    const { projectId } = useParams();

    const project =projectId && projects.find((p) => p.id === parseInt(projectId, 10));

    if (!project) {
        return <div>Project not found</div>;
    }

    useEffect(() => {
        window.scrollTo(0,0);
    },[]);

    const renderLabels = (items: string) => {
        const itemsArray = items.split(', ');

        return (
            <div className="mt-4 max-w-xl">
                <div className="flex flex-wrap gap-2">
                    {itemsArray.map((item, index) => (
                        <div
                            key={index}
                            className="py-1 px-2 bg-indigo-200 opacity-75 text-indigo-600 rounded-md"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="bg-gray-900 relative isolate px-6 py-16 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-300">
                <p className="text-base font-semibold leading-7 text-indigo-600">{project.duration}</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">{project.title}</h1>
                <p className="mt-6 text-xl leading-8">
                    {project.short_description}
                </p>
                <p className="mt-4">
                    {project.long_description}
                </p>
                <figure className="mt-8">
                    <img
                        className="aspect-video rounded-xl bg-gray-50 object-cover"
                        src={project.imageUrl}
                        alt="project preview"
                    />
                </figure>
                <div className="mt-10 max-w-2xl">
                    <strong className="font-bold text-2xl tracking-tight text-gray-200">Tools, technologies,
                        libraries </strong>
                    {renderLabels(project.tools)}
                    {renderLabels(project.technologies)}
                    {renderLabels(project.libraries)}
                <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-200">What I learned</h2>
                    <p className="mt-6">
                        {project.what_i_learned}
                    </p>

                </div>
                <div className="mt-4 flex gap-x-4">
                    {project.webUrl && (
                        <button
                            type="button"
                            onClick={() => window.open(project.webUrl, '_blank', 'noopener,noreferrer')}
                            className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <CursorArrowRaysIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                            View Website
                        </button>
                    )}
                    {project.repo && (
                        <button
                            type="button"
                            onClick={() => window.open(project.repo, '_blank', 'noopener,noreferrer')}
                            className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <AiFillGithub className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                            Repository
                        </button>
                    )}
                </div>
                <Link to="/#projects">
                    <p className="mt-6 mx-auto hover:text-indigo-500">Back to all projects</p>
                </Link>
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
    );
};

export default ProjectDetailPage;
