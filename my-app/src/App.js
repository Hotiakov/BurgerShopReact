import React from "react";
import { GlobalStyle } from "./Compenents/GlobalStyle";
import { NavBar } from "./Compenents/NavBar";
import { Menu } from './Compenents/Menu';
import { ModalWindow } from "./Compenents/ModalWindow";
import { Order } from "./Compenents/Order";

const App = () => {

    const [openItem, setOpenItem] = React.useState(null);

    return <>
        <GlobalStyle/>
        <NavBar/>
        <Menu setOpenItem={setOpenItem}/>
        <Order/>
        <ModalWindow openItem={openItem} setOpenItem={setOpenItem}/>
    </>
};

export default App;
