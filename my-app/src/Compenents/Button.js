import styled from 'styled-components';

export const Button = styled.button`
    margin: 0 auto;
    width: 250px;
    height: 65px;
    padding: 20px 75px;
    font-size: 21px;
    color: #fff;
    background-color: #299B01;
    border: 2px solid transparent;
    transition: 0.5s all;
    &:hover{
        color: #299B01;
        background-color: transparent;
        border: 2px solid #299B01;
    }
`;