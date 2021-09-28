import React from "react";
import styled from 'styled-components';

const ToppingsStyled = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 80%;
    max-height: 100%;
    margin: 0 auto;
    overflow-y: auto;
`;

const ToppingsItem = styled.li`
    flex: 1 1 50%;
`;

const ToppingsLabel = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 20px;
`;

const ToppingsCheckbox = styled.input`
    margin-right: 13px;
    width: 24px;
    height: 24px;
    background: #C4C4C4;
`;

const Topping = ({name, change, index}) => (
    <ToppingsItem>
        <ToppingsLabel>
            <ToppingsCheckbox type="checkbox" onChange={() => change(index)}/>
            {name}
        </ToppingsLabel>
    </ToppingsItem>
);

export const Toppings = ({toppings, checkToppings}) => {
    return (<ToppingsStyled>
            {toppings.map((topping, index) => (
                <Topping key={index} index={index} name={topping.name} change={checkToppings}/>))
            }
        </ToppingsStyled>);
}