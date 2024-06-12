import React from 'react'
import './product.css'
import news from '../../img/news.png';
import star from '../../img/star.png';
import point from '../../img/starpoint.png';
import bottle from '../../img/bottle.png';
import rosalitas from '../../img/rosalitas.png';
import portfolio from '../../img/portfo.png'

function Product(img, link) {
  return (
    <>
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href="https://apps.apple.com/id/app/bali-news/id6504162210" target="_blank" rel="noreferrer">
          <img src={news} alt="" className="p-img" />
        </a>
      </div>
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href="https://www.starworksglobal.com" target="_blank" rel="noreferrer">
          <img src={star} alt="" className="p-img" />
        </a>
      </div>
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href="https://starpoints.io" target="_blank" rel="noreferrer">
          <img src={point} alt="" className="p-img" />
        </a>
      </div>
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href="https://connoisseursclub.org/homepage" target="_blank" rel="noreferrer">
          <img src={bottle} alt="" className="p-img" />
        </a>
      </div>
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href="https://www.rosalitasbali.com" target="_blank" rel="noreferrer">
          <img src={rosalitas} alt="" className="p-img" />
        </a>
      </div>
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href="https://ari-portfolio.web.app" target="_blank" rel="noreferrer">
          <img src={portfolio} alt="" className="p-img" />
        </a>
      </div>
    </>
  )
}

export default Product