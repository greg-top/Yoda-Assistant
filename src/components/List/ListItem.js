import React from "react";
import styles from "./ListItem.module.scss";

import Title from "../Title/Title";

const ListItem = ({ randomAvatar, randomQuote }) => (
  <li className={styles.wrapper}>
    <Title secondary>This is title message</Title>
    <p className={styles.description}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque magnam
      voluptas aut, facilis architecto itaque cumque ducimus veritatis debitis,
      et assumenda, necessitatibus tempora consectetur eos. Nesciunt ab
      architecto eos tenetur?
    </p>
    <div className={styles.imageWrapper}>
      <img src={randomAvatar} alt="" className={styles.image} />
      <span className={styles.caption}>{randomQuote}</span>
    </div>
  </li>
);

export default ListItem;
