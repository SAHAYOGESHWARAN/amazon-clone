import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductsByCategory } from '../actions/productActions';

const CategoryPage = ({ match }) => {
    const categoryId = match.params.id;
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { products } = productList;

    useEffect(() => {
        dispatch(listProductsByCategory(categoryId));
    }, [dispatch, categoryId]);

    return (
        <div>
            <h2>Products in this Category</h2>
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

export default CategoryPage;
