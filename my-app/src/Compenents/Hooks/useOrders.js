import { useState } from "react";

export const useOrders = () => {
    const [orders, setOrders] = useState([]);

    const deleteOrder = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    }

    return {orders, setOrders, deleteOrder};
}