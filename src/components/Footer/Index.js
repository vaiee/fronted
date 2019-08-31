import React, { Component } from "react";
import "./style.scss";

// let qqImage = require("./images/qq_group.png");
// let wechatImage = require("./images/wechat_public.png");

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="w1000">
          <ul>
            <li>
              <a href="/#/collaborate">商务合作</a>
            </li>
            <li>
              <a href="/#/help">帮助中心</a>
            </li>
            <li>
              <a href="https://jq.qq.com/?_wv=1027&k=5vhDFJ5">官方QQ群</a>
            </li>
          </ul>
          <div className="cryp">
            <a>蜀ICP备19015164号</a> ©2019-2019 成都奋楫科技有限公司 版权所有
          </div>
        </div>
      </div>
    );
  }
}
