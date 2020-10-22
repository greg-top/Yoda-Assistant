import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./HeaderNavigation.module.scss";

const HeaderNavigation = () => (
  <nav className={styles.wrapper}>
    <li className={styles.navItem}>
      <NavLink
        exact
        activeClassName={styles.navItemLinkActive}
        className={styles.navItemLink}
        to="/"
      >
        morning
      </NavLink>
    </li>
    <li className={styles.navItem}>
      <NavLink
        activeClassName={styles.navItemLinkActive}
        className={styles.navItemLink}
        to="/afternoon"
      >
        afternoon
      </NavLink>
    </li>
    <li className={styles.navItem}>
      <NavLink
        activeClassName={styles.navItemLinkActive}
        className={styles.navItemLink}
        to="/evening"
      >
        evening
      </NavLink>
    </li>
  </nav>
);

export default HeaderNavigation;
