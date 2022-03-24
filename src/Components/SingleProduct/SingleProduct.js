import React from 'react';
import './SingleProduct.css'

const SingleProduct = (props) => {
    console.log(props.product);
    return (
        <div className='col-md-4'>
            <div className="card p-2 border">
                <h1>{props.product.title.slice(0, 10)}</h1>

            </div>

        </div>
    );
};

export default SingleProduct;