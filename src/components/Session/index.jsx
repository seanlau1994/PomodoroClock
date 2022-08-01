import React from "react";
import { Card } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

export default function Session(props) {
  const {sessionLength,increaseSession,decreaseSession} = props;
  const decrement = () => {
    if (sessionLength === 1){
      return;
    }
    decreaseSession();
  }
  const increment = () => {
    if (sessionLength === 60){
      return;
    }
    increaseSession();
  }
  return (
    <Card id="session-label" title="Session Length">
      <MinusOutlined id="session-decrement" onClick={decrement}/>
      &nbsp;
      <span id="session-length">{sessionLength}</span>&nbsp;
      <PlusOutlined id="session-increment" onClick={increment}/>
    </Card>
  );
}
