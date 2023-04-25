import styles from "@/styles/About.module.css";

const About = () => {
  return (
    <section id="about" className={`${styles.about} xs:px-4 md:px-20 py-16`}>
      <h2 className="xs:text-5xl md:text-7xl font-bold antialiased py-16">
        About Me
      </h2>
      <p className="rounded border-8 py-16 px-6 text-2xl shadow-2xl">
        As a skilled full stack web developer, I am passionate about creating
        visually stunning websites that offer superior functionality. With a
        background in engineering, I am currently open to full-time and
        contract positions with socially responsible companies that value
        diversity and inclusion and are committed to using technology to create
        positive change. I am driven by the desire to leverage my skills to
        develop websites that provide an exceptional user experience and promote
        engagement. Whether you are looking for a full-time web developer to
        join your team or seeking a contractor to complete a project, I would be
        delighted to contribute my expertise and help bring your vision to life.
      </p>
    </section>
  );
};
export default About;
