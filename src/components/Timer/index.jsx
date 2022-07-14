import React, { useState } from "react";
import { Card, Button } from "antd";
import {
  CaretRightOutlined,
  PauseOutlined,
  RetweetOutlined,
} from "@ant-design/icons";

export default function Timer() {
  const [isPlay, setIsPlay] = useState(false);
  return (
    <Card id="timer-label" title="Session">
      <h2 id="time-left">60:00</h2>
      <Button
        onClick={() => {
          setIsPlay(!isPlay);
        }}
        id="start_stop"
        type="primary"
        shape="round"
        icon={isPlay ? <PauseOutlined /> : <CaretRightOutlined /> }
      ></Button>
      &nbsp;
      <Button
        id="reset"
        type="primary"
        shape="round"
        icon={<RetweetOutlined />}
      />
    </Card>
  );
}
