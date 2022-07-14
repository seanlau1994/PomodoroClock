import React from "react";
import { Layout } from "antd";

export default function Header() {
  const { Header } = Layout;
  return (
    <Header style={{ backgroundColor: "white", borderRadius: "2px" }}>
      <h1>25 + 5 Clock Coding by Sean</h1>
    </Header>
  );
}
