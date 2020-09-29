import React, { useContext } from 'react';
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
import { OverLay, CloseBtn} from '../Styles/ModalStyle'
import { Context } from '../Functions/context'
import { device } from '../Styles/devices'

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
    @media ${device.laptopL} {
        width: 550px;
        height: 500px;
    }
    @media ${device.tablet} {
        width: 90%;
        height: 400px;
    }
    
`

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({img}) => img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media ${device.laptopL} {
        height: 180px;
    }
    @media ${device.tablet} {
        height: 100px;
    }
`

const Content = styled.section`
    padding: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px);
    color: black;
    @media ${device.laptopL} {
        padding: 15px;
    }
    @media ${device.tablet} {
        padding: 10px;
        height: calc(100% -100px);
    }
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: inherit;
    font-size: 25px;
    letter-spacing: 3px;
    color: black;
    font-weight: 700;
    @media ${device.laptopL} {
        font-size: 20px;
        padding: 10px 0;
    }
    @media ${device.tablet} {
        font-size: 16px;
        letter-spacing: 2px;
    }

`;

const TotalPriceItem = styled.div`
    display:flex;
    justify-content: space-between;
    @media ${device.laptopL} {
        font-size: 18px;
        letter-spacing: 2px;
        padding: 10px 0;
    }
    @media ${device.tablet} {
        font-size: 14px;
        letter-spacing: 2px;
        padding: 10px 0;
    }
`;

export const ModalItem = () => {
    
    const {
        openItem : {openItem, setOpenItem},
        orders : {orders, setOrders}
    } = useContext(Context);

    const Counter = useCount(openItem.count);
    const toppings = useToppings(openItem);
    const choices = useChoices();
    const isEdit = openItem.index > -1;
    

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


    const editOrder = () => {
        const newOrders = [...orders];
        newOrders[openItem.index] = order;
        setOrders(newOrders);
        setOpenItem(null);
    }

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
                        <Button id='OrderBtn'
                        onClick={isEdit ? editOrder : addToOrder}
                        disabled={openItem.choices && !choices.choice}
                        >{isEdit ? 'Изменить' : 'Заказать'}</Button>
                    </Content>
            </Modal>
    </OverLay>
)};
    