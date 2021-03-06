import React from "react";
import styled from 'styled-components';
import { addCurrency } from "../Functions/secondaryFunction";

const List = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const Item = styled.li`
    width: 400px;
    height: 155px;
    background: ${({img}) => `url(${img})`} center/cover no-repeat;
    position: relative;
    z-index: 1;
    margin-bottom: 30px;
    padding: 15px;
    color: #fff;
    cursor: pointer;
    &::after{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #000;
        transition: 0.5s all;
        opacity: 0.3;
        z-index: -1;
    }
    &:hover{
        &::after{
            opacity: 0.7;
        }
    }
`;

export const ListItem = ({ itemList, setOpenItem }) => (
    <List>
        {itemList.map(item=>(
            <Item key={item.id} img={item.img} onClick={() => setOpenItem(item)}>
                <p>{item.name}</p>
                <p>{addCurrency(item.price)}</p>
            </Item>
        ))}
    </List>
);