import React from 'react';
import './productList.scss';
import Product from '../Product/product.js';

const ProductList = ({list}) =>
  <div>
        <ul className="product-list-cont">
            { list.map(product =>
                <Product  key = { product.get('id') } product = { product } />
            )}
        </ul>
  </div>;

export default ProductList;
