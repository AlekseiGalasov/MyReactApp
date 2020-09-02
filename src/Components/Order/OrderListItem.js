import React from 'react';
import styled from 'styled-components';
import trashImage from '../../images/rubbish.svg';
import { totalPriceItems } from '../Functions/secondaryFunctions'
import { formatCurrency } from '../Functions/secondaryFunctions'


const OrderItemStyled = styled.li`
    display: flex;
    margin: 5px 0;
`;

const TrashButton = styled.button`
    width: 24px;
    height:24px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trashImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    margin: 0 20px;
`;

const ToppingsWrap = styled.div`
    display: flex;
    column-count: 2;
    flex-wrap: wrap;
    max-width: 320px;
`;

const ToppingItem = styled.div`
    padding: 5px;
    font-size: 12px;
    font-family: 'Balsamiq Sans', cursive;
`;


export const OrderListItem = ({order}) => {
    console.log(order.topping.map(top => (console.log(top))));
    return(
        <>
        <OrderItemStyled>
            <ItemName>{order.name}</ItemName>
            <span>{order.count}</span>
            <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
            <TrashButton></TrashButton>
        </OrderItemStyled>
        <ToppingsWrap>
        {order.topping.map(top => {if(top.checked) {return ( 
            <ToppingItem>{top.name}</ToppingItem>
        )}})}
        </ToppingsWrap>
        </>
    )

}