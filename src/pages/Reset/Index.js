import React, { Component } from 'react';
import JSEncrypt from 'JSEncrypt';
import base64url from 'base64url';
import service from "../../assets/scripts/http";
import {_Regex} from '../../assets/scripts/regex';
import '../../assets/styles/common.scss';
import './style.scss';
var cookie = require('licia/cookie');

export default class Reset extends Component {
  constructor(){
    super();
  }

  state = {
    step: 0,      // 0 验证码阶段   1 重置密码阶段
    SMScount: 0,
    username: "",
    captcha: "",
    username_captcha_err: '',
    captcha_err: '',
    password: "",
    passwordAgain: "",
    timer: {},
    hadReset: false
  }
  // 点击下一步
  handlerNext(){
    let {captcha} = this.state;
    if(_Regex.captcha.test(captcha) == false) {
        this.setState({captcha_err: '验证码格式错误'})
        return;
      }

    this.setState({
      step: 1,
      SMScount: 0,
    })
    clearTimeout(this.state.timer);
  }
  // 获取用户名
  handlerValueChange(event, str){
    let value = event.target.value;
    this.setState({[str]: value});
  }
  // 点击发送验证码
  handlerSendSMS() {
    let { SMScount, username } = this.state;
    if (SMScount > 0) return false;
    if(username.length < 1) {
      this.setState({username_captcha_err: '请输入您的手机号码'})
      return false;
    }
    if(_Regex.username.test(username) == false) {
      this.setState({username_captcha_err: '请输入正确的手机号码'})
      return false;
    }

    this.setState({ SMScount: 60 });
    this.handlerCaptchaCount(59);
    service.post("captcha/phone.do", { username }).then((res) => {
      var data = res.data && res.data.data ;
      if(res.status == 200){
        cookie.set('json-web-token', res.headers['json-web-token'])
      }
    });;
  }
  // 验证码倒计时
  handlerCaptchaCount(time) {
    if (time < 0) return false;
    clearTimeout(this.state.timer);
    this.state.timer = setTimeout(() => {
      this.setState({ SMScount: time });
      this.handlerCaptchaCount(time - 1);
    }, 1000);
  }
  // 清除错误
  handlerClearError(err){
    err && this.setState({[err]: ''})
  }
  handlerResetPassword(){
    let {username, password,captcha, suspicious} = this.state;
    if(username.length < 1) {
      this.setState({username_captcha_err: '请输入您的手机号码'})
      return false;
    }
    if(password.length < 1) {
      this.setState({password_err: '请输入密码'})
      return false;
    }
    if(_Regex.username.test(username) == false) {
      this.setState({username_captcha_err: '请输入正确的手机号码'})
      return false;
    }
    if(_Regex.password.test(password) == false) {
      this.setState({password_err: '密码格式错误（8-16位至少包含一个英文或特殊字符串密码）'})
      if(password !== passwordAgain){
        this.setState({password_err: '两次密码输入不一致'})
        return false;
      }
      return false;
    }
    if(suspicious == 1){
      if(_Regex.captcha.test(captcha) == false) {
        this.setState({captcha_err: '验证码格式错误'})
        return false;
      }
    }
    
    service.get('certificate/publickey.do').then((res) => {
      if(res.status == 200){
        cookie.set('json-web-token', res.headers['json-web-token'])
      }
      if (res.status == 200 && res.data.code == 200) {
        return res.data.data.content;
      }
    }).then((content) => {
      let encrypt = new JSEncrypt();
      encrypt.setPublicKey(content);
      let cipher = base64url.fromBase64(encrypt.encrypt(password));
      cipher = cipher + '===='.substr(0, 4 - cipher.length % 4)
      service.post('retrieve/cellphone.do', { username,  password: cipher, client: 'web', captcha}).then((res) => {
        var data = res.data && res.data.data ;
        if(res.status == 200){
          cookie.set('json-web-token', res.headers['json-web-token'])
        }
        if (res.status == 200 && res.data.code == 200) {
          cookie.set('username', username);
          cookie.set('interim', data.interim);
          cookie.set('uuid', data.uuid);
          alert('修改成功');
          this.setState({hadReset: true})
        }else{
          console.log(res.data.info);
          //alert(res.data.info);
          this.setState({errmsg: res.data.info, suspicious: data ? data.suspicious: 0})
        }
      })
    })
  }

  render() {
    let {step, SMScount,username_captcha_err, username, hadReset, passwordAgain, password, captcha, errmsg} = this.state;
    return (
      <div className="reset-wrap">
        {
          step == 0 ? (<div className="c1">
            <h1 className="title">填写手机号码</h1>
            <div className="form">
              <div className="form-group">
                <input type="tel" className="form-control" placeholder="手机号码" name="username"
                  onChange={(event) =>{this.handlerValueChange(event, 'username')}}
                  onFocus={()=>{this.handlerClearError('username_captcha_err')}}/>
                {username_captcha_err ?<span className="pp">{username_captcha_err}</span> : null}
                {/* <span className="pp">请输入您的手机号码</span> */}
              </div>
              <div className="form-group">
                <div className="vcode">
                  <input type="text" className="form-control" placeholder="验证码"  onChange={(event) =>{this.handlerValueChange(event, 'captcha')}}/>
                  {
                    SMScount > 0 ? (<div className="getVcode disabled">{`(${SMScount}s)后刷新`}</div>) : (<div onClick={() => this.handlerSendSMS()} className="getVcode">免费获取验证码</div>)
                  }

                </div>
                {/* <span className="pp">请输入您的手机号码</span> */}
              </div>
            </div>
            <button className="register-btn" onClick={()=>{this.handlerNext()}} disabled={captcha.length !== 6}>下一步</button>
          </div>) : (<div className="c2">
            <h1 className="title">设置新密码</h1>
              <div className="form">
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="新密码" name="password" value={password} onChange={(event) =>{this.handlerValueChange(event, 'password')}}/>
                  {/* <span className="pp">请输入您的密码</span> */}
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="再次确认新密码" name="passwordAgain" value={passwordAgain} onChange={(event) =>{this.handlerValueChange(event, 'passwordAgain')}} />
                  {/* <span className="pp">请输入您的密码</span> */}
                </div>
              </div>
              <p className="errmsg">{errmsg? errmsg: ''}</p>
              {!hadReset ? 
              <div className="register-btn" onClick={()=>{this.handlerResetPassword()}}>修改密码</div>
              : 
              <div className="register-btn" onclick={window.open('/#/login')}>登陆会员中心</div>
              }
          </div>)
        }
      </div>
    )
  }
}