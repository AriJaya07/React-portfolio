import React from 'react';
import './productList.css';
import Product from '../product/Product';
import Product2 from '../product/Product2';
import Product3 from '../product/Product3';
import Product4 from '../product/Product4';
import Product5 from '../product/Product5';
import Product6 from '../product/Product6';


const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">My Portfolio</h1>
            <p className="pl-desc">
                It is a creative portfolio that your work has been waiting for.
                Beautiful homes, stunning portfolio styles & a whole lot more awaits inside.
            </p>
        </div> 
        <div className="pl-list">
                <Product  />
                <Product2  />
                <Product3 />
                <Product4 />
                <Product5 />
                <Product6 />
        </div>
        <div>
            <a href="https://github.com/AriJaya07">
                <button >View Search Code</button>
            </a>
        </div>
    </div>
   
  )
}

export default ProductList;