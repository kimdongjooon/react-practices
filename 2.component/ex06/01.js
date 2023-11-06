import fs from 'fs';

let state = {
    order : JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
}

const updateOrderProducts1 = state.order.products;
updateOrderProducts1.push({
    no: 'c002-003',
    name: '블루양말',
    price: '1500',
    amount: 1

})

console.log(state.order.products, updateOrderProducts1, state.order.products === updateOrderProducts1);
console.log('=====================================');

state = {
    order : JSON.parse(json)
}

const updateOrderProducts2 = state.order.products.concat({
    no: 'c002-003',
    name: '블루양말',
    price: '1500',
    amount: 1

})

console.log(state.order.products, updateOrderProducts2, state.order.products === updateOrderProducts2);
console.log('=====================================');


state = {
    order : JSON.parse(json)
}

const updateOrderProducts3 = [...state.order.products, {
    no: 'c002-003',
    name: '블루양말',
    price: '1500',
    amount: 1

}];

console.log(state.order.products, updateOrderProducts3, state.order.products === updateOrderProducts3);
console.log('=====================================');