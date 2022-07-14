import React, { useState } from "react";
import { Card } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

export default function Session() {
  const [sessionValue, setSessionValue] = useState(25);
  const decrement = () =>{
    if(sessionValue > 1){
        setSessionValue(sessionValue - 1)
    }
  }
  const increment = () => {
    if(sessionValue < 60){
        setSessionValue(sessionValue + 1)
    }
  }
  return (
    <Card id="session-label" title="Session Length">
      <MinusOutlined id="session-decrement" onClick = {decrement} />
      &nbsp;
      <span id="session-length">{sessionValue}</span>&nbsp;
      <PlusOutlined id="session-increment" onClick = {increment} />
    </Card>
  );
}
