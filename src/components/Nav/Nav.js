import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import service from "../../assets/scripts/http";
import './style.scss';
var cookie = require('licia/cookie')
var EventEmitter = require('events').EventEmitter;
let emitter = new EventEmitter();

let iconOpen = require('../../assets/images/iconOpen.png');
let icon = require('../../assets/images/icon.png');

export default class Nav extends Component {
  state = {
    hadLogin: false,
    username: cookie.get('username') || "",
    uuid: cookie.get('interim') || "",
    interim: cookie.get('uuid') || "",
    value: 'basketball',
    expireTime: "0000/00/00"
  }
  componentWillMount() {
    const {username, uuid, interim} = this.state;
    if(username.length > 0 && uuid.length > 0 &&interim.length > 0) {
      this.setState({hadLogin: true});
    }else{
     this.setState({hadLogin: false});
    }
    let jwt = cookie.get('json-web-token');
    console.log("jwt:", jwt);
    if(jwt) {
      service.defaults.headers.common['Json-Web-Token'] = jwt;
      service.get('https://defray.vaiee.com/member/info.do').then((res) => {
        if(res.status == 200){
          cookie.set('json-web-token', res.headers['json-web-token'])
        }
        if (res.status == 200 && res.data.code == 200) {
          this.setState({expireTime: moment(res.data.data.deadline * 1000).format("YYYY-MM-DD")}); // timestamp

          return res.data.data.content;
        }
      })
    } else {
      console.log("jwt is empty");
      return;
    }
  }

  handlerLogut(){
    cookie.set('username', "");
    cookie.set('interim', "");
    cookie.set('uuid', "");
    this.setState({hadLogin: false});
    window.location.href = '/#/';
  }
  render() {
    const {username, hadLogin, expireTime} = this.state;
    let hash = window.location.hash;
    let route = hash.substr(2);
    let routes = ['price', 'download', 'help'];
    let reg = /[\/|\?\#]/;
    let showNav = true;
    if(reg.test(route)) {
      let _match = route.match(reg)[0];
      route = route.split(_match)[0];
    }
    if(routes.includes(route) || route == '') {
      showNav = true
    }else{
      showNav = false;
    }

    return (
      <div className="headder">
        <div className="w1000">
          <div className="logo">
            <a href="/"> V速智能加速器</a>
          </div>
          <div className="right">
            {
              showNav ?
              <ul className="nav-box">
                <li className={route == '' ? 'active': ''}><Link to="/">首页</Link></li>
                <li className={route == 'price' ? 'active': ''}><Link to="/price">套餐</Link></li>
                <li className={route == 'download' ? 'active': ''}><Link to="/download">下载</Link></li>
                <li className={route == 'help' ? 'active': ''}><Link to="/help">帮助 </Link></li>
              </ul> : null
            }
            {
              hadLogin ?
              <div className="userAct">
                <div className="icon-box">
                  <img src={icon} className="icon" />
                  <span className="username">{username}</span>
                  <img src={iconOpen} className="iconOpen" />
                  <span className="expire">{expireTime} 过期</span>
                </div>
                <div className="dropdownMenu">
                  <ul nz-menu>
                    <li nz-menu-item><Link to="/reset">修改密码</Link></li>
                    <li nz-menu-item onClick={()=>{this.handlerLogut()}}>退出</li>
                  </ul>
                </div>

              </div>
              :
              <div className="buttons">
                {route != 'login' ? <Link className="login" to="/login">登录</Link> : null}
                {route != 'register' ? <Link className="register" to="/register">免费注册</Link> : null}
              </div>
            }
          </div>

        </div>
      </div>
    )
  }
}