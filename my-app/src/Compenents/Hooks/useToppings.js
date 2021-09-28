import { useState } from "react";

const getTopping = toppings => toppings.map(item => ({
        name: item,
        checked: false,
    })
);

export const useToppings = (openItem) => {
    const [toppings, setToppings] = useState(openItem.toppings ? getTopping(openItem.toppings) : null);
    const checkToppings = index => {
        setToppings(toppings.map((item, i) => {
            const newItem = {...item};
            if(index === i)
                newItem.checked = !newItem.checked;
            return newItem;
        }));
    } 

    return {toppings, checkToppings};
}