import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import { getValidationSchema } from './formikData';

import Label from '../../components/Label';
import Input from '../../components/Input';
import Button from '../../components/Button';
import CheckBox from '../../components/CheckBox';

import { Container, FormField, SelectColor, Row } from './styles';

function CategoriesForm({ category, onFormSubmit, pageTitle }) {
    const formik = useFormik({
        initialValues: {
            nome: category.nome || '',
            cor: category.cor || '#000000',
            ativa: category.ativa || false,
        },
        validationSchema: getValidationSchema(),
        onSubmit: () => {
            onFormSubmit(formik.values);
        },
    });

    return (
        <Container onSubmit={formik.handleSubmit}>
            <Label text={pageTitle} size="25px" color="#000" bold />
            <FormField>
                <Label text="Nome" />
                <Input
                    name="nome"
                    value={formik.values.nome}
                    hasError={Boolean(
                        formik.touched.nome && formik.errors.nome
                    )}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.nome && formik.errors.nome && (
                    <Label text={formik.errors.nome} color="red" />
                )}
            </FormField>
            <Row>
                <FormField>
                    <Label text="Cor" />
                    <SelectColor
                        name="cor"
                        type="color"
                        value={formik.values.cor}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.cor && formik.errors.cor && (
                        <Label text={formik.errors.cor} color="red" />
                    )}
                </FormField>
                <FormField>
                    <CheckBox
                        name="ativa"
                        label="Ativa"
                        checked={formik.values.ativa}
                        onChange={formik.handleChange}
                    />
                </FormField>
            </Row>
            <Button text="Salvar" onClick={formik.handleSubmit} submit />
        </Container>
    );
}

CategoriesForm.propTypes = {
    category: PropTypes.shape({
        nome: PropTypes.string,
        cor: PropTypes.string,
        ativa: PropTypes.bool,
    }),
    onFormSubmit: PropTypes.func.isRequired,
    pageTitle: PropTypes.string.isRequired,
};

CategoriesForm.defaultProps = {
    category: {},
};

export default CategoriesForm;
