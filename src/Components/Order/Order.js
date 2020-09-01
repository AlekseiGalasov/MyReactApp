import React from 'react';
import styled from 'styled-components';
import { Button } from '../Styles/ButtonCheckOut.js';
import { OrderListItem } from './OrderListItem.js'
import { totalPriceItems } from '../Functions/secondaryFunctions'
import { formatCurrency } from '../Functions/secondaryFunctions'


const OrderStyled = styled.div`
    position:fixed;
    top: 80px;
    height: calc(100% - 80px);
    left: 0;
    padding:20px;
    min-width: 380px;
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
`;

const OrderTitle = styled.h2`
    text-align: center;
`;

const OrderContent = styled.div`
    flex-grow: 1;
    padding: 10px;

`;

const OrderList = styled.ul`

`;

const Total = styled.div`
    display: flex;
    padding: 30px;
    & span:first-child {
        flex-grow: 1;
    }
`;

const EmptyList = styled.p`
    text-align:center;
`;

export const Order = ( {orders} ) => {
    
    const total = orders.reduce((result, order)=>
    totalPriceItems(order) + result, 0)

    return(
    <OrderStyled>
        <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
        <OrderContent>
            {orders.length ? 
            <OrderList> 
                {orders.map(order => <OrderListItem order={order} />)}
            </OrderList> :
            <EmptyList>Список заказов пуст</EmptyList>}
        </OrderContent>
        <Total>
            <span>Итого</span>
            <span></span>
            <span>{formatCurrency(total)}</span>
        </Total>
        <Button>Оформить</Button>
    </OrderStyled>
)};