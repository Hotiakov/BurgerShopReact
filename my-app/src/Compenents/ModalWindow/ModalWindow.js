import React from "react";
import styled from 'styled-components';

import { addCurrency } from "../Functions/secondaryFunction";

import { Button } from "../Styles/Button";
import { CountItem } from "./CountItem";
import {useCount} from "../Hooks/useCount";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0, 0.7);
    z-index: 999;
`;

const Modal = styled.div`
    position: relative;
    width: 45%;
    height: 80%;
    background-color: #fff;
`;

const Banner = styled.div`
    height: 200px;
    width: 100%;
    background: url(${({img}) => img}) center/cover no-repeat;
`;

const Text = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductName = styled.h2`
    font-size: 30px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px);
    padding: 30px;
`;

export const countTotalPrice = order => order.price*order.count;

export const ModalWindow = ({openItem, setOpenItem, orders, setOrders}) => {
    const closeModal = e => {
        if(e.target.id === "overlay"){
            setOpenItem(null);
        }
    }
    
    const counter = useCount();
    const order = {
        ...openItem,
        count: counter.count,
        price: openItem.price * counter.count,
    }

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    }


    const TotalPrice = styled.div`
        display: flex;
        justify-content: space-between;
    `;

    return(
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <Content>
                    <Text>
                        <ProductName>{openItem.name}</ProductName>
                        <ProductName>{addCurrency(openItem.price)}</ProductName>
                    </Text>
                    <CountItem {...counter}/>
                    <TotalPrice>
                        <span>Цена:</span> 
                        <span>{addCurrency(order.price)}</span>
                    </TotalPrice>
                    <Button onClick={addToOrder}>Добавить</Button>
                </Content>
            </Modal>
        </Overlay>
    );
};

