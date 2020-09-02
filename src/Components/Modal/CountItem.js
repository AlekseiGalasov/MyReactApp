import React from 'react';
import styled from 'styled-components';


const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CountInput = styled.input`
    width:100px;
    height: 40px;
    border: none;

`;

const PlusCountButton = styled.button`
    height: 40px;
    width: 35px;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

const MinusCountButton = styled.button`
    height: 40px;
    width: 35px;
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

`; 


export function CountItem({count, setCount, onChange}) {
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