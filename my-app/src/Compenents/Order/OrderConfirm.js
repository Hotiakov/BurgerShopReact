import React, {useContext} from "react";
import styled from 'styled-components';

import { addCurrency } from "../Functions/secondaryFunction";
import { countTotalPrice as total } from '../Functions/secondaryFunction';

import { Overlay } from "../ModalWindow/ModalWindow";
import {TotalStyled, TotalTitle, Title} from "../Styles/orderStyles"
import { Button } from "../Styles/Button";
import { projection } from "../Functions/secondaryFunction";
import { Context } from "../Functions/context";

const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    padding: 30px;
`;

const Text = styled.h3`
    text-align: center;
    margin-bottom: 30px;
`

const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    toppings: ['topping', items => items ? items.filter(item => item.checked).map(item => item.name) : "No toppings"],
    choosen: ['choosen', item => item || "No choices"],
}

const sendOrder = (dataBase, orders, authentication) => {
    const newOrder = orders.map(projection(rulesData));
    dataBase.ref('orders').push().set({
        clientName: authentication.displayName,
        email:  authentication.email,
        order: newOrder,
    });
}

export const OrderConfirm = () => {
    const {orders: {orders, setOrders}, auth: {authentication}, orderConfirm: {setOpenOrderConfirm}, firebaseDatabase} = useContext(Context);
    const dataBase = firebaseDatabase;
    const countTotalPrice = () => orders.reduce((sum, order) => sum + total(order), 0 );
    const countTotalCount = () => orders.reduce((counter, order) => counter + order.count, 0 );

    return (
        <Overlay>
            <Modal>
                <Title>{authentication.displayName}</Title>
                <Text>Осталось только подтвердить ваш заказ</Text>
                <TotalStyled>
                    <TotalTitle>Итого</TotalTitle>
                    <p style={{flex: "0 1 9%"}}>{countTotalCount()}</p>
                    <p style={{flex: "0 1 auto"}}>{addCurrency(countTotalPrice())}</p>
                </TotalStyled>
                <Button onClick={() => {
                    sendOrder(dataBase, orders, authentication);
                    setOrders([]);
                    setOpenOrderConfirm(false);
                }}>Подтвердить</Button>
            </Modal>
        </Overlay>
    )

}