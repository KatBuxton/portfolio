import {useState} from "react";

export const Hello = () => {
    const [isReadMoreVisible, setReadMoreVisible] = useState(false);

    const toggleReadMore = () => {
        setReadMoreVisible(!isReadMoreVisible);
    };

    return(
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
            <div
                className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
                aria-hidden="true"
            />
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                    <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                        Hello,
                        <br/>
                        my name is Kat Buxton.
                    </h1>
                    <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                        <p className="text-lg leading-8 text-gray-600">
                            I am a <strong>front-end developer</strong> with a passion for crafting seamless digital experiences. My journey in the world of technology began in e-commerce and online marketing, where I honed my skills and gained valuable insights into the digital landscape.
                        </p>
                        <br />
                        { isReadMoreVisible ? (
                            <>
                        <p className="text-m leading-8 text-gray-600">
                            In 2021, I took a significant leap outside my comfort zone to specialize in the areas that truly captivate me: UX and front-end development. I possess a relentless appetite for learning, regardless of the industry. I'm adaptable, dependable, and a quick study. My journey into front-end development was originally fueled by a personal project—an idea for a website with map of baby-friendly places. This drive led me to enroll in a rigorous three-month course, marking my entry into the world of IT.
                        </p>
                        <br />
                        <p className="text-m leading-8 text-gray-600">
                            Beyond my development skills, I have a deep interest in web accessibility and A/B testing. Ensuring websites are inclusive and user-friendly for all is a priority for me. Experience in A/B testing allows me to refine and optimize digital experiences, ensuring they meet and exceed user expectations.
                        </p>
                                {isReadMoreVisible ? (
                                    <a className="text-indigo-600 cursor-pointer" onClick={toggleReadMore}>
                                        Read less
                                    </a>
                                ) : null
                                }
                            </>
                        ) : (
                        <a className="text-indigo-600 cursor-pointer" onClick={toggleReadMore}>
                            Read more
                        </a>
                        )}
                    </div>
                    <img
                        src="https://user-images.githubusercontent.com/101291722/273225324-69d48b4b-26bb-4a14-abe0-4835ef93c062.jpg"
                        alt=""
                        className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                    />
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
    )
}
