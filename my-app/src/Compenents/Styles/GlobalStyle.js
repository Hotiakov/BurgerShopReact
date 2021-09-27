
import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
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
    button{
        cursor: pointer;
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

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none; 
    }

    input[type='number'],
    input[type="number"]:hover,
    input[type="number"]:focus {
        appearance: none;
        -moz-appearance: textfield;
    }
`
