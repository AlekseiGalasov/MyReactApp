import React from 'react';
import { AdittionalChoicesWrap, AdittionalChoicesInput, AdittionalChoicesLabel} from '../Styles/AdittionalChoices';


export function Toppings({toppings, checkToppings}) {
    return(
        <>
        <h3>Toppings: </h3>
        <AdittionalChoicesWrap>
            {toppings.map((item, i) => (
                <AdittionalChoicesLabel key={i}>
                <AdittionalChoicesInput 
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => checkToppings(i)}
                ></AdittionalChoicesInput>
                {item.name}
            </AdittionalChoicesLabel>
            ))}
            
        </AdittionalChoicesWrap>
        </>
    )
}