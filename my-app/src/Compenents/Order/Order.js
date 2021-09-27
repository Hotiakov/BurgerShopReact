import React from "react";
import styled from 'styled-components';

import { addCurrency } from "../Functions/secondaryFunction";

import { Button } from "../Styles/Button";

import { ListOfOrders } from "./ListOfOrders";

const Title = styled.h2`
    text-align: center;
    margin-bottom: 15px;
    font-size: 39px;
    line-height: 68px;
`;
const NoOrderStyled = styled.p`
    text-align: center;
    font-size: 21px;
    line-height: 25px;
    flex: 1 0 auto;
`;
const OrderStyled = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-top: 100px;
    height: 100%;
    width: 380px;
    box-shadow: 3px 4px 5px rgba(0,0,0,0.5);
    color: #000;
`;

const NoOrder = () => (
    <NoOrderStyled>Вы еще ничего не выбрали</NoOrderStyled>
);

const TotalTitle = styled.span`
    flex: 1 0 45%;
`;

const TotalStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 23px;
    text-transform: uppercase;
`;

export const Order = ({orders}) => {
    
    const countTotalPrice = () => orders.reduce((sum, order) => sum + order.price, 0 );
    const countTotalCount = () => orders.reduce((counter, order) => counter + order.count, 0 );
    return(
        <OrderStyled>
            <Title>Ваш заказ</Title>
            {
                !orders.length ? <NoOrder/> : <ListOfOrders orders={orders}/>
            }
            <TotalStyled>
                <TotalTitle>Итого</TotalTitle>
                <p style={{flex: "0 1 10%"}}>{countTotalCount()}</p>
                <p style={{flex: "0 1 30%"}}>{addCurrency(countTotalPrice())}</p>
                <p style={{flex: "0 1 5%"}}></p>
            </TotalStyled>
            <Button>Оформить</Button>
        </OrderStyled>
        )
};