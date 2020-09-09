import { useState } from 'react';



export function useCount(start) {
    const [count, setCount] = useState( start ||1);

    const onChange = e => setCount(e.target.value);

    return {count, setCount, onChange};
} 