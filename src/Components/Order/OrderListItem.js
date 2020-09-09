import React, { useRef }  from 'react';
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
    color: #9A9A9A;
`;


export const OrderListItem = ({order, index, deleteItem, setOpenItem }) => {
    const topping = order.topping.filter(item => item.checked)
    .map(item => item.name)
    .join(', ');

    const refDeleteButton = useRef(null);
    return(
        <>
        <OrderItemStyled onClick={(e) => e.target !== refDeleteButton.current && setOpenItem({...order, index})}>
            <ItemName>{order.name} {order.choices}</ItemName>
            <span>{order.count}</span>
            <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
            <TrashButton ref={refDeleteButton} onClick={() => deleteItem(index)}></TrashButton>
        </OrderItemStyled>
        <ToppingsWrap>
            {topping && <ToppingItem>Tops:{topping}</ToppingItem>}
        </ToppingsWrap>
        </>
    )

}