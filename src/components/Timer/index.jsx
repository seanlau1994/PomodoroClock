import React, { Component } from "react";
import { Card, Button } from "antd";
import {
  CaretRightOutlined,
  PauseOutlined,
  RetweetOutlined,
} from "@ant-design/icons";

export default class Timer extends Component {
  state = {
    seconds: 0,
    intervalId: 0,
  };

  audio = new Audio("https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav")

  playPause = () => {
    const { isPlay } = this.props;
    const {startTimer,stopTimer} = this;
    this.props.updateIsPlayStatus();
    if(!isPlay){
      startTimer();
    }else{
      stopTimer();
    }
  };

  componentDidUpdate(prevProps) {
    const {isSession,toggleInterval,updateTimerMinutes,isTimerChange} = this.props;
    if(isSession !== prevProps.isSession){
      toggleInterval();
      updateTimerMinutes();
    }

    if(isTimerChange !== prevProps.isTimerChange){
      this.setState({seconds:0})
    }

  }

  countDown = () => {
    const { seconds } = this.state;
    const {timerMinutes,updateTimerMinutes,updateSessionStatus} = this.props
    switch (seconds) {
      case 0:
        if(timerMinutes === 0) {
          this.audio.play();
          updateSessionStatus();
        }
        updateTimerMinutes();
        this.setState({ seconds: 59 });
        break;
      default:
        this.setState((prevState) => {
          return {
            seconds: prevState.seconds - 1,
          };
        });
        break;
    }
  };

  startTimer = () => {
    let intervalId = setInterval(this.countDown, 1000);
    this.setState({ intervalId: intervalId });
  }

  stopTimer = () => {
    clearInterval(this.state.intervalId);
  }

  resetTimer = () => {
    this.stopTimer();
    this.setState({seconds:0});
    this.props.resetTimer();
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  render() {
    const { seconds } = this.state;
    const { timerMinutes, isSession,isPlay } = this.props;
    return (
      <Card id="timer-label" title={isSession ? "Session" : "Break"}>
        <h2 id="time-left" style = {timerMinutes < 1 ? {color:"red"}:{color:"black"}}>
          {timerMinutes < 10 ? "0" + timerMinutes : timerMinutes} :
          {seconds === 0 ? "00" : seconds < 10 ? "0" + seconds : seconds}
        </h2>
        <Button
          id="start_stop"
          type="primary"
          shape="round"
          onClick={this.playPause}
        >
          {isPlay ? <PauseOutlined /> : <CaretRightOutlined />}
        </Button>
        &nbsp;
        <Button
          id="reset"
          type="primary"
          shape="round"
          icon={<RetweetOutlined />}
          onClick={this.resetTimer}
        />
      </Card>
    );
  }
}
