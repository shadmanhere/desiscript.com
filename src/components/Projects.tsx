import styles from "@/styles/Projects.module.css";
import Image from "next/image";

const Projects = ({ hidden }:any) => {
  return (
    <section
      id="projects"
      className={`${styles.projects} xs:px-4 md:px-20 py-16`}
    >
      <h2 className="text-5xl font-bold antialiased">Highlighted Projects</h2>
      <div className={`${styles.projectsContainer} flex flex-wrap gap-6 gap justify-evenly my-9`}>
        {/* Image Editor */}
        <div
          className={`${styles.imageContainer} xs:w-full md:w-8/12 lg:w-4/12 xs:h-96 lg:h-80 ${ hidden?.interview && 'hidden'}`}
        >
          <Image
            src="/images/projects/interview.png"
            alt="Avatar"
            width="800"
            height="800"
            className={styles.image}
          />
          <h3
            className={`${styles.imageCaption} text-white text-3xl font-bold w-full text-center`}
          >
            AI Interview
          </h3>
          <div className={styles.overlay}>
            <div className={`${styles.overlayText} text-justify my-2`}>
              <h3 className="mt-0 mb-2 text-3xl font-bold leading-tight text-white opacity-100">
                AI Interview
              </h3>
              <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
              <p className="my-2 xs:text-sm md:text-sm">
                This platform, crafted using Next.js, Prisma, and PostgreSQL, facilitates interview practice using AI. It also provides user authentication and smooth payment processing via Stripe integration.
              </p>
              <a
                href="https://apps.desiscript.com/interview"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="mr-2 inline-block rounded border-2 border-white px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-white bg-black transition 
              duration-150 ease-in-out hover:bg-white hover:text-black
              focus:border-neutral-800 focus:text-white focus:outline-none 
              focus:ring-0 active:border-white active:text-white dark:border-neutral-900 dark:text-white 
              dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-white dark:focus:border-neutral-900 
              dark:focus:text-white dark:active:border-neutral-900 dark:active:text-white"
                  data-te-ripple-init
                >
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* ends Image Editor */}
        {/* issue finder */}
        <div
          className={`${styles.imageContainer} xs:w-full md:w-8/12 lg:w-4/12 xs:h-96 lg:h-80`}
        >
          <Image
            src="/images/projects/issuefinder.png"
            alt="Avatar"
            width="800"
            height="800"
            className={styles.image}
          />
          <h3
            className={`${styles.imageCaption} text-white text-3xl font-bold w-full text-center`}
          >
            Issue Finder
          </h3>
          <div className={styles.overlay}>
            <div className={`${styles.overlayText} text-justify my-2`}>
              <h3 className="mt-0 mb-2 text-3xl font-bold leading-tight text-white opacity-100">
                Issue finder
              </h3>
              <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
              <p className="my-2 xs:text-sm md:text-sm">
                Created a React-Redux tool that streamlines open-source
                collaboration for novice developers by facilitating the search
                for beginner-friendly issues on GitHub. Developed in
                collaboration with five other developers, the tool employs the
                GitHub API. To contribute, kindly fork the repository and submit
                a pull request.
              </p>
              <a
                href="https://github.com/shadmanhere/issue-finder"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="opacity-100 mr-2 inline-block rounded border-2 border-white px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-white bg-black transition 
              duration-150 ease-in-out hover:bg-white hover:text-black
              focus:border-neutral-800 focus:text-white focus:outline-none 
              focus:ring-0 active:border-white active:text-white dark:border-neutral-900 dark:text-white 
              dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-white dark:focus:border-neutral-900 
              dark:focus:text-white dark:active:border-neutral-900 dark:active:text-white"
                  data-te-ripple-init
                >
                  Code
                </button>
              </a>
              <a
                href="https://github-issue-finder.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="mr-2 inline-block rounded border-2 border-white px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-white bg-black transition 
              duration-150 ease-in-out hover:bg-white hover:text-black
              focus:border-neutral-800 focus:text-white focus:outline-none 
              focus:ring-0 active:border-white active:text-white dark:border-neutral-900 dark:text-white 
              dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-white dark:focus:border-neutral-900 
              dark:focus:text-white dark:active:border-neutral-900 dark:active:text-white"
                  data-te-ripple-init
                >
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* ends issue finder */}

        {/* start chat comp */}
        <div
          className={`${styles.imageContainer} xs:w-full md:w-8/12 lg:w-4/12 xs:h-96 lg:h-80`}
        >
          <Image
            src="/images/projects/chatcomp.png"
            alt="Avatar"
            width="800"
            height="800"
            className={styles.image}
          />
          <h3
            className={`${styles.imageCaption} text-white text-3xl font-bold w-full text-center`}
          >
            Chat Companion
          </h3>
          <div className={styles.overlay}>
            <div className={`${styles.overlayText} text-justify my-2`}>
              <h3 className="mt-0 mb-2 text-3xl font-bold leading-tight text-white opacity-100">
                Chat Companion
              </h3>
              <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
              <p className="my-2 xs:text-sm md:text-sm">
                &quot;Chat Comp&quot; is an android app. It empowers you to effortlessly initiate chats on
                WhatsApp Messenger using any phone number, even if it&quot;s not
                added to your contacts.
              </p>
              <a
                href="https://github.com/shadmanhere/issue-finder"
                target="_blank"
                rel="noreferrer"
              >
                {/* <button
                  type="button"
                  className="opacity-100 mr-2 inline-block rounded border-2 border-white px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-white bg-black transition 
              duration-150 ease-in-out hover:bg-white hover:text-black
              focus:border-neutral-800 focus:text-white focus:outline-none 
              focus:ring-0 active:border-white active:text-white dark:border-neutral-900 dark:text-white 
              dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-white dark:focus:border-neutral-900 
              dark:focus:text-white dark:active:border-neutral-900 dark:active:text-white"
                  data-te-ripple-init
                >
                  Code
                </button> */}
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=org.nativescript.shaadMyCoolApp"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="mr-2 inline-block rounded border-2 border-white px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-white bg-black transition 
              duration-150 ease-in-out hover:bg-white hover:text-black
              focus:border-neutral-800 focus:text-white focus:outline-none 
              focus:ring-0 active:border-white active:text-white dark:border-neutral-900 dark:text-white 
              dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-white dark:focus:border-neutral-900 
              dark:focus:text-white dark:active:border-neutral-900 dark:active:text-white"
                  data-te-ripple-init
                >
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* ends chat comp */}

        {/* learning path */}

        <div
          className={`${styles.imageContainer} xs:w-full md:w-8/12 lg:w-4/12 xs:h-96 lg:h-80`}
        >
          <Image
            src="/images/projects/learningpath.png"
            alt="Avatar"
            width="800"
            height="800"
            className={styles.image}
          />
          <h3
            className={`${styles.imageCaption} text-white text-3xl font-bold w-full text-center`}
          >
            Learning Path
          </h3>
          <div className={styles.overlay}>
            <div className={`${styles.overlayText} text-justify my-2`}>
              <h3 className="mt-0 mb-2 text-3xl font-bold leading-tight text-white opacity-100">
                Learning Path
              </h3>
              <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
              <p className="my-4">
                The application is a full-stack project built using ReactJS,
                TypeScript, and ExpressJS. Its purpose is to provide learners
                with a structured and clear path to develop expertise in a
                specific domain.
              </p>
              <a
                href="https://github.com/shadmanhere/learning-path"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="mr-2 inline-block rounded border-2 border-white px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-white bg-black transition 
              duration-150 ease-in-out hover:bg-white hover:text-black
              focus:border-neutral-800 focus:text-white focus:outline-none 
              focus:ring-0 active:border-white active:text-white dark:border-neutral-900 dark:text-white 
              dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-white dark:focus:border-neutral-900 
              dark:focus:text-white dark:active:border-neutral-900 dark:active:text-white"
                  data-te-ripple-init
                >
                  Code
                </button>
              </a>
              <a
                href="https://www.youtube.com/watch?v=378Rc1IYh5E"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="opacity-100 mr-2 inline-block rounded border-2 border-white px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-white bg-black transition 
              duration-150 ease-in-out hover:bg-white hover:text-black
              focus:border-neutral-800 focus:text-white focus:outline-none 
              focus:ring-0 active:border-white active:text-white dark:border-neutral-900 dark:text-white 
              dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-white dark:focus:border-neutral-900 
              dark:focus:text-white dark:active:border-neutral-900 dark:active:text-white"
                  data-te-ripple-init
                >
                  Demo
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* ends leearning path */}

        {/* the drink bank  */}
        <div
          className={`${styles.imageContainer} xs:w-full md:w-8/12 lg:w-4/12 xs:h-96 lg:h-80`}
        >
          <Image
            src="/images/projects/drinkbank.png"
            alt="Avatar"
            width="800"
            height="800"
            className={styles.image}
          />
          <h3
            className={`${styles.imageCaption} text-white text-3xl font-bold w-full text-center`}
          >
            The Drink Bank
          </h3>
          <div className={styles.overlay}>
            <div className={`${styles.overlayText} text-justify my-2`}>
              <h3 className="mt-0 mb-2 text-3xl font-bold leading-tight text-white opacity-100">
                The Drink Bank
              </h3>
              <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
              <p className="my-4">
                This React application consumes the API from&nbsp;
                <a
                  className="underline underline-offset-2"
                  href="https://punkapi.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  punkapi
                </a>{" "}
                and beautifully displays a list of drinks. It includes an
                infinite scroll feature, advanced search capabilities, and the
                ability to mark favorite items.
              </p>
              <a
                href="https://github.com/shadmanhere/drink_bank"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="mr-2 inline-block rounded border-2 border-white px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-white bg-black transition 
              duration-150 ease-in-out hover:bg-white hover:text-black
              focus:border-neutral-800 focus:text-white focus:outline-none 
              focus:ring-0 active:border-white active:text-white dark:border-neutral-900 dark:text-white 
              dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-white dark:focus:border-neutral-900 
              dark:focus:text-white dark:active:border-neutral-900 dark:active:text-white"
                  data-te-ripple-init
                >
                  Code
                </button>
              </a>
              <a
                href="https://xenodochial-liskov-3f1582.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="opacity-100 mr-2 inline-block rounded border-2 border-white px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-white bg-black transition 
              duration-150 ease-in-out hover:bg-white hover:text-black
              focus:border-neutral-800 focus:text-white focus:outline-none 
              focus:ring-0 active:border-white active:text-white dark:border-neutral-900 dark:text-white 
              dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-white dark:focus:border-neutral-900 
              dark:focus:text-white dark:active:border-neutral-900 dark:active:text-white"
                  data-te-ripple-init
                >
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* ends drink bank */}
        {/* starts ecommerce react  */}
        <div
          className={`${styles.imageContainer} xs:w-full md:w-8/12 lg:w-4/12 xs:h-96 lg:h-80`}
        >
          <Image
            src="/images/projects/ecomm-react.png"
            alt="Avatar"
            width="800"
            height="800"
            className={styles.image}
          />
          <h3
            className={`${styles.imageCaption} text-white text-3xl font-bold w-full text-center`}
          >
            Ecommerce React
          </h3>
          <div className={styles.overlay}>
            <div className={`${styles.overlayText} text-justify my-2`}>
              <h3 className="mt-0 mb-2 text-3xl font-bold leading-tight text-white opacity-100">
                Ecommerce React
              </h3>
              <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
              <p className="my-4">
                This React application uses the context API to manage state
                across the application. It beautifully displays a list of
                products in cards. It also has cart section where we can add
                items, increase its quantity and get total amount calculated.
              </p>
              <a
                href="https://github.com/shadmanhere/e-commerce-site-react"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="mr-2 inline-block rounded border-2 border-white px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-white bg-black transition 
              duration-150 ease-in-out hover:bg-white hover:text-black
              focus:border-neutral-800 focus:text-white focus:outline-none 
              focus:ring-0 active:border-white active:text-white dark:border-neutral-900 dark:text-white 
              dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-white dark:focus:border-neutral-900 
              dark:focus:text-white dark:active:border-neutral-900 dark:active:text-white"
                  data-te-ripple-init
                >
                  Code
                </button>
              </a>
              <a
                href="https://quirky-jepsen-49efad.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="opacity-100 mr-2 inline-block rounded border-2 border-white px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-white bg-black transition 
              duration-150 ease-in-out hover:bg-white hover:text-black
              focus:border-neutral-800 focus:text-white focus:outline-none 
              focus:ring-0 active:border-white active:text-white dark:border-neutral-900 dark:text-white 
              dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-white dark:focus:border-neutral-900 
              dark:focus:text-white dark:active:border-neutral-900 dark:active:text-white"
                  data-te-ripple-init
                >
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* ends ecommerce react */}
      </div>
    </section>
  );
};
export default Projects;
