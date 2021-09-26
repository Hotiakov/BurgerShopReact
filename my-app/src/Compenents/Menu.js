import React from "react";
import styled from 'styled-components';

import dbMenu from "../DBMenu";

import { ListItem } from "./ListItem";

import { MenuBanner } from "./MenuBanner";

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    padding: 30px;
`;

const Header = styled.h2`
    margin-bottom: 10px;
`;

export const Menu = ({setOpenItem}) => (
    <MenuStyled>
        <MenuBanner/>

        <section>
            <Header>Бургеры</Header>
            <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem}/>
        </section>

        <section>
            <Header>Напитки и Снэки</Header>
            <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem}/>
        </section>
    </MenuStyled>


);