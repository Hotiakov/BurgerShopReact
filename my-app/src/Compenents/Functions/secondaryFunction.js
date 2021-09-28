
export const addCurrency = convertNum => convertNum.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});

export const countTotalPrice = order => {
    let arr = [];
    if(order.topping){
        arr = order.topping.filter(item => item.checked);
    }
    return (order.price + arr.length*0.1*order.price)*order.count;

}
