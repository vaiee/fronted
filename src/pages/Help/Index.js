import React, { Component } from "react";
import './style.scss';

let icon1 = require('../../assets/images/icon-1.png');
let icon2 = require('../../assets/images/icon-2.png');
let icon3 = require('../../assets/images/icon-3.png');
let icon4 = require('../../assets/images/icon-4.png');


export default class UserInfo extends Component {
  
  render() {
    return (
      <div className="help-wrap">
        <div className="help-wrap-nav">
          <div className="top">
            <p className="title1">用心服务每一位玩家</p>
            <p className="title2">V速智能加速器客服系统</p>
            <p>如果您在使用V速过程中遇到任何问题，欢迎向我们咨询</p>
            <a href="https://jq.qq.com/?_wv=1027&k=5vhDFJ5" className="onlineService">在线客服</a>
          </div>
          <div className="other">
            <ul className="w1000">
              <li>
                <div className="icon">
                  <img src={icon1} />
                </div>
                <a href="/#/freshman" className="sysbtn">
                    <p className="name">新手上路</p>
                  </a>
                <p>V速加速使用教程、如何选择节点等问题</p>
              </li>
              <li>
                  <div className="icon">
                  <img src={icon2} />
                  </div>
                  <a href="/#/pc-client" className="sysbtn">
                    <p className="name">PC客户端</p>
                  </a>
                  <p>客户端安装问题、客户端加速等问题</p>
              </li>
              <li>
                <div className="icon">
                <img src={icon3} />
                </div>
                  <a href="/#/account" className="sysbtn">
                    <p className="name">充值及账号问题</p>
                  </a>
                <p>充值后会员时间没有增加、账号无法登陆等问题</p>
              </li>
              <li>
                <div className="icon">
                <img src={icon4} />
                </div>
                  <a href="/#/question" className="sysbtn">
                    <p className="name">游戏相关问题</p>
                  </a>
                <p>游戏无法登陆、游戏报错等问题</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="helop-tabs">
        </div>
      </div>
    );
  }
}
