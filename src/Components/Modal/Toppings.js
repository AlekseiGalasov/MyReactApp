import React from 'react';
import styled from 'styled-components';


const ToppingWrap = styled.div`
    column-count: 2;
    column-gap: 15px;
    max-width: 500px;
    margin: 0 auto;
`;

const ToppingLabel = styled.label`
    cursor: pointer;
    display: block;
`;
const ToppingInput = styled.input`
    cursor: pointer;
    margin-left: 5px;
`;

export function Toppings({toppings, checkToppings}) {
    return(
        <>
        <h3>Toppings:</h3>
        <ToppingWrap>
            {toppings.map((item, i) => (
                <ToppingLabel key={i}>
                <ToppingInput 
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => checkToppings(i)}
                
                ></ToppingInput>
                {item.name}
            </ToppingLabel>
            ))}
            
        </ToppingWrap>
        </>
    )
}