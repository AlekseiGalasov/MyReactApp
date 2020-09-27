import { useState } from 'react';


export function useThanks() {
    const [thanks, setThanks] = useState(false);

    return({thanks, setThanks})
}