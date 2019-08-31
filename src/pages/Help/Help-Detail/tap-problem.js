import React, { Component } from "react";
import './style.scss';


export default class TapProblem extends Component {
  
  render() {
    return (
      <div className="wrap">
        <div className="w1000">
          <p className="title">加速模式四的时候弹出虚拟网卡安装提示窗口怎么办？</p>
          <div className="row">
            <p>
                您好，如果您使用模式四进行加速，电脑上必须安装虚拟网卡，如果弹出虚拟网卡安装提示窗口，点击确定即可。如果您在加速完成后，不想在电脑上保留虚拟网卡，您可以选择客户端的修复工具，“卸载虚拟网卡”，进行卸载。
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
