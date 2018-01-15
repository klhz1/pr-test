import React from 'react';
import './product.scss';

const Product = ({product}) =>
    <li className = "product">
        <img className = "product-img" />
        <a className = "product-info-block">
            <h2 className = "product-title">{ product.get('name') }</h2>
            <p className = "product-text">{ product.get('shortDescription') }</p>
            <div className = "product-price-block">
                <h4 className = "product-retailer-count">{ product.get('retailerCount') } butiker</h4>
                <h2 className = "product-price-from">fr. { product.get('localMinPrice').get('value')}</h2>
            </div>
        </a>
        <div  className = "product-link-compare" href = { product.get('comparePricesLink') }>Jämför pris</div>
        
    </li>;

export default Product;
