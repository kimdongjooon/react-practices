import React ,{useState, useEffect}from 'react';
import styles from './assets/css/KanbanBoard.css';
import CardList from './CardList';
import update from 'react-addons-update';
// import cards from './assets/json/data';

const KanbanBoard = () => {
    const [cards, setCards] = useState([]);

    const fetchCards = async () => {
        try{
            const response = await fetch(`api/card`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept':'application/json'
                },
                body: null
    
            });
    
            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }

            // 카드 데이터 불러오기.
            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }
            
            

            

            // task 붙이기.
            json.data.map(card => 
                fecthTasks(card)
            );

        }catch(e){
            console.error(e);
        }
    }

    const fecthTasks = async (card) => {
        try{
            const response = await fetch(`api/task?cardNo=${card.no}`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept':'application/json'
                },
                body: null
    
            });
    
            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }

            console.log(json.data);

            const updateCard = update(card,{
                $push:{
                    tasks:{
                        $push:[json.data]
                    }
                }    
                
            });
            console.log(updateCard);
            // setCards(json.data);
        
        }catch(e){
            console.error(e);
        }
    }

    useEffect(()=>{
        fetchCards();
    },[]);

    return (
        <div className={styles.KanbanBoard}>
            <CardList 
                key={'To Do'}
                title={'To Do'}
                cards={cards.filter(card => card.status === 'ToDo')}/>
            <CardList
                key={'Doing'}
                title={'Doing'}
                cards={cards.filter(card => card.status === 'Doing')}/>
            <CardList
                key={'Done'}
                title={'Done'}
                cards={cards.filter(card => card.status === 'Done')}/>
        </div>
    );
};

export default KanbanBoard;