import React ,{useState, useEffect} from 'react';
import styles from './assets/css/KanbanBoard.css';
import CardList from './CardList';

const KanbanBoard = () => {
    const [cards, setCards] = useState(null);

    const fetchCards = async () => {
        try{
            const response = await fetch(`api/card`, {
                method: 'get',
                headers: {
                    'Accept':'application/json'
                },
    
            });
    
            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }

            // 카드 데이터 불러오기.
            const json = await response.json();

            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }
            
            // 카드 데이터 붙이기.
            setCards(json.data);

        }catch(e){
            console.error(e);
            // window.location.href = '/error' 
            // 이거는 안됨. 사이트로 가긴하겠지만 경로로 직접 렌더링 시켜주기때문에 진행중에 로드된 컴포넌트들이 다 초기화됨.
        }
    }

    useEffect(()=>{
        fetchCards();
    },[]);

    return (
        cards ?
        <div className={styles.KanbanBoard}>
            <CardList 
                key={'To Do'}
                title={'To Do'}
                cards={cards?.filter(card => card.status === 'ToDo')}/>
            <CardList
                key={'Doing'}
                title={'Doing'}
                cards={cards?.filter(card => card.status === 'Doing')}/>
            <CardList
                key={'Done'}
                title={'Done'}
                cards={cards?.filter(card => card.status === 'Done')}/>
        </div>      
        :
        <></>
    );
};

export default KanbanBoard;