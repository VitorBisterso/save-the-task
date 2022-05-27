import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    margin-bottom: 5vh;

    h1 {
        flex: 2;
        font-size: var(--TEXT-ENORMOUS);
    }

    a {
        text-decoration: none;
        color: var(--COLOR-PINK);

        &:hover {
            transition: all 0.2s linear;
            color: var(--COLOR-LIGHT-PINK);
        }
    }

    img {
        margin-left: 15px;
        width: 32px;
    }

    @media (max-width: 768px) {
        flex-direction: column;

        h1 {
            text-align: center;
        }
    }
`;

export const Links = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: center;

    a {
        font-size: var(--TEXT-MEDIUM);

        &:last-child {
            display: flex;
            align-items: center;
        }
    }
`;
