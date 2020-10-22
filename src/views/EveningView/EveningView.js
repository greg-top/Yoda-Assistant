import React from "react";
import Title from "../../components/Title/Title";
import List from "../../components/List/List";

const EveningView = () => (
  <>
    <div>
      <Title> Evening tasks, must do - Joda</Title>
      <List type="evening" />
    </div>
  </>
);

export default EveningView;
