import React from "react";
import styled from 'styled-components';

import { addCurrency } from "../Functions/secondaryFunction";
import { countTotalPrice as total } from '../Functions/secondaryFunction';

import { Button } from "../Styles/Button";

import { projection } from "../Functions/secondaryFunction";

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

const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    toppings: ['topping', items => items ? items.filter(item => item.checked).map(item => item.name) : "No toppings"],
    choosen: ['choosen', item => item || "No choices"],
}

export const Order = ({orders, setOrders, deleteOrder, setOpenItem, authentication, logIn, firebaseDatabase}) => {
    const countTotalPrice = () => orders.reduce((sum, order) => sum + total(order), 0 );
    const countTotalCount = () => orders.reduce((counter, order) => counter + order.count, 0 );
    const placeOrder = () => {
        if(!authentication){
            logIn();
        }else {
            sendOrder();
        }
    }

    const sendOrder = () => {
        const newOrder = orders.map(projection(rulesData));
        firebaseDatabase().ref('orders').push().set({
            clientName: authentication.displayName,
            email:  authentication.email,
            order: newOrder,
        });
        setOrders([]);
    }

    return(
        <OrderStyled>
            <Title>Ваш заказ</Title>
            {
                !orders.length ? <NoOrder/> : <ListOfOrders orders={orders} deleteOrder={deleteOrder} setOpenItem={setOpenItem}/>
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
