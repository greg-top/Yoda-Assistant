import React from "react";
import styles from "./List.module.scss";

import yoda1 from "../../assets/images/yoda/yoda-1.png";
import yoda2 from "../../assets/images/yoda/yoda-2.png";
import yoda3 from "../../assets/images/yoda/yoda-3.png";
import yoda4 from "../../assets/images/yoda/yoda-4.png";
import ListItem from "./ListItem";
const avatars = [yoda1, yoda2, yoda3, yoda4];

const quotes = [
  "Do or do not. There is no try.",
  "You must unlearn what you have learned.",
  "Named must be your fear before banish it you can.",
  "The greatest teacher, failure is.",
  "Pass on what you have learned.",
];

const List = () => {
  const draw = (el) => {
    const index = Math.floor(Math.random() * el.length - 1) + 1;

    return el[index];
  };

  return (
    <ul className={styles.wrapper}>
      <ListItem randomAvatar={draw(avatars)} randomQuote={draw(quotes)} />
      <ListItem randomAvatar={draw(avatars)} randomQuote={draw(quotes)} />
      <ListItem randomAvatar={draw(avatars)} randomQuote={draw(quotes)} />
      <ListItem randomAvatar={draw(avatars)} randomQuote={draw(quotes)} />
    </ul>
  );
};
export default List;
