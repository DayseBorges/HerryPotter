import React from "react";
import styles from "./styles/Footer.module.css";
import { FiGithub } from "react-icons/fi";
import img from "../../assets/images/pngwing.com (3).png"
import { BsEyeglasses } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className={styles.containerMain}>
        <BsEyeglasses className={styles.glasses}/>
      <div className={styles.infoFooter}>
        <p>© 2023 myharrypotter.com</p>
        <p>All Rights Reserved</p>
        <p>Made by Dayse Borges</p>
      </div>
      <div className={styles.containerNavigation}>
        <a
          href="https://github.com/DayseBorges"
          target="_blank"
          className={styles.a}
        ><FiGithub className={styles.gitHub} /></a>
      </div>
    </footer>
  );
};

export default Footer;
