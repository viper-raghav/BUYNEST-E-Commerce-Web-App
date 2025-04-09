'use client';

import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import products from '../mockdata/Products';
import ProductCartItem from './ProductCartItem';

function ProductsList() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        setProductList(products); 
    }, []);

    return (
        <div>
            <h2 className="text-xl font-bold text-gray-800 flex justify-between items-center mb-4">
                Featured
                <span>
                    <Button>
                        View All
                    </Button>
                </span>
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {productList.map((products, index) => (
                    <ProductCartItem products={products} key={index} />
                ))}
            </div>
        </div>
    );
}

export default ProductsList;