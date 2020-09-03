import React from 'react';
import styled from 'styled-components';
import { Button } from '../Styles/ButtonCheckOut.js';
import { CountItem } from './CountItem.js';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems } from '../Functions/secondaryFunctions';
import { formatCurrency } from '../Functions/secondaryFunctions';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useChoices } from '../Hooks/useChoices';
import { useToppings } from '../Hooks/useToppings';


const OverLay = styled.div`
    position:fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: rgba(0 ,0 ,0 , .5);
    z-index: 100;
`

const Modal = styled.div`
    width: 600px;
    height: 600px;
    background-color: rgb(17,157,164);
    color: white;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
`

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({img}) => img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const Content = styled.section`
    padding: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px);
    color: black;
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: inherit;
    font-size: 25px;
    letter-spacing: 3px;
    color: black;
    font-weight: 700;
`;

const CloseBtn = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(17,157,164);
    display: flex;
    justify-content: center;
    align-items: center;
    right: 20px;
    top: 20px;
    cursor: pointer;
    opacity: .5;
    transition: ease 0.5s;
    color: white;
    :hover {
        opacity: 1;
        background-color: #2EE59D;
        color: black;
    }
`

const TotalPriceItem = styled.div`
    display:flex;
    justify-content: space-between;
`;

export const ModalItem = ({openItem, setOpenItem, orders, setOrders}) => {
    
    const Counter = useCount();
    const toppings = useToppings(openItem);
    const choices = useChoices();
    
    const CloseModal = e => {
        if(e.target.id === 'OverLay' || e.target.id === 'CloseBtn') {
            return setOpenItem(null);
        }
    }

    const order = {
        ...openItem,
        count: Counter.count,
        topping: toppings.toppings,
        choices: choices.choice,
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);

    }
    return(
    <OverLay id='OverLay' onClick={CloseModal}>
            <Modal>
                <CloseBtn id='CloseBtn'>X</CloseBtn>
                <Banner img={openItem.img}></Banner>
                    <Content>
                        <HeaderContent>
                            <h3>{openItem.name}</h3>
                            <h3>{formatCurrency(openItem.price)}</h3>
                        </HeaderContent>
                        <CountItem {...Counter}/>
                        {openItem.toppings && <Toppings  {...toppings}/>}
                        {openItem.choices && <Choices {...choices} openItem={openItem}/>}
                        <TotalPriceItem>
                            <h3>Price:</h3>
                            <span>{formatCurrency(totalPriceItems(order))}</span>
                        </TotalPriceItem>
                        <Button 
                        onClick={addToOrder}
                        disabled={openItem.choices && !choices.choice}
                        >Заказать!</Button>
                    </Content>
            </Modal>
    </OverLay>
)};
    