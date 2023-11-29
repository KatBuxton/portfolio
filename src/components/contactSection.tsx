import {Link} from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

interface ContactProps {
    id: string;
}

export const ContactSection = ({id}: ContactProps) => {
    return (
        <div
            id={id}
            className="mx-auto mt-4 py-16 max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl text-center font-bold tracking-tight sm:text-4xl text-gray-900">
                Get in touch 🍻
            </h2>
            {/*<p className="mt-6 text-lg leading-8 text-gray-600">*/}
            {/*    Sit facilis neque ab nulla vel. Cum eos in laudantium. Temporibus eos totam in dolorum. Nemo vel facere*/}
            {/*    repellendus ut eos dolores similique.*/}
            {/*</p>*/}
            <div className="flex flex-col items-center mt-8 text-lg leading-8">
                <Link className="flex items-center mb-2" to="mailto:buxton.katerina@gmail.com">
                    <span className="text-indigo-600 font-semibold text-xl">buxton.katerina@gmail.com</span>
                </Link>
                <div className="flex mt-4 gap-4">
                    <Link to="https://www.linkedin.com/in/katerinabuxton/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="h-12 w-12" />
                    </Link>
                    <Link to="https://github.com/KatBuxton" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="h-12 w-12" />
                    </Link>
                </div>
            </div>
        </div>
    )
}