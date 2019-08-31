import React, { Component } from "react";
import './style.scss';


export default class AccountProblem extends Component {
  
  render() {
    return (
      <div className="wrap">
        <div className="w1000">
          <p className="title">如何注册账号？</p>
          <div className="row">
            <p>
                请登录www.vaiee.com点击「免费注册」，按照提示填写相应的资料，完成注册后，即可获得免费会员体验时长。您还可以通过V速智能加速器客户端底部的「注册账号」进行注册。
                当前仅支持手机号码注册。
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
