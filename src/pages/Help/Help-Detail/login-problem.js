import React, { Component } from "react";
import './style.scss';


export default class LoginProblem extends Component {
  
  render() {
    return (
      <div className="wrap">
        <div className="w1000">
          <p className="title">登录的时候提示“登录次数过多”怎么办？</p>
          <div className="row">
            <p>
                您好，如果您在登录的时候提示登录过于频繁，请选择手机验证码进行登录“，表示您在短时间内频繁进行登录，这是由于我们对用户的账号进行了安全登录的限制。您可以选择手机验证码进行登录即可。如果使用手机验证码进行登录仍提示“登录次数过多”，该表示您的账号登录受到限制，您可以在5分钟后，重新进登录即可。
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
