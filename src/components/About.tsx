import styles from "@/styles/About.module.css";

const About = ({ title, aboutDescription }) => {
  return (
    <section id="about" className={`${styles.about} xs:px-4 md:px-20 py-16`}>
      <h2 className="xs:text-5xl md:text-7xl font-bold antialiased py-16">
       {title}
      </h2>
      <p className="rounded border-8 py-16 px-6 text-2xl shadow-2xl">
        {aboutDescription}
      </p>
    </section>
  );
};
export default About;
