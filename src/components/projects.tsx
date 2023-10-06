const projects = [
    {id: 1,
        title: 'Baby-friendly.cz',
        href: '#',
        description:
       " This is my first web, it was created as a final project for Czechitas Digital Academy. Of course it's far from perfect but I am proud of being able to present a working, scalable, monetizable product only few months after writing my first line of code.",
        imageUrl:"https://user-images.githubusercontent.com/101291722/173179935-6d8ebfd4-ff95-4ec8-b6c6-3eae1b67faac.png",
    },
    {id: 2,
        title: 'Natural cosmetics e-shop',
        href: '#',
        description:
            'This website is a minimalistic e-shop for promoting natural cosmetic products which are hand-made by my sister Sabina. The website is fully responsive and anyone can browse the products, add them to cart and place an order.',
        imageUrl:"https://user-images.githubusercontent.com/101291722/273207000-631d6bca-1c38-4b91-8559-46aa87413e4c.jpg",
    },
    {id: 3,
        title: 'Wake on LAN @OKsystem',
        href: '#',
        description:
            'My first project as a frontend developer at OKsystem. This app is intended for internal purposes, a logged-in user can add, edit and delete his computers and send a magic packet that wakes his computer up. ',
        imageUrl:"https://avatars.githubusercontent.com/u/101291722?v=4",
    }
]

export const Projects = () => {
    return(
        <div className="mx-auto mt-4 max-w-7xl sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Projects</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-300">
An overview of projects I worked on, what technologies were used and what I've learned while working on them.                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {projects.map((post) => (
                        <article key={post.id} className="flex flex-col items-start justify-between">
                            <div className="relative w-full">
                                <img
                                    src={post.imageUrl}
                                    alt=""
                                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            <div className="max-w-xl">
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-6 text-sm leading-6 text-gray-300">{post.description}</p>
                                </div>
                            </div>
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