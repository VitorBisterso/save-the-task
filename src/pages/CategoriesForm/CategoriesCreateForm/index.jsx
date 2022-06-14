import React from 'react';
import { useDispatch } from 'react-redux';

import CategoriesApi from '../../../redux/api/categories';

import CategoriesForm from '..';

function CategoriesCreateForm() {
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
            }}
        />
    );
}

export default CategoriesCreateForm;
