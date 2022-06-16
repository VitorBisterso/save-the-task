import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CategoriesApi from '../../redux/api/categories';

import ColoredDot from '../../components/ColoredDot';
import AddCardButton from '../../components/AddCardButton';
import Icon from '../../components/Icon';

import deleteIcon from '../../assets/img/delete.png';

import { Container, CategoryCard, Name } from './styles';

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
                    onClick={e =>
                        e.target.tagName !== 'IMG'
                            ? navigate(`/categorias/${category.id}`)
                            : undefined
                    }
                >
                    <ColoredDot color={category.cor} />
                    <Name isActive={category.ativa}>{category.nome}</Name>
                    <Icon
                        onClick={() =>
                            dispatch(CategoriesApi.deleteCategory(category.id))
                        }
                        img={deleteIcon}
                        width={24}
                    />
                </CategoryCard>
            ))
        );

    return (
        <Container>
            {renderCategoriesList()}
            <AddCardButton
                onClick={() => navigate('/categorias/criar')}
                width={175}
                height={56}
                iconSize={24}
            />
        </Container>
    );
}

export default CategoriesList;
