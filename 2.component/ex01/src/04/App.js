import React from 'react';
import FoodList from './FoodList';

function App() {
    return (
        <div id={'App'}>
            <MyComponent 
                props01={10} // 숫자
                props02={''} // 문자 
                props03={true} // 불린 
                props04={{no:1, name:'둘리'}} // 객체 
                props05={[]} // 배열 
                props06={() => {}} // 함수 
            />
        </div>
            
    );
}

export{App};