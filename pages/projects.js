import Head from "next/head";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ImArrowUpRight2 } from "react-icons/im";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Can Guden | Projects</title>
        <meta name="description" content="Projects" />
      </Head>
      <div className="max-w-xl mx-auto mt-10   ">
        <h1 className=" text-2xl font-bold decoration-none text-gray-800 dark:text-gray-300">
          Projects
        </h1>
        <div className="max-w-xl mx-auto mt-10 pl-0 pr-2 pt-2 pb-2 ">
          <ul className="space-y-12">
            <li className="flex items-start space-x-5 space-y-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex mx-1  font-bold items-center text-sm hover:underline"
              >
                Party Agenda
              </a>
              <div className="flex flex-col  mt-2 ">
                <div>
                  <p className="font-light text-lg">
                    Functional calendar which shows all upcoming parties of a
                    country fetched from FB. UI minimalistic and simple. Focus
                    on excellent overview and UX
                  </p>
                  <div className="flex space-x-2 mt-2 dark:text-gray-400">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="inline-flex items-center overflow-hidden px-3 py-1 my-1 space-x-1 text-xs border rounded-full group dark:border-gray-700"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-zinc-700 dark:bg-white"
                      ></span>
                      <span className=" dark:text-gray-100">NextJS</span>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="inline-flex items-center px-3 py-1 my-1 space-x-1 text-xs border rounded-full group dark:border-gray-700"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-blue-600"
                      ></span>
                      <span className=" dark:text-gray-100">Typescript</span>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="inline-flex items-center px-3 py-1 my-1 space-x-1 text-xs border rounded-full group dark:border-gray-700"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-orange-400"
                      ></span>
                      <span className=" dark:text-gray-100">Sanity</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="max-w-xl mt-10 pl-0 pr-2 pt-2 pb-2 ">
          <ul className="space-y-12">
            <li className="flex items-start space-x-5 space-y-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex font-bold items-center text-sm hover:underline"
              >
                OpenBall
              </a>
              <div className="flex-1 mt-2 ">
                <div>
                  <p className="font-light text-lg">
                    Basketball platform for research, study and learning.
                    Developing AlphaBasket, a software for automated statistics,
                    recognizing players, plays and situations implementing
                    Machine Learning and saving solutions.
                  </p>
                  <div className="flex items-center mt-2 space-x-2 dark:text-gray-400">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="inline-flex items-center  px-3 py-1 my-1 space-x-1 text-xs border rounded-full group dark:border-gray-700"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-zinc-700 dark:bg-white"
                      ></span>
                      <span className=" dark:text-gray-100">NextJS</span>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="inline-flex items-center px-3 py-1 my-1 space-x-1 text-xs border rounded-full group dark:border-gray-700"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-orange-400"
                      ></span>
                      <span className=" dark:text-gray-100">TailwindCSS</span>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="inline-flex items-center px-3 py-1 my-1 space-x-1 text-xs border rounded-full group dark:border-gray-700"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-blue-500"
                      ></span>
                      <span className=" dark:text-gray-100">Python</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="max-w-xl mt-10 pl-0 pr-2 pt-2">
          <ul className="space-y-12">
            <li className="flex items-start space-x-5 space-y-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center font-bold text-sm hover:underline"
              >
                ChatGPT
              </a>
              <div className="flex-1 mt-2">
                <div>
                  <p className="font-light text-lg">
                    Created a personalised chatbot. Improving speed,
                    productivity and free unlimited questions.
                  </p>
                  <div className="flex mt-2 items-center  space-x-2 dark:text-gray-400">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="inline-flex items-center px-3 py-1 my-1 space-x-1 text-xs border rounded-full group dark:border-gray-700"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-blue-300"
                      ></span>
                      <span className=" dark:text-gray-100">ReactJS</span>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="inline-flex items-center px-3 py-1 my-1 space-x-1 text-xs border rounded-full group dark:border-gray-700"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-emerald-600"
                      ></span>
                      <span className=" dark:text-gray-100">TailwindCSS</span>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="inline-flex items-center px-3 py-1 my-1 space-x-1 text-xs border rounded-full group dark:border-gray-700"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-blue-500"
                      ></span>
                      <span className=" dark:text-gray-100">Python</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="max-w-xl mt-10 pl-0 pr-2 pt-2 pb-2 ">
          <ul className="space-y-12">
            <li className="flex items-start space-x-5 space-y-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex mx-2 items-center font-bold text-sm hover:underline"
              >
                Portal
              </a>
              <div className="flex-1 mt-2">
                <div>
                  <p className="font-light text-lg">
                    Design and development of a dashboard connecting to the
                    database. Fully functional interface with users.{" "}
                  </p>
                  <div className="flex mt-2 items-center  space-x-2 dark:text-gray-400">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="inline-flex items-center px-3 py-1 my-1 space-x-1 text-xs border rounded-full group dark:border-gray-700"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-green-700"
                      ></span>
                      <span className="group-hover:underline dark:text-gray-100">
                        VueJS
                      </span>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="inline-flex items-center px-3 py-1 my-1 space-x-1 text-xs border rounded-full group dark:border-gray-700"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-emerald-600"
                      ></span>
                      <span className="group-hover:underline dark:text-gray-100">
                        TailwindCSS
                      </span>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="inline-flex items-center px-3 py-1 my-1 space-x-1 text-xs border rounded-full group dark:border-gray-700"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-blue-500"
                      ></span>
                      <span className=" dark:text-gray-100">Python</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="max-w-xl mb-20 mt-10 pl-0 pr-2 pt-2 pb-2 ">
          <ul className="space-y-12">
            <li className="flex items-start space-x-5 space-y-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex font-bold items-center text-sm hover:underline"
              >
                Portfolio
              </a>
              <div className="flex-1 mt-2">
                <div>
                  <p className="font-light text-lg">
                    Personal portfolio, first project for Code Institute, the
                    portfolio was build for study purposes
                  </p>
                  <div className="flex mt-2 items-center  space-x-2 dark:text-gray-400">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="inline-flex items-center px-3 py-1 my-1 space-x-1 text-xs border rounded-full group dark:border-gray-700"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-red-500"
                      ></span>
                      <span className=" dark:text-gray-100">HTML</span>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="inline-flex items-center px-3 py-1 my-1 space-x-1 text-xs border rounded-full group dark:border-gray-700"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-blue-600"
                      ></span>
                      <span className=" dark:text-gray-100">CSS</span>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="inline-flex items-center px-3 py-1 my-1 space-x-1 text-xs border rounded-full group dark:border-gray-700"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-yellow-500"
                      ></span>
                      <span className=" dark:text-gray-100">JavaScript</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
