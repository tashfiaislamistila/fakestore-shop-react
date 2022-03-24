import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProducts.css'

const AllProducts = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json));
    }, [products]);
    console.log(products);
    return (
        <div>
            <h1>All Products</h1>
            <div className="row container">
                {
                    products.map((pd) => (<SingleProduct key={pd.id} product={pd}></SingleProduct>)
                    )}

            </div>
        </div>
    );
};

export default AllProducts;