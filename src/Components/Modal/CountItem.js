import React from 'react';
import styled from 'styled-components';
import { device } from '../Styles/devices'


const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media ${device.tablet} {
        flex-direction: column;
        text-align: center;
        font-size: 14px;
        & + h3 {
            font-size: 14px;
            padding: 10px 0;
            text-align: center;
        }
        & > h3 {
            padding: 10px 0;
            font-size: 14px;
        }
    }
`;

const CountInput = styled.input`
    width:100px;
    height: 40px;
    border: none;
    @media ${device.tablet} {
        height: 30px;
        width:80px;
    }

`;

const PlusCountButton = styled.button`
    height: 40px;
    width: 35px;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    &:active {
		background-color: #2EE59D;
	}
    @media ${device.tablet} {
        height: 30px;
        width:35px;
    }
`;

const MinusCountButton = styled.button`
    height: 40px;
    width: 35px;
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    &:active {
		background-color: #2EE59D;
	}
    @media ${device.tablet} {
        height: 30px;
        width:35px;
    }
`; 


export function CountItem({count, setCount, onChange, isEdit, openItem}) {
    return(
    <CountWrapper>
        <h3>Count:</h3>
        <div>
        <PlusCountButton disabled={count <= 1} onClick={() => setCount(count - 1)}>-</PlusCountButton>
        <CountInput type="number" min="1" max="99" value={count < 1 ? 1 : count && count > 99 ? 99 : count} onChange={onChange}></CountInput>
        <MinusCountButton disabled={count >= 99} onClick={() => setCount(count + 1)}>+</MinusCountButton>
        </div>
    </CountWrapper>
    )
}