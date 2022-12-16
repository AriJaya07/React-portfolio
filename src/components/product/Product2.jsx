import React from 'react'
import './product.css'
import Disney from '../../img/disney.png';

function Product2(img, link) {
  return (
    <div className="p">
        <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
        </div>
        <a href="https://ari-disneyclone-a1706.web.app" target="_blank" rel="noreferrer">
            <img src={Disney} alt="" className="p-img"/>
        </a>
    </div>
  )
}

export default Product2