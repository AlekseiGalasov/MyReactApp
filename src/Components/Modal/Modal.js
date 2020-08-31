import React from 'react';
import styled from 'styled-components';
import { Button } from './ButtonCheckOut.js';

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
    align-items: center;
    justify-content: space-between;
    height: calc(100% - 200px);
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

export const ModalItem = ({openItem, setOpenItem, orders, setOrders}) => {
    
    const CloseModal = e => {
        if(e.target.id === 'OverLay' || e.target.id === 'CloseBtn') {
            return setOpenItem(null);
        }
    }

    const order = {
        ...openItem
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
                            <h3>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency:'EUR'})}</h3>
                        </HeaderContent>
                        <Button onClick={addToOrder}>Заказать!</Button>
                    </Content>
            </Modal>
    </OverLay>
)};
    