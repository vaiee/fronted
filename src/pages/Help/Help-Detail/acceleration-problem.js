import React, { Component } from "react";
import './style.scss';


export default class AccelerationProblem extends Component {
  
  render() {
    return (
      <div className="wrap">
        <div className="w1000">
          <p className="title">如何选择节点和加速模式？</p>
          <div className="row">
            <p>
                登录V速智能加速器PC客户端，点击「加速设置」可以选择节点和加速模式。建议优先选择延迟最低的节点进行加速。加速模式推荐模式一和模式四。
            </p>
            <p> 温馨提示：加速模式四必须安装虚拟网卡，否则无法加速。</p>
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
