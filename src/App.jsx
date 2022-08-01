import React, { Component } from "react";
import Header from "./components/Header";
import Break from "./components/Break";
import Session from "./components/Session";
import Timer from "./components/Timer";
import { Col, Row } from "antd";
import "antd/dist/antd.min.css";
import "./App.css";

export default class App extends Component {
  state = {
    breakLength: 5,
    sessionLength: 25,
    timerMinutes: 25,
    isSession: true,
    isPlay: false,
    isTimerChange: false,
  };

  onUpdateSessionStatus = () => {
    const { isSession } = this.state;
    this.setState({ isSession: !isSession });
  };

  onUpdateIsPlayStatus = () => {
    const { isPlay } = this.state;
    this.setState({ isPlay: !isPlay });
  };

  onIncreaseBreakLength = () => {
    const { isPlay, isSession } = this.state;
    if (!isPlay) {
      if (!isSession)
        this.setState({ isTimerChange: !this.state.isTimerChange });
      this.setState((prevState) => {
        if (!isSession) {
          return {
            breakLength: prevState.breakLength + 1,
            timerMinutes: prevState.breakLength + 1,
          };
        } else {
          return {
            breakLength: prevState.breakLength + 1,
          };
        }
      });
    } else {
      return;
    }
  };

  onDecreaseBreakLength = () => {
    const { isPlay, isSession } = this.state;
    if (!isPlay) {
      if (!isSession)
        this.setState({ isTimerChange: !this.state.isTimerChange });
      this.setState((prevState) => {
        if (!isSession) {
          return {
            breakLength: prevState.breakLength - 1,
            timerMinutes: prevState.breakLength - 1,
          };
        } else {
          return {
            breakLength: prevState.breakLength - 1,
          };
        }
      });
    } else {
      return;
    }
  };

  onIncreaseSessionLength = () => {
    const { isPlay, isSession } = this.state;
    if (!isPlay) {
      if (isSession)
        this.setState({ isTimerChange: !this.state.isTimerChange });
      this.setState((prevState) => {
        if (isSession) {
          return {
            sessionLength: prevState.sessionLength + 1,
            timerMinutes: prevState.sessionLength + 1,
          };
        } else {
          return {
            sessionLength: prevState.sessionLength + 1,
          };
        }
      });
    } else {
      return;
    }
  };

  onDecreaseSessionLength = () => {
    const { isPlay, isSession } = this.state;
    if (!isPlay) {
      if (isSession)
        this.setState({ isTimerChange: !this.state.isTimerChange });
      this.setState((prevState) => {
        if (isSession) {
          return {
            sessionLength: prevState.sessionLength - 1,
            timerMinutes: prevState.sessionLength - 1,
          };
        } else {
          return {
            sessionLength: prevState.sessionLength - 1,
          };
        }
      });
    } else {
      return;
    }
  };

  onUpdateTimerMinutes = () => {
    this.setState((prevState) => {
      return {
        timerMinutes: prevState.timerMinutes - 1,
      };
    });
  };

  onToggleInterval = () => {
    const { breakLength, sessionLength, isSession } = this.state;
    isSession
      ? this.setState({ timerMinutes: sessionLength })
      : this.setState({ timerMinutes: breakLength });
  };

  onResetTimer = () => {
    this.setState({ timerMinutes: this.state.sessionLength, isPlay: false });
  };

  render() {
    const {
      breakLength,
      sessionLength,
      timerMinutes,
      isSession,
      isPlay,
      isTimerChange,
    } = this.state;
    const {
      onIncreaseBreakLength,
      onDecreaseBreakLength,
      onIncreaseSessionLength,
      onDecreaseSessionLength,
      onUpdateTimerMinutes,
      onToggleInterval,
      onResetTimer,
      onUpdateSessionStatus,
      onUpdateIsPlayStatus,
    } = this;
    return (
      <div id="app-wrapper">
        <Row gutter={[48, 48]}>
          <Col span={24}>
            <Header />
          </Col>
          <Col span={12}>
            <Break
              breakLength={breakLength}
              increaseBreak={onIncreaseBreakLength}
              decreaseBreak={onDecreaseBreakLength}
            />
          </Col>
          <Col span={12}>
            <Session
              sessionLength={sessionLength}
              increaseSession={onIncreaseSessionLength}
              decreaseSession={onDecreaseSessionLength}
            />
          </Col>
          <Col span={24}>
            <Timer
              isSession={isSession}
              isPlay={isPlay}
              updateIsPlayStatus={onUpdateIsPlayStatus}
              updateSessionStatus={onUpdateSessionStatus}
              timerMinutes={timerMinutes}
              isTimerChange={isTimerChange}
              updateTimerMinutes={onUpdateTimerMinutes}
              toggleInterval={onToggleInterval}
              resetTimer={onResetTimer}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
