import React from "react";
import { GlobalStyle } from "./Compenents/Styles/GlobalStyle";
import { useOpenItem } from "./Compenents/Hooks/useOpenItem";
import { useOrders } from "./Compenents/Hooks/useOrders";

import { NavBar } from "./Compenents/NavBar/NavBar";
import { Menu } from './Compenents/Menu/Menu';
import { ModalWindow } from "./Compenents/ModalWindow/ModalWindow";
import { Order } from "./Compenents/Order/Order";

const App = () => {

    const openItem = useOpenItem();
    const orders = useOrders();

    return <>
        <GlobalStyle/>
        <NavBar/>
        <Menu {...openItem}/>
        <Order {...orders} {...openItem}/>
        {openItem.openItem && <ModalWindow {...openItem} {...orders}/>}
    </>
};

export default App;
