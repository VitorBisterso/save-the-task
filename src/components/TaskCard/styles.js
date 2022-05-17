import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid var(--COLOR-BLACK);
    border-radius: 10px;
    padding: 5px 10px;
    width: var(--CARD-WIDTH);
    height: var(--CARD-HEIGHT);
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 1px solid var(--COLOR-BLACK);
`;

export const Title = styled.p`
    text-overflow: ellipsis;
    width: 75%;
    white-space: nowrap;
    overflow: hidden;
    text-decoration: ${props =>
        props.isCompleted ? 'line-through' : 'initial'};
`;

export const Description = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: justify;
    text-decoration: ${props =>
        props.isCompleted ? 'line-through' : 'initial'};
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`;

export const Icon = styled.img`
    cursor: pointer;
    width: 18px;
    transition: all 0.2s linear;

    &:last-child {
        margin-left: 5px;
    }

    &:hover {
        width: 24px;
    }
`;

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--COLOR-PINK);
    border-radius: 5px;
    padding: 5px;
    background-color: transparent;
    cursor: pointer;
    background-color: var(--COLOR-WHITE);
    color: var(--COLOR-BLACK);
    transition: all 0.2s linear;

    &:hover {
        background-color: var(--COLOR-PINK);
        color: var(--COLOR-WHITE);
    }

    img {
        width: 18px;
        margin-left: 5px;
    }
`;
