import React from 'react';
import { AdittionalChoicesWrap, AdittionalChoicesInput, AdittionalChoicesLabel} from '../Styles/AdittionalChoices';


export function Choices({ openItem, choice, changeChoise}) {
    return(
        <>
        <h3>Choices: </h3>
        <AdittionalChoicesWrap>
            {openItem.choices.map((item, i) => {
            return(
                <AdittionalChoicesLabel key={i}>
                <AdittionalChoicesInput 
                    type="radio"
                    name="choices"
                    checked={choice === item}
                    value={item}
                    onChange={changeChoise}
                ></AdittionalChoicesInput>
                {item}
            </AdittionalChoicesLabel>
            )})}
            
        </AdittionalChoicesWrap>
        </>
    )
}