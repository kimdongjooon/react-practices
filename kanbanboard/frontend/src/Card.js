import React, {useState} from 'react';
import styles from './assets/scss/Card.scss';
import TaskList from './TaskList';
import update from 'react-addons-update';

const Card = ({no, title, description}) => {
    const [showDetails, setShowDetails] = useState(false);
    const [tasks, setTasks] = useState([]);

    const deleteTask = async (taskNo) =>{
        try{
            const response = await fetch(`api/task/${taskNo}`, {
                method: 'delete',
                headers: {
                    'Accept':'application/json'
                },
    
            });
    
            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }
            
            const newTasks = tasks.filter(task => task.no != json.data);
            setTasks(newTasks);


        
        }catch(e){
            console.error(e);
        }

    }

    const changeTaskDone = async (taskNo, done) => {
        //console.log(taskNo, done);
        try{
            const response = await fetch(`api/task/${taskNo}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept':'application/json'
                },
                body: `done=${done}`
    
            });
    
            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }
            // 
            const index = tasks.findIndex(task => task.no === json.data.no) 
            console.log('index= '+index);
            const newTasks = update(tasks,{
                [index]:{
                    done:{
                        $set: json.data.done
                    }
                }
            });
            
            setTasks(newTasks);


        
        }catch(e){
            console.error(e);
        }


    }
    const addTask = async(name) => {
        const newTask = {
            no : null,
            name : name,
            done : "N",
            cardNo: no
        }

        console.log(newTask);
        try{
            const response = await fetch(`api/task`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept':'application/json'
                },
                body: JSON.stringify(newTask)
    
            });
    
            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }
            
            console.log(json.data);

            setTasks([json.data, ...tasks]);
        
        }catch(e){
            console.error(e);
        }
    }

    return (
        <div className={styles.Card}>
            <div
                className={
                    showDetails ?
                        [styles.Card__Title, styles.Card__Title__open].join(' '):
                        styles.Card__Title
                }
                onClick={async (e) => {
                    if(!showDetails){ 
                        try{
                            const response = await fetch(`api/task?cardNo=${no}`, {
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

                            setTasks(json.data);
                        
                        }catch(e){
                            console.error(e);
                        }
                        
                    }

                    setShowDetails(!showDetails);
                }}>
                {title}
            </div>
            {showDetails ? 
                <div className={styles.Card__Details}>
                    {description}
                    <TaskList 
                        tasks={tasks}
                        addTask={addTask}
                        changeTaskDone={changeTaskDone}
                        deleteTask={deleteTask}
                        />
                </div>:
                null
            }   
        </div>
    );
};

export default Card;