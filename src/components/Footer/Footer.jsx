import React from "react";
import styles from "../../styles/Footer.module.css";

import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import LOGO from "../../images/logo.svg";
import VK from "../../images/vk.png";
import TG from "../../images/telegram.png";
import WHATSAPP from "../../images/whatsapp.png";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="stuff" />
        </Link>
      </div>

      <div className={styles.rights}>
        Разработано:
        <a href="" rel="noopener noreferrer">
          Всё будет хорошо
        </a>
      </div>

      <div className={styles.socials}>
        <a href="#" rel="noopener noreferrer" target="_blank">
          <img src={VK} alt="vk" />
        </a>

        <a href="#" rel="noopener noreferrer" target="_blank">
          <img src={TG} alt="tg" />
        </a>

        <a href="#" rel="noopener noreferrer" target="_blank">
          <img src={WHATSAPP} alt="whatsapp" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
