import React, {useContext} from "react";
import styled from 'styled-components';

import { useFetch } from "../Hooks/useFetch";
import { Context } from "../Functions/context";

import { ListItem } from "./ListItem";
import { MenuBanner } from "./MenuBanner";
import { Preloader } from "./Preloader";

const MenuStyled = styled.main`
    position: relative;
    margin-top: 80px;
    margin-left: 380px;
    background-color: #ccc;
`;

const Header = styled.h2`
    margin-bottom: 10px;
`;

export const Menu = () => {
    const res = useFetch();
    const {openItem: {setOpenItem}} = useContext(Context);
    const dbMenu = res.response;
    
    return (<MenuStyled>
        <MenuBanner/>
        { res.response ?
            <>
                <section style={{padding: "0 30px"}}>
                    <Header>Бургеры</Header>
                    <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem}/>
                </section>
                <section style={{padding: "0 30px"}}>
                    <Header>Напитки и Снэки</Header>
                    <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem}/>
                </section>
            </> : res.error ?
                <div>Произошла ошибка:( Мы уже её фиксим!</div>
                : <Preloader/>
        }
    </MenuStyled>);
};