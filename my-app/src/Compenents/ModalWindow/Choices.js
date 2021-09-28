import React from "react";
import styled from 'styled-components';

import * as listStyle from '../Styles/checkboxStyles';

const ProductName = styled.h2`
    font-size: 30px;
`;

const Choice = ({name, change, check}) => (
    <listStyle.ListItem>
        <listStyle.ListLabel>
            <listStyle.ListCheckbox checked={check} name="choice" value={name} type="radio" onChange={change}/>
            {name} 
        </listStyle.ListLabel>
    </listStyle.ListItem>
);

export const Choices = ({openItem, choice, changeChoices}) => {
    return (
        <>
            <ProductName>Выбор продукции</ProductName>
            <listStyle.ListStyled>
                {openItem.choices.map((item, index) => (
                    <Choice key={index} check={item===choice} index={index} name={item} change={changeChoices}/>))
                }
            </listStyle.ListStyled>
        </>);
}