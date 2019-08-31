import React, { Component } from "react";
import './style.scss';


export default class GameProblem extends Component {
  
  render() {
    return (
      <div className="wrap">
        <div className="w1000">
          <p className="title">游戏无法登录或者延迟过高？</p>
          <div className="row">
            <p>
                您好，如果你在使用V速的过程，遇到游戏无法登录或者登录进入游戏延迟过高的情况，您可以选择退出游戏并停止加速，手动更换加速的节点或者手动选择其他加速模式进行加速，然后重启游戏。如果使用以上方法后，仍然无法登录游戏或者延迟过高，您可以联系我们客服帮您处理该问题。
            </p>
          </div>
          <div className="card-box">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="card-box">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}
