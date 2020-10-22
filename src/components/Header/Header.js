import React from "react";
import styles from "./Header.module.scss";
import logoImage from "../../assets/images/logo.png";
import HeaderNavigation from "./HeaderNavigation";
import Button from "../Button/Button";
import Title from "../Title/Title";

const Header = () => (
  <header className={styles.wrapper}>
    <img className={styles.logo} src={logoImage} alt="Yoda Assistant logo" />
    <Title secondary>Yoda Assistant</Title>
    <HeaderNavigation />
    <Button>
      You must add item <br /> {`<(-_-)>`}
    </Button>
  </header>
);

export default Header;
