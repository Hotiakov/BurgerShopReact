import React from "react";
import { createGlobalStyle } from 'styled-components';

import { NavBar } from "./Compenents/NavBar";

const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after{
        box-sizing: inherit;
    }

    body{
        margin: 0;
        border-color: #f0f0f0;
        font-family: Roboto, sans-serif;
        font-size: 20px;
        color: #000;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    img{
        max-width: 100%;
        height: 100%;
    }

    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }

    h1, h2, h3{
        font-family: Pacifico, cursive;
        padding: 0;
        margin: 0;
    }
    p{
        padding: 0;
        margin: 0;
    }






`

const App = () =>(
    <>
        <GlobalStyle/>
        <NavBar/>
    </>
);

export default App;
