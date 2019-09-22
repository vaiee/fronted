import React, { Component } from 'react';
import './style.scss';

export default class Price extends Component {
    handleMouseOver(index){
      for(let i=1;i<=3;i++){
        if(i==index){
            if( document.getElementById("price_item"+index)){
                document.getElementById("price_item"+index).classList.add("active");
            }
        }else{
            if( document.getElementById("price_item"+i)){
                document.getElementById("price_item"+i).classList.remove("active");
            }
        }
      }
    }
    handleMouseOut(index){

    }

    render() {
    return (
      <div className="price-wrap">
        <h1>特惠充值</h1>
        <div className="items">
          {/* 套餐1 */}
          <div className="item item1 active" id="price_item1" onMouseOver={() => { this.handleMouseOver(1);}}>
            <p className="name">包月套餐</p>
            <p className="price">
              <span className="small">￥</span>
              <span>28</span>
            </p>
            <div className="tab">原价45元</div>
            <p className="desc">有效期30天<br />折合0.93元/天</p>
            <a href="/#/pay/monthly" className="pay">立即充值</a>
          </div>
          {/* 套餐2 */}
          <div className="item item1" id="price_item2" onMouseOver={() => { this.handleMouseOver(2);}}>
            <p className="name" >包季套餐</p>
            <p className="price">
              <span className="small">￥</span>
              <span>69</span>
            </p>
            <div className="tab">原价135元</div>
            <p className="desc">有效期90天<br />折合0.77元/天</p>
            <a href="/#/pay/season" className="pay" >立即充值</a>
          </div>
          {/* 套餐3 */}
          <div className="item item1" id="price_item3" onMouseOver={() => { this.handleMouseOver(3);}}>
            <p className="name">包年套餐</p>
            <p className="price">
              <span className="small">￥</span>
              <span>216</span>
            </p>
            <div className="tab">原价450元</div>
            <p className="desc">有效期360天<br />折合0.6元/天</p>
            <a href="/#/pay/yearly" className="pay">立即充值</a>
          </div>
        </div>
      </div>
    )
  }
}
