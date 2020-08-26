import React from 'react';
import styled from 'styled-components';

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
    margin-bottom: 20px;
`

const H3 = styled.h3`
    font-size: 30px;
    letter-spacing: 3px;
    padding: 10px 0;
    color: black;
`
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
    :hover {
        opacity: 1;
    }
`

const Button = styled.button`
    padding: 15px 40px;
    background-color: rgb(48,102,190);
    border: none;
    color: black;
    font-weight: 500;
    font-family: 'Roboto',sans-serif;
    cursor: pointer;
    letter-spacing: 2.5px;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0,0,0,0.1);
    transition: all 0.3s ease 0s;

    :hover {
        background-color: #2EE59D;
        box-shadow: 0px 15px 20px rgba(109, 157, 197, 0.4);
        color: #fff;
        transform: translateY(-4px);
    }
    :focus {
        outline: none;
    }
`

export const ModalItem = ({openItem, setOpenItem}) => {
    
    function CloseModal(e) {
        if(e.target.id === 'OverLay' || e.target.id === 'CloseBtn') {
            return setOpenItem(null);
        }
    }

    if(openItem === null) return null; 
    return(
    <OverLay id='OverLay' onClick={CloseModal}>
            <Modal>
                <CloseBtn id='CloseBtn'>X</CloseBtn>
                <Banner img={openItem.img}></Banner>
                <H3>{openItem.name}</H3>
                <H3>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency:'EUR'})}</H3>
                <Button>Заказать!</Button>
            </Modal>
    </OverLay>
)};
    