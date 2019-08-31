import React, { Component } from "react";
import './style.scss';

let icon1 = require('../../assets/images/icon-1.png');
let icon2 = require('../../assets/images/icon-2.png');
let icon3 = require('../../assets/images/icon-3.png');
let icon4 = require('../../assets/images/icon-4.png');


export default class Question extends Component {
  
  render() {
    return (
      <div className="help-wrap">
      <div className="help-tabs-wrap">
        <div className="w1000">
          <p className="title">客服系统</p>
          <div className="row">
            <div className="col-1">
              <ul>
                <li><a href="/#/freshman">新手上路</a></li>
                <li><a href="/#/pc-client">PC客户端</a></li>
                <li><a href="/#/account">充值及账号问题</a></li>
                <li><a href="/#/question"  className="active">游戏相关问题</a></li>
              </ul>
            </div>
            <div className="col-3">
              <ul>
                <li>
                    <p className="title">游戏无法登录或者延迟过高？</p>
                    <p className="content_row">
                    您好，如果你在使用V速的过程，遇到游戏无法登录或者登录进入游戏延迟过高的情况，您可以选择退出游戏并停止加速，手动更换加速的节点或者手动选择其他加速模式进行加速，然后重启游戏。如果使用以上方法后，仍然无法登录游戏或者延迟过高，您可以联系我们客服帮您处理该问题。
                    </p>                
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
