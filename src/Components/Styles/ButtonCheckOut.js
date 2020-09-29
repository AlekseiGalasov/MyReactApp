import styled from 'styled-components';
import { device } from './devices'



export const Button = styled.button`
    width: 250px;
    height: 65px;
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
    font-weight: 700;
    text-transform: uppercase;
    margin: 0 auto;

    :hover {
        background-color: #2EE59D;
        box-shadow: 0px 15px 20px rgba(109, 157, 197, 0.4);
        color: #fff;
        transform: translateY(-4px);
    }
    :focus {
        outline: none;
    }
    :disabled {
        background-color: #fff;
        color: #bbb;
        transform: none;
        box-shadow: none;

    }
    @media ${device.laptopL} {
        padding: 10px;
    }
    @media ${device.laptop} {
        width: 200px;
        height: 50px;
        padding: 10px;
    }
    @media ${device.tablet} {
        width: 140px;
        height: 40px;
        letter-spacing: 1.5px;
        font-size: 13px;
        padding: 10px;
    }
`