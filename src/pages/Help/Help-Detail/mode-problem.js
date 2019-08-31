import React, { Component } from "react";
import './style.scss';


export default class ModeProblem extends Component {
  
  render() {
    return (
      <div className="wrap">
        <div className="w1000">
          <p className="title">为什么模式二无法加速？</p>
          <div className="row">
            <p>
                您好，模式二第一次使用的时候，需要修正注册表，修正注册表后，需要重启电脑后才能生效。如果您在使用过程中，发现模式二无法加速，您可以选择其他模式进行加速。
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
