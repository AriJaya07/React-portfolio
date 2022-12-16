import React from 'react'
import './product.css'
import Web from '../../img/Webapp.png';

function Product2(img, link) {
  return (
    <div className="p">
        <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
        </div>
        <a href="/" target="_blank" rel="noreferrer">
            <img src={Web} alt="" className="p-img"/>
        </a>
    </div>
  )
}

export default Product2