import React, { Component } from "react";
import './style.scss';


export default class PasswordProblem extends Component {
  
  render() {
    return (
      <div className="wrap">
        <div className="w1000">
          <p className="title">如何重置密码？</p>
          <div className="row">
            <p>
                请登录www.vaiee.com点击「登录」，如何点击‘忘记密码？’，按照提示填写相应的资料进行密码重置。您还可以通过V速智能加速器客户端底部的「忘记密码」进行密码重置。
            </p>
            <p>温馨提示：如果忘记了密码，通过手机验证码也可以登录哦。</p>
          </div>
          <div className="card-box">
            <div></div>
            <div></div>
          </div>
          <div className="card-box">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}
