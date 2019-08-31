import React, { Component } from "react";
let icon_speed = require("../../assets/images/icon_speed.png");
let icon_node = require("../../assets/images/icon_node.png");
let icon_setting = require("../../assets/images/icon_setting.png");
let img_home = require("../../assets/images/img_home_1.png");
import "./style.scss";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-wrap">
        <div className="banner">
          <div className="w1000">
            <div className="text">
              <p className="title1">
               金融级线路，超快加速，
                <br />
                超低延迟
              </p>
              <p>一键加速，全球畅玩</p>
              <a href="/#/download">立即下载体验</a>
            </div>
            <div className="img">
                <img src={img_home}/>
                <div className="icon icon1"></div>
                <div className="icon icon2"></div>
                <div className="icon icon3"></div>
            </div>
          </div>
        </div>
        <div className="description">
          <p className="title1">V速智能加速器，全新智能节点分配方案</p>
          <ul className="w1000">
            <li>
              <img src={icon_speed} />
              <p className="title">极致的游戏体验</p>
              <p>
                金融级线路，99%的稳定性，给您电竞级游戏体验
              </p>
            </li>
            <li>
              <img src={icon_node} />
              <p className="title">专业的技术团队</p>
              <p>
              	7*24小时技术保障服务，为广大游戏玩家保驾护航
              </p>
            </li>
            <li>
              <img src={icon_setting} />
              <p className="title">智能的分配策略</p>
              <p>
                自动分配延迟最低节点，智能选择最优路线
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
