import React from 'react';
import styled from 'styled-components';
import { Button } from './ButtonCheckOut.js';
import { OrderListItem } from './OrderListItem.js'

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

export const Order = () => (
    <OrderStyled>
        <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
        <OrderContent>
            <OrderList>
                <OrderListItem></OrderListItem>
            </OrderList>
        </OrderContent>
        <Total>
            <span>Итого</span>
            <span>3</span>
            <span>1000</span>
        </Total>
        <Button>Оформить</Button>
    </OrderStyled>
);