import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button } from '../Styles/ButtonCheckOut.js';
import { OrderListItem } from './OrderListItem.js'
import { totalPriceItems } from '../Functions/secondaryFunctions'
import { formatCurrency } from '../Functions/secondaryFunctions'
import {Total, OrderTitle} from '../Styles/ModalStyle'
import { Context } from '../Functions/context'
import { device } from '../Styles/devices'

const OrderStyled = styled.div`
    position:fixed;
    top: 80px;
    height: calc(100% - 80px);
    left: 0;
    padding:20px;
    width: 380px;
    max-width: 380px;
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;

    @media ${device.laptopL} {
        max-width: 350px;
    }
    @media ${device.laptop} {
        max-width: 280px;
        padding: 10px;
    }
    @media ${device.tablet} {
        width: 100%;
        height: 200px;
        background-color: white;
        min-width: 100%;
        z-index: 100;
        padding: 5px;

    }
`;

const OrderContent = styled.div`
    flex-grow: 1;
    padding: 10px;
    overflow-y: scroll;
    @media ${device.tablet} {
        padding: 5px 0px;
    }
`;

const OrderList = styled.ul`

`;

const EmptyList = styled.p`
    text-align:center;
    @media ${device.laptop} {
            font-size: 14px;
    }
    @media ${device.tablet} {
            font-size: 12px;
    }
`;


export const Order = () => {
    const {
        orderConfirm : {setOpenOrderConfirm},
        openItem : {setOpenItem},
        auth : {authentication, logIn},
        orders : {orders, setOrders}
    } =  useContext(Context)

    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1)
        setOrders(newOrders);
    }

    const total = orders.reduce((result, order)=>
    totalPriceItems(order) + result, 0)

    const totalCounter = orders.reduce((result, order)=>
    order.count + result, 0)

    return(
    <OrderStyled>
        <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
        <OrderContent>
            {orders.length ? 
            <OrderList> 
                {orders.map((order, index) => <OrderListItem
                key={index}
                order={order}
                deleteItem={deleteItem}
                index={index}
                setOpenItem={setOpenItem}
                 />)}
            </OrderList> :
            <EmptyList>Список заказов пуст!</EmptyList>}
        </OrderContent>
        {orders.length ? 
        <>
        <Total>
            <span>Конечная сумма</span>
            <span>{totalCounter}</span>
            <span>{formatCurrency(total)}</span>
        </Total>
        <Button onClick={() => authentication ? orders.length > 0 ? setOpenOrderConfirm(true) : alert('Сперва выберите хоть 1 товар') : logIn()}>Оформить</Button></> : null}
    </OrderStyled>
)};