import React from "react";
import 'antd/dist/antd.min.css';
import { Col, Row, Card, Layout } from "antd";
const { Header } = Layout;

function App() {
  return (
    <div>
      <Row>
        <Col span={24}>
          <Header style={{ backgroundColor: "#e6fffb", textAlign: "center" }}>
            25 + 5 Clock Coding by Sean
          </Header>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Card title="Default size card" >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Default size card">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card title="Default size card">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
