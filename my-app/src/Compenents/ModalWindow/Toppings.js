import React from "react";
import styled from 'styled-components';

import * as listStyle from '../Styles/checkboxStyles';


const ProductName = styled.h2`
    font-size: 30px;
`;

const Topping = ({name, change, index, checked}) => (
    <listStyle.ListItem>
        <listStyle.ListLabel>
            <listStyle.ListCheckbox checked={checked} type="checkbox" onChange={() => change(index)}/>
            {name}
        </listStyle.ListLabel>
    </listStyle.ListItem>
);

export const Toppings = ({toppings, checkToppings}) => {
    return (
        <>
            <ProductName>Добавки</ProductName>
            <listStyle.ListStyled>
                {toppings.map((topping, index) => (
                    <Topping key={index} index={index} checked={topping.checked} name={topping.name} change={checkToppings}/>))
                }
            </listStyle.ListStyled>
        </>);
}