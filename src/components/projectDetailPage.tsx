import { useParams, Link } from 'react-router-dom';
import projects from "../projects";
import {CheckCircleIcon} from "@heroicons/react/20/solid";

const ProjectDetailPage = () => {
    const { projectId } = useParams();

    // Find the project based on the projectId
    const project = projects.find((p) => p.id === parseInt(projectId, 10));

    if (!project) {
        // Handle the case when the project doesn't exist
        return <div>Project not found</div>;
    }

    return (
        <div className="bg-white px-6 py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <p className="text-base font-semibold leading-7 text-indigo-600">{project.duration}</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{project.title}</h1>
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

                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                        <li className="flex gap-x-3">
                            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                <strong className="font-semibold text-gray-900">Tools </strong> {project.tools}
              </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                <strong className="font-semibold text-gray-900">Technologies </strong> {project.technologies}
              </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                <strong className="font-semibold text-gray-900">Libraries </strong>{project.libraries}
              </span>
                        </li>
                    </ul>
                    <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">What I learned</h2>
                    <p className="mt-6">
                        {project.what_i_learned}
                    </p>
                    {/*<figure className="mt-10 border-l border-indigo-600 pl-9">*/}
                    {/*    <blockquote className="font-semibold text-gray-900">*/}
                    {/*        <p>*/}
                    {/*            “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac*/}
                    {/*            dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim*/}
                    {/*            tristique.”*/}
                    {/*        </p>*/}
                    {/*    </blockquote>*/}
                    {/*    <figcaption className="mt-6 flex gap-x-4">*/}
                    {/*        <img*/}
                    {/*            className="h-6 w-6 flex-none rounded-full bg-gray-50"*/}
                    {/*            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"*/}
                    {/*            alt=""*/}
                    {/*        />*/}
                    {/*        <div className="text-sm leading-6">*/}
                    {/*            <strong className="font-semibold text-gray-900">Maria Hill</strong> – Marketing Manager*/}
                    {/*        </div>*/}
                    {/*    </figcaption>*/}
                    {/*</figure>*/}
                </div>

            </div>
        </div>
    );
};

export default ProjectDetailPage;
