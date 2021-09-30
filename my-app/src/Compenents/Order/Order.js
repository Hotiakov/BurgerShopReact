import React, {useContext} from "react";
import styled from 'styled-components';

import { addCurrency } from "../Functions/secondaryFunction";
import { countTotalPrice as total } from '../Functions/secondaryFunction';

import { Context } from "../Functions/context";

import { Button } from "../Styles/Button";
import {TotalStyled, TotalTitle, Title} from "../Styles/orderStyles"
import { ListOfOrders } from "./ListOfOrders";


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



export const Order = () => {
    const {auth: {authentication, logIn}, orders: {orders}, orderConfirm: {setOpenOrderConfirm}} = useContext(Context);
    const countTotalPrice = () => orders.reduce((sum, order) => sum + total(order), 0 );
    const countTotalCount = () => orders.reduce((counter, order) => counter + order.count, 0 );
    const placeOrder = () => {
        if(!authentication){
            logIn();
        }else {
            setOpenOrderConfirm(true);
        }
    }

    return(
        <OrderStyled>
            <Title>Ваш заказ</Title>
            {
                !orders.length ? <NoOrder/> : <ListOfOrders/>
            }
            <TotalStyled>
                <TotalTitle>Итого</TotalTitle>
                <p style={{flex: "0 1 9%"}}>{countTotalCount()}</p>
                <p style={{flex: "0 1 29%"}}>{addCurrency(countTotalPrice())}</p>
                <p style={{flex: "0 1 7%"}}></p>
            </TotalStyled>
            <Button disabled={!orders.length} onClick={placeOrder}>Оформить</Button>
        </OrderStyled>
        )
};
