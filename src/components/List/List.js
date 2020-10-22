import React from "react";
import styles from "./List.module.scss";
import AppContext from "../../context";

import yoda1 from "../../assets/images/yoda/yoda-1.png";
import yoda2 from "../../assets/images/yoda/yoda-2.png";
import yoda3 from "../../assets/images/yoda/yoda-3.png";
import yoda4 from "../../assets/images/yoda/yoda-4.png";
import ListItem from "./ListItem";
import Title from "../Title/Title";
const avatars = [yoda1, yoda2, yoda3, yoda4];

const quotes = [
  "Do or do not. There is no try.",
  "You must unlearn what you have learned.",
  "Named must be your fear before banish it you can.",
  "The greatest teacher, failure is.",
  "Pass on what you have learned.",
];

const List = ({ type }) => {
  const draw = (el) => {
    const index = Math.floor(Math.random() * el.length - 1) + 1;

    return el[index];
  };

  return (
    <AppContext.Consumer>
      {(context) => {
        if (type === "morning") {
          if (context.morningItems.length) {
            return (
              <ul className={styles.wrapper}>
                {context.morningItems.map((item, index) => (
                  <ListItem
                    randomAvatar={draw(avatars)}
                    randomQuote={draw(quotes)} //
                    title={item.title}
                    message={item.message}
                    isImportant={item.isImportant}
                    key={item.title}
                  />
                ))}
              </ul>
            );
          } else {
            return (
              <div className={styles.noTasks}>
                <Title>Some {type} tasks you must add</Title>
              </div>
            );
          }
        } else if (type === "afternoon") {
          if (context.afternoonItems.length) {
            return (
              <ul className={styles.wrapper}>
                {context.afternoonItems.map((item) => (
                  <ListItem
                    randomAvatar={draw(avatars)}
                    randomQuote={draw(quotes)} //
                    title={item.title}
                    message={item.message}
                    isImportant={item.isImportant}
                    key={item.title}
                  />
                ))}
              </ul>
            );
          } else {
            return (
              <div className={styles.noTasks}>
                <Title>Some {type} tasks you must add</Title>
              </div>
            );
          }
        } else if (type === "evening") {
          if (context.eveningItems.length) {
            return (
              <ul className={styles.wrapper}>
                {context.eveningItems.map((item) => (
                  <ListItem
                    randomAvatar={draw(avatars)}
                    randomQuote={draw(quotes)} //
                    title={item.title}
                    message={item.message}
                    isImportant={item.isImportant}
                    key={item.title}
                  />
                ))}
              </ul>
            );
          } else {
            return (
              <div className={styles.noTasks}>
                <Title>Some {type} tasks you must add</Title>
              </div>
            );
          }
        }
      }}
    </AppContext.Consumer>
  );
};

export default List;
