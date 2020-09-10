import React from 'react';
import styled from 'styled-components';
import { Button } from '../Styles/ButtonCheckOut.js';
import { OrderListItem } from './OrderListItem.js'
import { totalPriceItems } from '../Functions/secondaryFunctions'
import { formatCurrency } from '../Functions/secondaryFunctions'
import { projection } from '../Functions/secondaryFunctions'




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
    & span:nth-child(2) {
        margin-right: 25px;
    }
`;

const EmptyList = styled.p`
    text-align:center;
`;

const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
        arr => arr.length ? arr : 'no toppings'],
    choices: ['choices', item => item ? item : 'no choices'],
}

export const Order = ( {orders, setOrders, setOpenItem, authentication, logIn, firebaseDatabase} ) => {
    

    const dataBase = firebaseDatabase();
    const sendOrder = () => {
        const newOrder = orders.map(projection(rulesData));
        dataBase.ref('orders').push().set({
            nameClient: authentication.displayName,
            email: authentication.email,
            order: newOrder,
            date: new Date().toLocaleString(),
        });
        setOrders([]);
    }

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
        <OrderTitle>YOUR ORDER</OrderTitle>
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
            <EmptyList>Order list empty!</EmptyList>}
        </OrderContent>
        <Total>
            <span>Final Count</span>
            <span>{totalCounter}</span>
            <span>{formatCurrency(total)}</span>
        </Total>
        <Button onClick={() => authentication ? orders.length > 0 ? sendOrder() : alert('Сперва выберите хоть 1 товар') : logIn()}>Оформить</Button>
    </OrderStyled>
)};