import React from "react";
import "./index.css"; //global styles

import { BrowserRouter, Route, Switch } from "react-router-dom";
import MorningView from "../MorningView/MoningView";
import AfternoonView from "../AfternoonView/AfternoonView";
import EveningView from "../EveningView/EveningView";

import Header from "../../components/Header/Header";

class Root extends React.Component {
  state = {
    name: "Grzegorz",
  };

  render() {
    return (
      <BrowserRouter>
        <Header />
        <p>My name is {this.state.name}</p>
        <Switch>
          <Route exact path="/" component={MorningView} />
          <Route path="/afternoon" component={AfternoonView} />
          <Route path="/evening" component={EveningView} />
        </Switch>
        <h2>Form component goes here</h2>
      </BrowserRouter>
    );
  }
}

export default Root;
