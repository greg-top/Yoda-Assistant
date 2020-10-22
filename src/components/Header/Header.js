import React from "react";
import styles from "./Header.module.scss";
import logoImage from "../../assets/images/logo.png";
import HeaderNavigation from "./HeaderNavigation";

const Header = () => (
  <header className={styles.wrapper}>
    <img className={styles.logo} src={logoImage} alt="Yoda Assistant logo" />
    <span className={styles.title}>Yoda Assistant</span>
    <HeaderNavigation />
    {/* TODO: create component for button. Button will open modal to operate form - future development */}
    <button className={styles.button}>
      You must add item <br /> {`<(-_-)>`}
    </button>
  </header>
);

export default Header;
