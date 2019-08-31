import React, { Component } from "react";
import './style.scss';

let icon1 = require('../../assets/images/icon-1.png');
let icon2 = require('../../assets/images/icon-2.png');
let icon3 = require('../../assets/images/icon-3.png');
let icon4 = require('../../assets/images/icon-4.png');


export default class Freshman extends Component {
  
  render() {
    return (
      <div className="help-tabs-wrap">
        <div className="w1000">
          <p className="title">客服系统</p>
          <div className="row">
            <div className="col-1">
              <ul>
                <li><a href="/#/freshman"  className="active">新手上路</a></li>
                <li><a href="/#/pc-client">PC客户端</a></li>
                <li><a href="/#/account">充值及账号问题</a></li>
                <li><a href="/#/question">游戏相关问题</a></li>
              </ul>
            </div>
            <div className="col-3">
              <ul>
                <li>
                    <p className="title">1、如何注册账号？</p>
                    <p className="content_row">
                    请登录www.vaiee.com点击「免费注册」，按照提示填写相应的资料，完成注册后，即可获得免费会员体验时长。您还可以通过V速智能加速器客户端底部的「注册账号」进行注册。 当前仅支持手机号码注册。
                    </p> 
                </li>
                <li>
                    <p className="title">2、如何选择节点和加速模式？</p>
                    <p className="content_row">
                    登录V速智能加速器PC客户端，点击「加速设置」可以选择节点和加速模式。建议优先选择延迟最低的节点进行加速。加速模式推荐模式一和模式四。
                    </p>
                </li>
                <li>
                    <p className="title">3、如何重置密码？</p>
                    <p className="content_row">
                    请登录www.vaiee.com点击「登录」，如何点击‘忘记密码？’，按照提示填写相应的资料进行密码重置。您还可以通过V速智能加速器客户端底部的「忘记密码」进行密码重置。
                    </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
