import React from "react";
import styled from 'styled-components';

import trash from '../images/trash.svg';

const Title = styled.span`
    flex: 1 0 65%;
`;

const LI = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 20px;
    &:last-child{
        margin-bottom: 0;
    }
`;

const ListItem = ({name, count, price}) => (
    <LI>
        <Title>{name}</Title>
        <span style={{flex: "1 0 10%"}}>{count}</span>
        <span style={{flex: "1 0 20%"}}>{price}₽</span>
        <img style={{flex: "1 0 5%", width: "100%"}} src={trash} alt="Удалить"/>
    </LI>
);

const ListOfOrdersStyled = styled.ul`
    flex: 1 0 auto;
`

export const ListOfOrders = () => (
    <ListOfOrdersStyled>
        <ListItem name="JS Burger" count="1" price="250"/>
        <ListItem name="JS Burger" count="1" price="1250"/>
        <ListItem name="JS Burger" count="10" price="250"/>
        <ListItem name="JS Burger" count="10" price="1250"/>
    </ListOfOrdersStyled>
); 