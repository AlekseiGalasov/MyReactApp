import React, { useRef }  from 'react';
import styled from 'styled-components';
import trashImage from '../../images/rubbish.svg';
import { totalPriceItems } from '../Functions/secondaryFunctions'
import { formatCurrency } from '../Functions/secondaryFunctions'
import { device } from '../Styles/devices'


const OrderItemStyled = styled.li`
    display: flex;
    margin: 5px 0;
    @media ${device.laptop} {
        font-size: 14px;
        line-height: 25px;
    }
    @media ${device.tablet} {
        font-size: 12px;
        line-height: 24px;
    }
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

    @media ${device.laptop} {
        font-size: 11px;
        padding: 3px;
    }
    @media ${device.tablet} {
        font-size: 9px;
        padding: 1px;
    }
`;


export const OrderListItem = ({order, index, deleteItem, setOpenItem }) => {
    const topping = order.topping.filter(item => item.checked)
    .map(item => item.name)
    .join(', ');

    const refDeleteButton = useRef(null);
    return(
        <>
        <OrderItemStyled onClick={(e) => e.target !== refDeleteButton.current && setOpenItem({...order, index})}>
            <ItemName>{order.name} </ItemName>
            <span>{order.count}</span>
            <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
            <TrashButton ref={refDeleteButton} onClick={() => deleteItem(index)}></TrashButton>
        </OrderItemStyled>
        <ToppingsWrap>
            {order.choices && <ToppingItem>Выбор: {order.choices}</ToppingItem>}
            {topping && <ToppingItem>Добавки:{topping}</ToppingItem>}
        </ToppingsWrap>
        </>
    )

}