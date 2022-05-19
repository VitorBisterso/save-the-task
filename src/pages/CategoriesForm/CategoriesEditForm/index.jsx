import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import CategoriesApi from '../../../redux/api/categories';

import CategoriesForm from '..';

function CategoriesEditForm() {
    const { id: categoryId } = useParams();

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { selectedCategory } = useSelector(state => state.categoriesReducer);

    const [activeCategory, setActiveCategory] = useState({});

    useEffect(() => {
        dispatch(CategoriesApi.fetchCategoryById(categoryId));
    }, []);

    const usePrevious = value => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    };
    const previous = usePrevious({ selectedCategory });
    useEffect(() => {
        if (previous && previous.selectedCategory !== selectedCategory) {
            setActiveCategory(selectedCategory);
        }
    }, [selectedCategory]);

    const hasCategory = Object.keys(activeCategory).length !== 0;
    return (
        hasCategory && (
            <CategoriesForm
                pageTitle={`Editando a categoria "${activeCategory.nome}"`}
                category={activeCategory}
                onFormSubmit={values => {
                    dispatch(
                        CategoriesApi.updateCategory({
                            id: activeCategory.id,
                            ...values,
                        })
                    );
                    navigate('/categorias');
                }}
            />
        )
    );
}

export default CategoriesEditForm;
