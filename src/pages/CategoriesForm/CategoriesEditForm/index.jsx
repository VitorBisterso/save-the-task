import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CategoriesForm from '..';

import CategoriesApi from '../../../redux/api/categories';

function CategoriesEditForm() {
    const dispatch = useDispatch();
    const { selectedCategory } = useSelector(state => state.categoriesReducer);

    const { id: categoryId } = useParams();

    useEffect(() => {
        dispatch(CategoriesApi.fetchCategoryById(categoryId));
    }, []);

    const hasCategory = Object.keys(selectedCategory).length !== 0;

    return (
        hasCategory && (
            <CategoriesForm
                pageTitle={`Editando a categoria "${selectedCategory.nome}"`}
                category={selectedCategory}
                onFormSubmit={values => console.log(values)}
            />
        )
    );
}

export default CategoriesEditForm;
