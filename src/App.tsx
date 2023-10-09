import {Header} from "./components/header";
import {Hello} from "./components/hello";
import {ProjectsSection} from "./components/projectsSection";

function App() {

  return (
      <div className="bg-white">
        <Header />

          <main className="isolate">
              {/* Hero section */}
              <Hello />


               {/*Logo cloud*/}
              {/*<div className="mx-auto mt-4 max-w-7xl sm:px-6 lg:px-8">*/}
              {/*    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">*/}
              {/*        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">*/}
              {/*            My stack*/}
              {/*        </h2>*/}
              {/*        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">*/}
              {/*            Technologies, skills and tools I have used in my components.projectsSection.*/}
              {/*        </p>*/}
              {/*        <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5">*/}
              {/*            <img*/}
              {/*                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"*/}
              {/*                src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"*/}
              {/*                alt="Transistor"*/}
              {/*                width={158}*/}
              {/*                height={48}*/}
              {/*            />*/}
              {/*            <img*/}
              {/*                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"*/}
              {/*                src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"*/}
              {/*                alt="Reform"*/}
              {/*                width={158}*/}
              {/*                height={48}*/}
              {/*            />*/}
              {/*            <img*/}
              {/*                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"*/}
              {/*                src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"*/}
              {/*                alt="Tuple"*/}
              {/*                width={158}*/}
              {/*                height={48}*/}
              {/*            />*/}
              {/*            <img*/}
              {/*                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"*/}
              {/*                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"*/}
              {/*                alt="SavvyCal"*/}
              {/*                width={158}*/}
              {/*                height={48}*/}
              {/*            />*/}
              {/*            <img*/}
              {/*                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"*/}
              {/*                src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"*/}
              {/*                alt="Statamic"*/}
              {/*                width={158}*/}
              {/*                height={48}*/}
              {/*            />*/}
              {/*        </div>*/}
              {/*        <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">*/}
              {/*            <div*/}
              {/*                className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"*/}
              {/*                style={{*/}
              {/*                    clipPath:*/}
              {/*                        'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',*/}
              {/*                }}*/}
              {/*            />*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}

              {/* ProjectsSection section */}

              <ProjectsSection />

          </main>

          {/*/!* Footer *!/*/}
          {/*<footer className="mt-32 sm:mt-40" aria-labelledby="footer-heading">*/}
          {/*    <h2 id="footer-heading" className="sr-only">*/}
          {/*        Footer*/}
          {/*    </h2>*/}
          {/*    <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">*/}
          {/*        <div className="border-t border-gray-900/10 pt-20 xl:grid xl:grid-cols-3 xl:gap-8">*/}
          {/*            <div className="grid grid-cols-2 gap-8 xl:col-span-2">*/}
          {/*                <div className="md:grid md:grid-cols-2 md:gap-8">*/}
          {/*                    <div>*/}
          {/*                        <h3 className="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>*/}
          {/*                        <ul role="list" className="mt-6 space-y-4">*/}
          {/*                            {footerNavigation.solutions.map((item) => (*/}
          {/*                                <li key={item.name}>*/}
          {/*                                    <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">*/}
          {/*                                        {item.name}*/}
          {/*                                    </a>*/}
          {/*                                </li>*/}
          {/*                            ))}*/}
          {/*                        </ul>*/}
          {/*                    </div>*/}
          {/*                    <div className="mt-10 md:mt-0">*/}
          {/*                        <h3 className="text-sm font-semibold leading-6 text-gray-900">Support</h3>*/}
          {/*                        <ul role="list" className="mt-6 space-y-4">*/}
          {/*                            {footerNavigation.support.map((item) => (*/}
          {/*                                <li key={item.name}>*/}
          {/*                                    <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">*/}
          {/*                                        {item.name}*/}
          {/*                                    </a>*/}
          {/*                                </li>*/}
          {/*                            ))}*/}
          {/*                        </ul>*/}
          {/*                    </div>*/}
          {/*                </div>*/}
          {/*                <div className="md:grid md:grid-cols-2 md:gap-8">*/}
          {/*                    <div>*/}
          {/*                        <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>*/}
          {/*                        <ul role="list" className="mt-6 space-y-4">*/}
          {/*                            {footerNavigation.company.map((item) => (*/}
          {/*                                <li key={item.name}>*/}
          {/*                                    <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">*/}
          {/*                                        {item.name}*/}
          {/*                                    </a>*/}
          {/*                                </li>*/}
          {/*                            ))}*/}
          {/*                        </ul>*/}
          {/*                    </div>*/}
          {/*                    <div className="mt-10 md:mt-0">*/}
          {/*                        <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>*/}
          {/*                        <ul role="list" className="mt-6 space-y-4">*/}
          {/*                            {footerNavigation.legal.map((item) => (*/}
          {/*                                <li key={item.name}>*/}
          {/*                                    <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">*/}
          {/*                                        {item.name}*/}
          {/*                                    </a>*/}
          {/*                                </li>*/}
          {/*                            ))}*/}
          {/*                        </ul>*/}
          {/*                    </div>*/}
          {/*                </div>*/}
          {/*            </div>*/}
          {/*            <div className="mt-10 xl:mt-0">*/}
          {/*                <h3 className="text-sm font-semibold leading-6 text-gray-900">Subscribe to our newsletter</h3>*/}
          {/*                <p className="mt-2 text-sm leading-6 text-gray-600">*/}
          {/*                    The latest news, articles, and resources, sent to your inbox weekly.*/}
          {/*                </p>*/}
          {/*                <form className="mt-6 sm:flex sm:max-w-md">*/}
          {/*                    <label htmlFor="email-address" className="sr-only">*/}
          {/*                        Email address*/}
          {/*                    </label>*/}
          {/*                    <input*/}
          {/*                        type="email"*/}
          {/*                        name="email-address"*/}
          {/*                        id="email-address"*/}
          {/*                        autoComplete="email"*/}
          {/*                        required*/}
          {/*                        className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"*/}
          {/*                        placeholder="Enter your email"*/}
          {/*                    />*/}
          {/*                    <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">*/}
          {/*                        <button*/}
          {/*                            type="submit"*/}
          {/*                            className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
          {/*                        >*/}
          {/*                            Subscribe*/}
          {/*                        </button>*/}
          {/*                    </div>*/}
          {/*                </form>*/}
          {/*            </div>*/}
          {/*        </div>*/}
          {/*        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">*/}
          {/*            <div className="flex space-x-6 md:order-2">*/}
          {/*                {footerNavigation.social.map((item) => (*/}
          {/*                    <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">*/}
          {/*                        <span className="sr-only">{item.name}</span>*/}
          {/*                        <item.icon className="h-6 w-6" aria-hidden="true" />*/}
          {/*                    </a>*/}
          {/*                ))}*/}
          {/*            </div>*/}
          {/*            <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">*/}
          {/*                &copy; 2020 Your Company, Inc. All rights reserved.*/}
          {/*            </p>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*</footer>*/}
      </div>
  )
}

export default App
