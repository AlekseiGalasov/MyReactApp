import React from 'react';
import styled from 'styled-components';
import { formatCurrency } from '../Functions/secondaryFunctions'
import { device } from '../Styles/devices'

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

    @media ${device.laptopL} {
        width: 250px;
        height: 120px;
        & > p {
            font-size: 20px;
        }
    }
    @media ${device.laptop} {
        width: 240px;
        height: 100px;
        margin: 30px 10px;
        font-size: auto;
        & > p {
            font-size: 18px;
        }
    }
    @media ${device.tablet} {
        width:270px;
        height: 130px;
        padding: 30px;
        & > p {
            font-size: 16px;
        }
    }
    @media ${device.mobileL} {
        width:100%;
        height: 120px;
        & > p {
            font-size: 16px;
        }
    }
`

const Button = styled.div`
            position: absolute;
            bottom: -40px;
            left: 0;
            width: inherit;
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
        @media ${device.laptop} {
            bottom: -30px;
            height: 30px;
            line-height: 30px;
  }
        @media ${device.tablet} {
            bottom: -30px;
            height: 30px;
            line-height: 30px;
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