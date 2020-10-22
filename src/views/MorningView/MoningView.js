import React from "react";
import Title from "../../components/Title/Title";
import List from "../../components/List/List";

const MorningView = () => (
  <>
    <div>
      <Title> Morning tasks, you must do - Joda</Title>
      <List type="morning" />
    </div>
  </>
);

export default MorningView;
