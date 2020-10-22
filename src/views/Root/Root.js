import React from "react";
import "./index.css"; //global styles
import styles from "./Root.module.scss";
import AppContext from "../../context";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import MorningView from "../MorningView/MoningView";
import AfternoonView from "../AfternoonView/AfternoonView";
import EveningView from "../EveningView/EveningView";

import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";

class Root extends React.Component {
  state = {
    title: null,
    description: null,
    type: null,
    morningItems: [],
    afternoonItems: [],
    eveningItems: [],
  };

  addItem = (e) => {
    e.preventDefault();
    const title = e.target.querySelector("#title").value;
    const description = e.target.querySelector("#description").value;
    const type = e.target.querySelector("#type").value;
    const isImportant = e.target.querySelector("#isImportant").checked;

    const newItem = {
      title: title,
      message: description,
      isImportant: isImportant,
    };

    if (type === "morning") {
      this.setState(() => ({
        morningItems: [...this.state.morningItems, newItem],
      }));
    } else if (type === "afternoon") {
      this.setState(() => ({
        afternoonItems: [...this.state.afternoonItems, newItem],
      }));
    } else if (type === "evening") {
      this.setState(() => ({
        eveningItems: [...this.state.eveningItems, newItem],
      }));
    }
    e.target.reset();
  };

  render() {
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
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
            <Form />
          </div>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
