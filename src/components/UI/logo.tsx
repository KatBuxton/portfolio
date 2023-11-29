import {Link} from "react-router-dom";

export const Logo = () => {
    return (
        <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Kat Buxton</span>
            <img
                className="h-10 w-auto "
                src="https://github.com/KatBuxton/portfolio/assets/101291722/74ebca88-db5a-4e8a-b7f6-1c23924fcfba"
                alt="KB logo"
            />
        </Link>
    )
}