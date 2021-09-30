
export const addCurrency = convertNum => convertNum.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});

export const countTotalPrice = order => {
    let arr = [];
    if(order.topping){
        arr = order.topping.filter(item => item.checked);
    }
    return (order.price + arr.length*0.1*order.price)*order.count;
}

export const projection = options => {
    const keys = Object.keys(options);
    return obj => keys.reduce((newObj, option) => {
        newObj[option] = options[option].reduce((value, fn, i)=>(i ? fn(value) : obj[fn]), null);
        return newObj;
    },{});
}
