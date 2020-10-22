import React from "react";
import styles from "./ListItem.module.scss";

import Title from "../Title/Title";

const ListItem = ({
  randomAvatar,
  randomQuote,
  title,
  message,
  isImportant,
}) => (
  <li className={styles.wrapper}>
    <Title secondary>{title}</Title>

    {isImportant ? (
      <span className={styles.sticker}>Important, -JODA</span>
    ) : null}
    <p className={styles.description}>{message}</p>
    <div className={styles.imageWrapper}>
      <img src={randomAvatar} alt="" className={styles.image} />
      <span className={styles.caption}>{randomQuote}</span>
    </div>
  </li>
);

export default ListItem;
