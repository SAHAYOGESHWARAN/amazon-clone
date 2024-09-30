import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listRelatedProducts } from '../actions/productActions';

const ProductRecommendations = ({ productId }) => {
    const dispatch = useDispatch();

    const relatedProducts = useSelector((state) => state.relatedProducts);
    const { products } = relatedProducts;

    useEffect(() => {
        dispatch(listRelatedProducts(productId));
    }, [dispatch, productId]);

    return (
        <div>
            <h3>Related Products</h3>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductRecommendations;
