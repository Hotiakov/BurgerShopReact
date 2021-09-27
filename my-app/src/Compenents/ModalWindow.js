import React from "react";
import styled from 'styled-components';

import { Button } from "./Button";

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

export const ModalWindow = ({openItem, setOpenItem}) => {
    const closeModal = e => {
        if(e.target.id === "overlay"){
            setOpenItem(null);
        }
    }
    if(openItem === null){
        return null;
    } else return(
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <Content>
                    <Text>
                        <ProductName>{openItem.name}</ProductName>
                        <ProductName>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</ProductName>
                    </Text>
                    <Button>Добавить</Button>
                </Content>
            </Modal>
        </Overlay>
    );
};

