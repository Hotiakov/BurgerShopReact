import React from "react";
import styled from 'styled-components';

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
    margin-bottom: 20px;
`;

const Text = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 37px;
`;

const ProductName = styled.h2`
    font-size: 30px;
`;

const AddButton = styled.button`
    position: absolute;
    bottom: 43px;
    left: 50%;
    transform: translateX(-50%);
    width: 250px;
    height: 65px;
    padding: 20px 75px;
    font-size: 21px;
    color: #fff;
    background-color: #299B01;
    border: none;
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
                <Text>
                    <ProductName>{openItem.name}</ProductName>
                    <ProductName>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</ProductName>
                </Text>
                <AddButton>Добавить</AddButton>
            </Modal>
        </Overlay>
    );
};

