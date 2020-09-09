import React from 'react';
import styled from 'styled-components';
import { formatCurrency } from '../Functions/secondaryFunctions'


const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
`

const Item = styled.li`
    position: relative;
    width:400px;
    height: 155px;
    background-image: ${(props) => `url(${props.img})`};
    background-size: cover;
    background-position: center;
    color: white;
    margin: 30px;
    padding: 15px;
    font-size: 30px;
    box-shadow: 0px 8px 15px rgba(0,0,0,0.1);
    z-index: 10;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: black;
        z-index: 20;
        opacity: 50%;
    }
`

const Button = styled.div`
            position: absolute;
            bottom: -40px;
            left: 0;
            width: 400px;
            height: 40px;
            background-color: rgb(48,102,190);
            color: black;
            text-align: center;
            cursor: pointer;
            border-bottom-left-radius: 25px;
            border-bottom-right-radius: 25px;
            transition: 0.3s;
            
        &:hover {
            background-color: #2EE59D;
            color: white;
        }
            
`

export const ListItem = ({ itemList, setOpenItem }) => (
    <List>
        {itemList.map(item => (
            <Item key={item.id}
                  img={item.img}
            >
                <p>{item.name}</p>
                <p>{formatCurrency(item.price)}</p>
                <Button
                  onClick={() => setOpenItem(item)}
                >+</Button>
            </Item>
        ))}
    </List>
)