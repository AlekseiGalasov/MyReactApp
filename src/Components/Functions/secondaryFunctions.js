


export const totalPriceItems = (order) => {
    return order.price * order.count;
}



export const formatCurrency = (value) => {
    return value.toLocaleString('ru-RU', {style: 'currency', currency:'EUR'})
};