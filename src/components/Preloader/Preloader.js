import React from "react";
import preLoader from "./my-loader.svg";

import styles from "../Preloader/Preloader.module.css";

const Preloader = () => {
  return (
    <div className={styles.preloader_wrapper}>
      <img
        src={preLoader}
        alt="preloader"
        className={styles.preloader_wrapper__img}
      />
    </div>
  );
};

export default Preloader;
