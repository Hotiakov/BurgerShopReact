import React from "react";
import { GlobalStyle } from "./Compenents/Hooks/Styles/GlobalStyle";
import { useOpenItem } from "./Compenents/Hooks/ModalWindow/useOpenItem";
import { useOrders } from "./Compenents/Hooks/Order/useOrders";
import { NavBar } from "./Compenents/Hooks/NavBar/NavBar";
import { Menu } from './Compenents/Hooks/Menu/Menu';
import { ModalWindow } from "./Compenents/Hooks/ModalWindow/ModalWindow";
import { Order } from "./Compenents/Hooks/Order/Order";

const App = () => {

    const openItem = useOpenItem();
    const orders = useOrders();

    return <>
        <GlobalStyle/>
        <NavBar/>
        <Menu {...openItem}/>
        <Order {...orders}/>
        {openItem.openItem && <ModalWindow {...openItem} {...orders}/>}
    </>
};

export default App;
