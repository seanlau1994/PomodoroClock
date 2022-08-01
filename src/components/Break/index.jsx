import React from "react";
import { Card } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

export default function Break(props) {
  const {breakLength,increaseBreak,decreaseBreak} = props;
  const decrement = () => {
    if (breakLength === 1){
      return;
    }
    decreaseBreak();
  }
  const increment = () => {
    if (breakLength === 60){
      return;
    }
    increaseBreak();
  }

  return (
    <Card id="break-label" title="Break Length">
      <MinusOutlined id="break-decrement" onClick={decrement}/>
      &nbsp;
      <span id="break-length">{breakLength}</span>&nbsp;
      <PlusOutlined id="break-increment" onClick={increment}/>
    </Card>
  );
}
