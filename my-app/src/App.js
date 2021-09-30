import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database'
import "firebase/compat/auth"
import { GlobalStyle } from "./Compenents/Styles/GlobalStyle";

import { useOpenItem } from "./Compenents/Hooks/useOpenItem";
import { useOrders } from "./Compenents/Hooks/useOrders";
import { useAuth } from "./Compenents/Hooks/useAuth";
import { useOrderConfirm } from "./Compenents/Hooks/useOrderConfirm";
import { Context } from "./Compenents/Functions/context";

import { NavBar } from "./Compenents/NavBar/NavBar";
import { Menu } from './Compenents/Menu/Menu';
import { ModalWindow } from "./Compenents/ModalWindow/ModalWindow";
import { Order } from "./Compenents/Order/Order";
import { OrderConfirm } from "./Compenents/Order/OrderConfirm";

const firebaseConfig = {
    apiKey: "AIzaSyDHsWpPah0aH7DA0-kfHORKA52ksK2SiTg",
    authDomain: "mrdonalds-5fe50.firebaseapp.com",
    projectId: "mrdonalds-5fe50",
    storageBucket: "mrdonalds-5fe50.appspot.com",
    messagingSenderId: "322428500032",
    appId: "1:322428500032:web:6c594fa5d54c0ba875c7a5",
    databaseURL: "https://mrdonalds-5fe50-default-rtdb.europe-west1.firebasedatabase.app/",
  };

firebase.initializeApp(firebaseConfig);

const App = () => {
    const auth = useAuth(firebase.auth);
    const openItem = useOpenItem();
    const orders = useOrders();
    const orderConfirm = useOrderConfirm();
    const firebaseDatabase = firebase.database();
    return(
    <Context.Provider value={{
        auth,
        openItem,
        orders,
        orderConfirm,
        firebaseDatabase
        }}>
        <GlobalStyle/>
        <NavBar/>
        <Menu/>
        <Order />
        {openItem.openItem && <ModalWindow/>}
        {orderConfirm.openOrderConfirm && 
            <OrderConfirm />}
    </Context.Provider>);
};

export default App;
