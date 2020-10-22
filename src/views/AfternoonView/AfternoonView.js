import React from "react";
import Title from "../../components/Title/Title";
import List from "../../components/List/List";

const AfternoonView = () => (
  <>
    <div>
      <Title> Afternoon tasks, must do - Joda</Title>
      <List type="afternoon" />
    </div>
  </>
);

export default AfternoonView;
