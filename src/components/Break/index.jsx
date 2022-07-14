import React, { useState } from "react";
import { Card } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

export default function Break() {
  const [breakValue, setBreakValue] = useState(5);
  const decrement = () => {
    if (breakValue > 1) {
      setBreakValue(breakValue - 1);
    }
  };

  const increment = () => {
    if (breakValue < 60) {
      setBreakValue(breakValue + 1);
    }
  };
  return (
    <Card id="break-label" title="Break Length">
      <MinusOutlined id="break-decrement" onClick={decrement} />
      &nbsp;
      <span id="break-length">{breakValue}</span>&nbsp;
      <PlusOutlined id="break-increment" onClick={increment} />
    </Card>
  );
}
