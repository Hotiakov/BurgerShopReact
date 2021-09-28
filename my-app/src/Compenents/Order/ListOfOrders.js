import React from "react";
import styled from 'styled-components';

import { addCurrency } from "../Functions/secondaryFunction";

import trash from '../../images/trash.svg';

import { countTotalPrice as total } from '../Functions/secondaryFunction';


const Title = styled.div`
    flex: 1 0 55%;
`;

const Toppings = styled.span`
    display: block;
    font-size: 14px;
    color: #9A9A9A;
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

const toppingFilter = topping => {
    return topping && topping.filter(item => item.checked).map(item => item.name).join(', ');
}

const ListItem = ({name, price, count, toppings}) => (
    <LI>
        <Title>
            <span>{name}</span>
            {toppings && <Toppings>{toppings}</Toppings>}
        </Title>
        <span style={{flex: "1 0 9%"}}>{count}</span>
        <span style={{flex: "1 0 29%"}}>{addCurrency(price)}</span>
        <div style={{flex: "1 0 7%"}}><img style={{height: "100%"}} src={trash} alt="Удалить"/></div>
    </LI>
);

const ListOfOrdersStyled = styled.ul`
    flex: 1 0 55%;
    margin-bottom: 10px;
    overflow-y: auto;
`

export const ListOfOrders = ({orders}) => (
    <ListOfOrdersStyled>
        {orders.map((order, index) => <ListItem key={index} name={order.name} count={order.count} price={total(order)} toppings={toppingFilter(order.topping)}/>)}
    </ListOfOrdersStyled>
); 