import styled from 'styled-components';

export const ListStyled = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 80%;
    max-height: 100%;
    margin: 0 auto;
    overflow-y: auto;
`;

export const ListItem = styled.li`
    flex: 1 1 50%;
`;

export const ListLabel = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 16px;
`;

export const ListCheckbox = styled.input`
    margin-right: 13px;
    width: 18px;
    height: 18px;
    background: #C4C4C4;
`;