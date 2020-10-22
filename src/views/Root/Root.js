import React from "react";
import "./index.css"; //global styles
import styles from "./Root.module.scss";
import AppContext from "../../context";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import MorningView from "../MorningView/MoningView";
import AfternoonView from "../AfternoonView/AfternoonView";
import EveningView from "../EveningView/EveningView";

import Header from "../../components/Header/Header";

class Root extends React.Component {
  state = {
    morningItems: [
      {
        title: "Morning task title 1",
        message:
          "Morning task message: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque magnam voluptas aut, facilis architecto itaque cumque ducimus veritatis debitis, et assumenda, necessitatibus tempora consectetur eos. Nesciunt ab architecto eos tenetur? 11",
        isImportant: false,
      },
      {
        title: "Morning task title 2",
        message:
          "Morning task message: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque magnam voluptas aut, facilis architecto itaque cumque ducimus veritatis debitis, et assumenda, necessitatibus tempora consectetur eos. Nesciunt ab architecto eos tenetur? 22",
        isImportant: true,
      },
      {
        title: "Morning task title 3",
        message:
          "Morning task message: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque magnam voluptas aut, facilis architecto itaque cumque ducimus veritatis debitis, et assumenda, necessitatibus tempora consectetur eos. Nesciunt ab architecto eos tenetur? 33",
        isImportant: true,
      },
    ],
    afternoonItems: [
      {
        title: "Afternoon task title 1",
        message:
          "Afternoon task message: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque magnam voluptas aut, facilis architecto itaque cumque ducimus veritatis debitis, et assumenda, necessitatibus tempora consectetur eos. Nesciunt ab architecto eos tenetur? 11",
        isImportant: false,
      },
      {
        title: "Afternoon task title 2",
        message:
          "Afternoon task message: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque magnam voluptas aut, facilis architecto itaque cumque ducimus veritatis debitis, et assumenda, necessitatibus tempora consectetur eos. Nesciunt ab architecto eos tenetur? 22",
        isImportant: true,
      },
      {
        title: "Afternoon task title 3",
        message:
          "Afternoon task message: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque magnam voluptas aut, facilis architecto itaque cumque ducimus veritatis debitis, et assumenda, necessitatibus tempora consectetur eos. Nesciunt ab architecto eos tenetur? 33",
        isImportant: true,
      },
    ],
    eveningItems: [
      {
        title: "Evening task title 1",
        message:
          "Evening task message: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque magnam voluptas aut, facilis architecto itaque cumque ducimus veritatis debitis, et assumenda, necessitatibus tempora consectetur eos. Nesciunt ab architecto eos tenetur? 11",
        isImportant: false,
      },
      {
        title: "Evening task title 2",
        message:
          "Evening task message: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque magnam voluptas aut, facilis architecto itaque cumque ducimus veritatis debitis, et assumenda, necessitatibus tempora consectetur eos. Nesciunt ab architecto eos tenetur? 22",
        isImportant: true,
      },
      {
        title: "Evening task title 3",
        message:
          "Evening task message: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque magnam voluptas aut, facilis architecto itaque cumque ducimus veritatis debitis, et assumenda, necessitatibus tempora consectetur eos. Nesciunt ab architecto eos tenetur? 33",
        isImportant: true,
      },
    ],
  };

  render() {
    const contextElements = {
      ...this.state,
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header />
          <div className={styles.wrapper}>
            <Switch>
              <Route exact path="/" component={MorningView} />
              <Route path="/afternoon" component={AfternoonView} />
              <Route path="/evening" component={EveningView} />
            </Switch>
            <div className={styles.form}>form goes here</div>
          </div>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
