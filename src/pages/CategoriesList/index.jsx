import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CategoriesApi from '../../redux/api/categories';

import ColoredDot from '../../components/ColoredDot';

import AddCardButton from '../../components/AddCardButton';
import { Container, CategoryCard } from './styles';

function CategoriesList() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { categories, isLoading } = useSelector(
        state => state.categoriesReducer
    );

    useEffect(() => {
        dispatch(CategoriesApi.fetchAllCategories());
    }, []);

    const renderCategoriesList = () =>
        isLoading ? (
            <p>Carregando...</p>
        ) : (
            categories &&
            categories.map(category => (
                <CategoryCard
                    key={category.id}
                    onClick={() => navigate(`/categorias/${category.id}`)}
                >
                    <p>{category.nome}</p>
                    <ColoredDot color={category.cor} />
                </CategoryCard>
            ))
        );

    return (
        <Container>
            {renderCategoriesList()}
            <AddCardButton
                onClick={() => undefined}
                width={150}
                height={56}
                iconSize={24}
            />
        </Container>
    );
}

export default CategoriesList;
