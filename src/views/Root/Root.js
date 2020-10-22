import React from "react";
import "./index.css"; //global styles
import styles from "./Root.module.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import MorningView from "../MorningView/MoningView";
import AfternoonView from "../AfternoonView/AfternoonView";
import EveningView from "../EveningView/EveningView";

import Header from "../../components/Header/Header";

class Root extends React.Component {
  state = {
    items: [],
  };

  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className={styles.wrapper}>
          <Switch>
            <Route exact path="/" component={MorningView} />
            <Route path="/afternoon" component={AfternoonView} />
            <Route path="/evening" component={EveningView} />
          </Switch>
          <div className={styles.form}>form goes here</div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Root;
