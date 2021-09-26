import React from "react";
import { GlobalStyle } from "./Compenents/GlobalStyle";
import { NavBar } from "./Compenents/NavBar";
import { Menu } from './Compenents/Menu';

const App = () =>(
    <>
        <GlobalStyle/>
        <NavBar/>
        <Menu/>
    </>
);

export default App;
