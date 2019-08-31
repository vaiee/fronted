import React, { Component } from "react";
import './style.scss';

let icon1 = require('../../assets/images/icon-1.png');
let icon2 = require('../../assets/images/icon-2.png');
let icon3 = require('../../assets/images/icon-3.png');
let icon4 = require('../../assets/images/icon-4.png');


export default class Account  extends Component {
  
  render() {
    return (
        <div className="help-tabs-wrap">
          <div className="w1000">
            <p className="title">客服系统</p>
            <div className="row">
              <div className="col-1">
                <ul>
                  <li><a href="/#/freshman">新手上路</a></li>
                  <li><a href="/#/pc-client">PC客户端</a></li>
                  <li><a href="/#/account"  className="active">充值及账号问题</a></li>
                  <li><a href="/#/question">游戏相关问题</a></li>
                </ul>
              </div>
              <div className="col-3">
                <ul>
                  <li>
                   <p className="title">充值及账号问题</p>
                    <p className="content_row">
                    如果您遇到充值后会员时间没有更新或者无法充值等任何充值相关问题，请您通过客服中心联系客服进行处理。
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
