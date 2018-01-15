import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCategory } from '../../actions/categoryActions';
import './root.scss';
import ProductList from '../ProductList/productList.js';

class Root extends Component {
    componentDidMount() {
        this.props.dispatch(loadCategory());
    }

    render() {
        /*
         * You can get the category data from the category prop:
         * const { category } = this.props;
         */
        const products = this.props.category.get('products');
        return products ?
            <div>
                <ProductList list = { products } />
            </div>
            :
            <div>Loading..</div>;
    }
}

function mapStateToProps(state) {
    const { categoryReducers } = state;

    return {
        category: categoryReducers.get('category')
    };
}

export default connect(mapStateToProps)(Root);
