import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesApi from '../../redux/api/categories';

import Utils from '../../utils';

import { getValidationSchema } from './formikData';

import Label from '../../components/Label';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TextArea from '../../components/TextArea';
import CheckBox from '../../components/CheckBox';
import Select from '../../components/Select';

import { Container, Row, FormColumn, FormField } from './styles';

function TasksForm({ task, onFormSubmit, pageTitle }) {
    const dispatch = useDispatch();
    const { categories, isLoading } = useSelector(
        state => state.categoriesReducer
    );

    useEffect(() => {
        dispatch(CategoriesApi.fetchAllCategories());
    }, []);

    const mapCategories = () =>
        categories.map(category => ({
            label: category.nome,
            value: category.nome,
        }));

    const getCategoryByName = name =>
        categories.find(category => category.nome === name);

    const formik = useFormik({
        initialValues: {
            titulo: task.titulo || '',
            descricao: task.descricao || '',
            prioridade: task.prioridade || '',
            categoria: (task.categoria && task.categoria.nome) || '',
            dataLimite: Utils.getDateYYYYMMDD(task.dataLimite),
            completada: task.completada || false,
        },
        validationSchema: getValidationSchema(),
        onSubmit: () => {
            onFormSubmit({
                ...formik.values,
                dataLimite: Utils.getDateDDMMYYYY(formik.values.dataLimite),
                categoria: getCategoryByName(formik.values.categoria),
            });
        },
    });

    useEffect(() => {
        if (formik.values.categoria === '' && categories.length !== 0) {
            formik.values.categoria = categories[0].nome;
        }
    }, [categories]);

    return (
        <Container onSubmit={formik.handleSubmit}>
            <Label text={pageTitle} size="25px" color="#000" bold />
            <Row>
                <FormColumn>
                    <FormField>
                        <Label text="Titulo" />
                        <Input
                            name="titulo"
                            value={formik.values.titulo}
                            hasError={Boolean(
                                formik.touched.titulo && formik.errors.titulo
                            )}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.titulo && formik.errors.titulo && (
                            <Label text={formik.errors.titulo} color="red" />
                        )}
                    </FormField>
                    <FormField>
                        <Label text="Descricao" />
                        <TextArea
                            name="descricao"
                            value={formik.values.descricao}
                            hasError={Boolean(
                                formik.touched.descricao &&
                                    formik.errors.descricao
                            )}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.descricao &&
                            formik.errors.descricao && (
                                <Label
                                    text={formik.errors.descricao}
                                    color="red"
                                />
                            )}
                    </FormField>
                </FormColumn>
                <FormColumn>
                    <FormField>
                        <Label text="Prioridade" />
                        <Input
                            name="prioridade"
                            value={formik.values.prioridade}
                            hasError={Boolean(
                                formik.touched.prioridade &&
                                    formik.errors.prioridade
                            )}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="number"
                        />
                        {formik.touched.prioridade &&
                            formik.errors.prioridade && (
                                <Label
                                    text={formik.errors.prioridade}
                                    color="red"
                                />
                            )}
                    </FormField>
                    <FormField>
                        <Label text="Categoria" />
                        {isLoading ? (
                            <p>Carregando...</p>
                        ) : (
                            <Select
                                name="categoria"
                                options={mapCategories()}
                                value={formik.values.categoria}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        )}
                    </FormField>
                    <FormField>
                        <Label text="Concluir até" />
                        <Input
                            name="dataLimite"
                            value={formik.values.dataLimite}
                            hasError={Boolean(
                                formik.touched.dataLimite &&
                                    formik.errors.dataLimite
                            )}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="date"
                        />
                        {formik.touched.dataLimite &&
                            formik.errors.dataLimite && (
                                <Label
                                    text={formik.errors.dataLimite}
                                    color="red"
                                />
                            )}
                    </FormField>
                    <FormField>
                        <CheckBox
                            name="completada"
                            label="Completada"
                            checked={formik.values.completada}
                            onChange={formik.handleChange}
                        />
                    </FormField>
                </FormColumn>
            </Row>
            <Button text="Salvar" onClick={formik.handleSubmit} submit />
        </Container>
    );
}

TasksForm.propTypes = {
    task: PropTypes.shape({
        titulo: PropTypes.string,
        descricao: PropTypes.string,
        prioridade: PropTypes.number,
        dataLimite: PropTypes.string,
        categoria: PropTypes.shape({
            nome: PropTypes.string,
            cor: PropTypes.string,
            ativa: PropTypes.bool,
        }),
        completada: PropTypes.bool,
    }),
    onFormSubmit: PropTypes.func.isRequired,
    pageTitle: PropTypes.string.isRequired,
};

TasksForm.defaultProps = {
    task: {},
};

export default TasksForm;
