import React from 'react'
import './product.css'
import Portfolio from '../../img/Port-r.png';

function Product2(img, link) {
  return (
    <div className="p">
        <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
        </div>
        <a href="/" target="_blank" rel="noreferrer">
            <img src={Portfolio} alt="" className="p-img"/>
        </a>
    </div>
  )
}

export default Product2