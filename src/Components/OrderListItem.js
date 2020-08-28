import React from 'react';
import styled from 'styled-components';
import trashImage from '../images/rubbish.svg';


const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
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


export const OrderListItem = () => {
    return(
        <OrderItemStyled>
            <ItemName>Js BURGER</ItemName>
            <span>2</span>
            <ItemPrice>232</ItemPrice>
            <TrashButton></TrashButton>
        </OrderItemStyled>
    )

}