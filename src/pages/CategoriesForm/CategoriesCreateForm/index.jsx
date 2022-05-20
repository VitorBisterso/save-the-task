import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CategoriesApi from '../../../redux/api/categories';

import CategoriesForm from '..';

function CategoriesCreateForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <CategoriesForm
            pageTitle="Criando uma categoria"
            category={{}}
            onFormSubmit={values => {
                dispatch(
                    CategoriesApi.createCategory({
                        ...values,
                    })
                );
                navigate('/categorias');
            }}
        />
    );
}

export default CategoriesCreateForm;
