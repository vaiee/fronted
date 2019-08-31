import React, { Component } from "react";
import './style.scss';

let icon1 = require('../../assets/images/icon-1.png');
let icon2 = require('../../assets/images/icon-2.png');
let icon3 = require('../../assets/images/icon-3.png');
let icon4 = require('../../assets/images/icon-4.png');


export default class PCClient extends Component {
  
  render() {
    return (
      <div className="help-tabs-wrap">
        <div className="w1000">
          <p className="title">客服系统</p>
          <div className="row">
            <div className="col-1">
              <ul>
                <li><a href="/#/freshman">新手上路</a></li>
                <li><a href="/#/pc-client"  className="active">PC客户端</a></li>
                <li><a href="/#/account">充值及账号问题</a></li>
                <li><a href="/#/question">游戏相关问题</a></li>
              </ul>
            </div>
            <div className="col-3">
              <ul>
                <li>
                    <p className="title">1、登录的时候提示“登录次数过多”怎么办？</p>
                    <p className="content_row">
                    如果短时间频繁登录，登录会受限制，您可以在5分钟后，重新进登录即可。
                    </p>
                </li>
                <li></li>
                <li>
                    <p className="title">2、加速模式四的时候弹出虚拟网卡安装提示窗口怎么办？</p>
                    <p className="content_row">
                    使用模式四进行加速，电脑上必须安装虚拟网卡，如果弹出虚拟网卡安装提示窗口，点击确定即可。
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
