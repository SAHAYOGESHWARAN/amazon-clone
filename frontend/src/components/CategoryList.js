import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCategories } from '../actions/categoryActions';

const CategoryList = () => {
    const dispatch = useDispatch();

    const categoryList = useSelector((state) => state.categoryList);
    const { categories } = categoryList;

    useEffect(() => {
        dispatch(listCategories());
    }, [dispatch]);

    return (
        <div>
            <h2>Product Categories</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category._id}>
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
