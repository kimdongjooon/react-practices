import fs from 'fs';
import update from 'react-addons-update';


let state = {
    order : JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

const updateOrder = update(state.order,{
    // 프로퍼티 변경
    receive: {
        $set: '강남구 논현동'
    },

    // nest 객체 프로퍼티 변경.
    payment: {
        method: {
            $set: 'mobile'
        }
    },

    
    products:{
        // 배열 객체 프로퍼티 변경
        '0':{
            amount:{
                $set:200
            }
        },

        // 배열 요소 추가하기.
        $push:[{
            no: "s002-001",
            name: "스포츠 양말",
            price: 20000,
            amount: 5

        }]
    },

    




});

console.log(updateOrder, state.order)