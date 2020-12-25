import React from 'react'
import ProductSA from '../comonents/ProductSA';
import data from '../data';

export default function HomeScreen() {
    return (
        <div>
            <div className="row center">
                {
                    data.products.map(product => (

                        <ProductSA key={product._id} product={product}></ProductSA>
                    ))
                }

            </div>
        </div>
    );
}
