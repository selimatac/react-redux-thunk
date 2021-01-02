import React from 'react'
import CategorySidebar from '../component/CategorySidebar'
import ProductList from '../component/ProductList'
import CategoryTop from '../component/CategoryTop'

const ProductCategory = (props) => {
    return (

        <ProductList matchParams={props.match.params} />

    )
}
export default ProductCategory