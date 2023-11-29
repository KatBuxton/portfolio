import {Link} from "react-router-dom";

export const Logo = () => {
    return (
        <Link to="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Kat Buxton</span>
            <img
                className="h-10 w-auto "
                src="public/KB-logo.svg"
                alt="KB logo"
            />
        </Link>
    )
}