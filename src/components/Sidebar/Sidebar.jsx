import React from "react";
import styles from "../../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Preloader from "../Preloader/Preloader";

const Sidebar = () => {
  const { list, isLoading } = useSelector(({ categories }) => categories);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>Категории:</div>
      <nav>
        <ul className={styles.menu}>
          {isLoading ? (
            <Preloader />
          ) : (
            list.slice(0, 7).map(({ id, name }) => (
              <li key={id}>
                <NavLink
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.active : ""}`
                  }
                  to={`/categories/${id}`}
                >
                  {name}
                </NavLink>
              </li>
            ))
          )}
        </ul>
      </nav>

      <div className={styles.footer}>
        <a
          className={styles.link}
          href="/about"
          target="_blank"
          style={{ textTransform: "uppercase" }}
        >
          О компании
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
