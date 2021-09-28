import React from "react";
import styled from 'styled-components';

import { addCurrency } from "../Functions/secondaryFunction";
import { countTotalPrice } from "../Functions/secondaryFunction";
import { useToppings } from "../Hooks/useToppings";

import { Button } from "../Styles/Button";
import { CountItem } from "./CountItem";
import {useCount} from "../Hooks/useCount";
import { Toppings } from "./Toppings";



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
    height: 90%;
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
    padding: 15px 30px;
`;

const TotalPrice = styled.div`
        display: flex;
        justify-content: space-between;
    `;


export const ModalWindow = ({openItem, setOpenItem, orders, setOrders}) => {
    const closeModal = e => {
        if(e.target.id === "overlay"){
            setOpenItem(null);
        }
    }

    const toppings = useToppings(openItem);
    const counter = useCount();
    const order = {
        ...openItem,
        count: counter.count,
        price: openItem.price,
        topping: toppings.toppings,
    }

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    }

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
                    {openItem.toppings && <ProductName>Добавки</ProductName>}
                    {openItem.toppings && <Toppings {...toppings}/>}
                    <TotalPrice>
                        <span>Итоговая цена:</span> 
                        <span>{addCurrency(countTotalPrice(order))}</span>
                    </TotalPrice>
                    <Button onClick={addToOrder}>Добавить</Button>
                </Content>
            </Modal>
        </Overlay>
    );
};

