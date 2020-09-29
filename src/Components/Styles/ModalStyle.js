import styled from 'styled-components';
import { device } from './devices'

export const Total = styled.div`
display: flex;
padding: 30px;
& span:first-child {
    flex-grow: 1;
}
& span:nth-child(2) {
    margin-right: 25px;
}
    @media ${device.laptopL} {
            font-size: 16px;
    }
    @media ${device.laptop} {
            font-size: 14px;
    }
    @media ${device.tablet} {
            padding: 5px;
            font-size: 10px;
    }
`;

export const OrderTitle = styled.h2`
    text-align: center;
    @media ${device.laptop} {
            font-size: 18px;
    }
    @media ${device.tablet} {
            font-size: 16px;
    }
`;

export const CloseBtn = styled.div`
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

export const OverLay = styled.div`
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

export const Modal = styled.div`
    position: relative;
    padding: 30px;
    background-color: rgb(17,157,164);
    text-align: center;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
`;