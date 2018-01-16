import React from 'react';
import './product.scss';
import { getProductImageLink } from '../../../app/utils/product.js';

const Product = ({product}) =>
    <li className = "product">
        <img className = "product-img" src = {getProductImageLink(product)} />
        <a className = "product-info-block">
            <h3 className = "product-title">{ product.get('name') }</h3>
            <p className = "product-text">{ product.get('shortDescription') }</p>
            <div className = "product-price-block">
                <span className = "product-retailer-count">{ product.get('retailerCount') } butiker</span>
                <span className = "product-price-from">fr. { product.get('localMinPrice').get('value')}</span>
            </div>
        </a>
        <div  className = "product-link-compare" href = { product.get('comparePricesLink') }>Jämför pris</div>

    </li>;

export default Product;
