import React from 'react';
import Product from '../Product/product.js';

const ProductList = ({list}) =>
  <div>
        <ul>
            { list.map(product =>
                <Product  key = { product.get('id') } product = { product } />
            )}
        </ul>
  </div>;

export default ProductList;
