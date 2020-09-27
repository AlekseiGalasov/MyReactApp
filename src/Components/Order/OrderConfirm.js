import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button } from '../Styles/ButtonCheckOut.js';
import { totalPriceItems } from '../Functions/secondaryFunctions'
import { formatCurrency } from '../Functions/secondaryFunctions'
import { projection } from '../Functions/secondaryFunctions'
import {Total, OrderTitle, OverLay, CloseBtn, Modal} from '../Styles/ModalStyle'
import { Context } from '../Functions/context'


const Text = styled.h3`
    text-align: center;
    margin-bottom: 30px;
    margin-top: 30px;

`;

const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
        arr => arr.length ? arr : 'no toppings'],
    choices: ['choices', item => item ? item : 'no choices'],
}
 export const OrderConfirm = () => {
     
    const {
        orderConfirm : {setOpenOrderConfirm},
        auth : {authentication},
        orders : {orders, setOrders},
        thanks : {setThanks},
        firebaseDatabase
    } =  useContext(Context)

    
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
        setOpenOrderConfirm(false)
        setThanks(true)
        setTimeout(() => setThanks(false), 1500)
    }

    const total = orders.reduce((result, order)=>
    totalPriceItems(order) + result, 0)

    const CloseModal = e => {
        if(e.target.id === 'OverLay' || e.target.id === 'CloseBtn') {
            return setOpenOrderConfirm(false);
        }
    }


    return (
        <OverLay id='OverLay' onClick={CloseModal}>
            <Modal>
            <CloseBtn id='CloseBtn' onClick={CloseModal}>X</CloseBtn>
            <OrderTitle>{authentication.displayName}</OrderTitle>
            <Text>Осталось только подтвердить ваш заказ</Text>
            <Total>
                <span>Final Count</span>
                <span>{formatCurrency(total)}</span>
            </Total>
            <Button onClick={() => {sendOrder()}}>Подтвердить</Button>
            </Modal>
        </OverLay>
    )
 }