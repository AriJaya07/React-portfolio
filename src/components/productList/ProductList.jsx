import React from 'react';
import './productList.css';
import Product from '../product/Product';


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
                <Product />
            </div>
            <div>
                <a href="https://github.com/AriJaya07" target='_blank' rel="noreferrer">
                    <button style={{ borderRadius: '15px'}}>View source code</button>
                </a>
            </div>
        </div>

    )
}

export default ProductList;