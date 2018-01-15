import React from 'react';

const Product = ({product}) =>
    <li>
        <img />
        <h2>{ product.get('name') }</h2>
        <p>{ product.get('shortDescription') }</p>
        <h4>{ product.get('retailerCount') } butiker</h4>
        <h2>fr. { product.get('localMinPrice').get('value')}</h2>
        <a href={ product.get('comparePricesLink') }>Jämför</a>
    </li>;

export default Product;
