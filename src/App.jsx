import React from "react";
import Header from "./components/Header";
import Break from "./components/Break";
import Session from "./components/Session";
import Timer from "./components/Timer";
import { Col, Row } from "antd";
import "antd/dist/antd.min.css";
import "./App.css";

function App() {
  return (
    <div id="app-wrapper">
      <Row gutter={[48, 48]}>
        <Col span={24}>
          <Header />
        </Col>
        <Col span={12}>
          <Break />
        </Col>
        <Col span={12}>
          <Session />
        </Col>
        <Col span={24}>
          <Timer />
        </Col>
      </Row>
    </div>
  );
}

export default App;
