import React, {useContext} from "react";
import styled from 'styled-components';

import { addCurrency } from "../Functions/secondaryFunction";
import { countTotalPrice as total } from '../Functions/secondaryFunction';

import { Context } from "../Functions/context";

import trash from '../../images/trash.svg';

const Title = styled.div`
    flex: 1 0 55%;
`;

const Choices = styled.span`
    display: block;
    font-size: 14px;
    color: #9A9A9A;
`;

const LI = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 20px;
    &:last-child{
        margin-bottom: 0;
    }
`;

const toppingFilter = topping => {
    return topping && topping.filter(item => item.checked).map(item => item.name).join(', ');
}

const ListItem = ({order, index}) => {
    const {orders: {deleteOrder}, openItem: {setOpenItem}} = useContext(Context);
    return(
    <LI onClick={e => {
            if(!e.target.closest('.trash'))
                setOpenItem({...order, index})
            }
        }>
        <Title>
            <span>{order.name}</span>
            {toppingFilter(order.topping) && <Choices>{toppingFilter(order.topping)}</Choices>}
            {order.choosen && <Choices>{order.choosen}</Choices>}
        </Title>
        <span style={{flex: "1 0 9%"}}>{order.count}</span>
        <span style={{flex: "1 0 29%"}}>{addCurrency(total(order))}</span>
        <div className="trash" style={{flex: "1 0 7%", cursor: 'pointer'}} onClick={() => deleteOrder(index)}><img style={{height: "100%"}} src={trash} alt="Удалить"/></div>
    </LI>
)
};

const ListOfOrdersStyled = styled.ul`
    flex: 1 0 55%;
    margin-bottom: 10px;
    overflow-y: auto;
`

export const ListOfOrders = () => {
    const {orders: {orders}} = useContext(Context);
    return(
        <ListOfOrdersStyled>
            {orders.map((order, index) => <ListItem key={index} index={index} 
            order={order}/>)}
        </ListOfOrdersStyled>
    )
}; 