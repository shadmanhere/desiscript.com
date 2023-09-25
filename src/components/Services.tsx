import Image from "next/image";
import styles from "@/styles/Services.module.css";

const Services = ({description, frontEndDescription, backEndDescription, webDesignDescription, hostingDescription}) => {
  return (
    <section
      id="services"
      className={`${styles.services} xs:px-4 md:px-20 py-16`}
    >
      <h2 className="xs:text-5xl md:text-7xl font-bold antialiased">
        Services
      </h2>
      <p className="text-3xl my-4">
        {description}
      </p>
      <div className="flex justify-evenly gap-6 flex-wrap">
        <div
          className={`${styles.flipCard} xs:w-full md:w-8/12 xs:h-72 lg:w-4/12 lg:h-82`}
        >
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
              <Image
                src="/frontend.jpg"
                alt="Avatar"
                width="300"
                height="300"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
              <p
                className="text-2xl py-2"
                style={{ background: "black", color: "white" }}
              >
                Front End Development
              </p>
            </div>
            <div className={styles.flipCardBack}>
              <p className="xs:text-xl md:text-2xl xs:my-2 md:my-4 text-justify">
                {frontEndDescription}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`${styles.flipCard} xs:w-full md:w-8/12 xs:h-72 lg:w-4/12 lg:h-82`}
        >
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
              <Image
                src="/backend.jpg"
                alt="Avatar"
                width="300"
                height="300"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
              <p
                className="text-2xl py-2"
                style={{ background: "black", color: "white" }}
              >
                Back End Development
              </p>
            </div>
            <div className={styles.flipCardBack}>
              <p className="xs:text-base md:text-xl xs:my-2 md:my-4 text-justify">
                {backEndDescription}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`${styles.flipCard} xs:w-full md:w-8/12 xs:h-72 lg:w-4/12 lg:h-82`}
        >
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
              <Image
                src="/webdesign.png"
                alt="Avatar"
                width="300"
                height="300"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
              <p
                className="text-2xl py-2"
                style={{ background: "black", color: "white" }}
              >
                Web Design
              </p>
            </div>
            <div className={styles.flipCardBack}>
              <p className="xs:text-xl md:text-2xl xs:my-2 md:my-4 text-justify">
                {webDesignDescription}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`${styles.flipCard} xs:w-full md:w-8/12 xs:h-72 lg:w-4/12 lg:h-82`}
        >
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
              <Image
                src="/hosting.png"
                alt="Avatar"
                width="300"
                height="300"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
              <p
                className="text-xl py-2"
                style={{ background: "black", color: "white" }}
              >
                Hosting Service Web Analytics
              </p>
            </div>
            <div className={styles.flipCardBack}>
              <p className="xs:text-xl md:text-2xl xs:my-2 md:my-4 text-justify">
                {hostingDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
