import styled from 'styled-components';

export const Button = styled.button`
    margin: 0 auto;
    width: 250px;
    padding: 20px;
    font-size: 21px;
    color: #fff;
    background-color: #299B01;
    border: 2px solid transparent;
    transition: 0.5s all;
    &:not([disabled]):hover{
        color: #299B01;
        background-color: transparent;
        border: 2px solid #299B01;
    }
    &:disabled{
        background-color: gray;
    }
`;