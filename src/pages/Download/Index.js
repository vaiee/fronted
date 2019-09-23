import React, { Component } from 'react';
import Slide from '../../components/SlideIcon'
import './style.scss'

const left_bg = require('./left_bg_1.png');

export default class Download extends Component {
  constructor(props){
    super();
    this.state = {
      left_bg
    }
  }
  render() {
    let {left_bg} = this.state;
    return (
      <div className="download-wrap">
        <div className="w1000">
          <div className="left">
            <img src={left_bg}/>
          </div>
          <div className="right">
            <p className="title1">V速智能加速器</p>
            <p className="title2">一键加速 全服畅玩</p>
            <p>支持操作系统：win7/win8/win10(不支持xp操作系统)</p>
            <a href="http://download.vaiee.com/package/20190923/v1.1.4.exe">立即下载</a>
          </div>
          <Slide/>
        </div>
      </div>
    )
  }
}
