import { useState } from 'react';



const getToppings = toppings => toppings && toppings.map(item => ({
    name: item,
    checked: false,
}))

export const useToppings = (openItem) => {
    
    
    const [toppings, setToppings] = useState(getToppings(openItem.toppings ? openItem.toppings : openItem.choices));
    
    const checkToppings = index => {
        setToppings(toppings.map((item, i) => {
            if(i === index) {
                item.checked = !item.checked
            }
            return item;
        }))
    }
    return {toppings, checkToppings};
}