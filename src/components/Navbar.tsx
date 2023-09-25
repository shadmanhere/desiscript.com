import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Navbar.module.css";

const Navbar = ({ content, brandUrl }) => {
  return (
    <header>
      <nav className={styles.navitems}>
        <ul>
          <li>
            <Link style={{ fontSize: "1.8rem" }} href={brandUrl}>
              <FontAwesomeIcon icon={faCode} /> {content}
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li className="underline decoration-double underline-offset-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
