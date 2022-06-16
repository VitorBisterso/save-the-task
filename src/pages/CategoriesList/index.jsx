import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CategoriesApi from '../../redux/api/categories';

import CheckBox from '../../components/CheckBox';
import ColoredDot from '../../components/ColoredDot';
import AddCardButton from '../../components/AddCardButton';
import Icon from '../../components/Icon';

import deleteIcon from '../../assets/img/delete.png';

import { Container, ListContainer, CategoryCard, Name } from './styles';

function CategoriesList() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { categories, isLoading } = useSelector(
        state => state.categoriesReducer
    );

    const [onlyActive, setOnlyActive] = useState(false);

    useEffect(() => {
        dispatch(CategoriesApi.fetchAllCategories());
    }, []);

    const renderCategoriesList = () =>
        isLoading ? (
            <p>Carregando...</p>
        ) : (
            categories &&
            categories.map(category => {
                const { id, nome, cor, ativa } = category;
                const component = (
                    <CategoryCard
                        key={id}
                        onClick={e =>
                            e.target.tagName !== 'IMG'
                                ? navigate(`/categorias/${id}`)
                                : undefined
                        }
                    >
                        <ColoredDot color={cor} />
                        <Name isActive={ativa} title={nome}>
                            {nome}
                        </Name>
                        <Icon
                            onClick={() =>
                                dispatch(CategoriesApi.deleteCategory(id))
                            }
                            img={deleteIcon}
                            width={24}
                        />
                    </CategoryCard>
                );
                if (onlyActive) {
                    return ativa && component;
                }

                return component;
            })
        );

    return (
        <Container>
            <CheckBox
                label="Somente ativas"
                name="activeFilter"
                checked={onlyActive}
                onChange={() => setOnlyActive(!onlyActive)}
            />
            <ListContainer>
                {renderCategoriesList()}
                <AddCardButton
                    onClick={() => navigate('/categorias/criar')}
                    width={200}
                    height={56}
                    iconSize={24}
                />
            </ListContainer>
        </Container>
    );
}

export default CategoriesList;
