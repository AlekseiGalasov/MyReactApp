import { useState } from 'react';


export function useChoices() {
    const [choice, setChoices] = useState();

    function changeChoise(e) {
        setChoices(e.target.value);
    }

    return({choice, changeChoise})
}