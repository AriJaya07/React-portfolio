import React from 'react'
import './product.css'
import Twitter from '../../img/disney.png';

function Product(img, link) {
  return (
    <div className="p">
        <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
        </div>
        <a href="https://ari-disneyclone-a1706.web.app" target="_blank" rel="noreferrer">
            <img src={Twitter} alt="" className="p-img"/>
        </a>
    </div>
  )
}

export default Product