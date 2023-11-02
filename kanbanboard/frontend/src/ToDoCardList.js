import React from "react";


function toDoCardList(props){

    return(
      <div class='CardList'>
        <h1>Doing</h1>

       
        <div class='Card'>
          <div class='Card__Title__open'>Write some code</div>
          <div class='Card__Details'>
            Code along with the samples in the book

            
            <div class='TaskList'>
              <ul>

                
                <li class='TaskList__Task'>
                  <input type='checkbox' checked='true' />
                  ContactList Example
                  <a href='#' class='TaskList__Task--remove'></a>
                </li>
                
                <li class='TaskList__Task'>
                  <input type='checkbox' checked='false' />
                  Kanban Example
                  <a href='#' class='TaskList__Task--remove'></a>
                </li>
                
                <li class='TaskList__Task'>
                  <input type='checkbox' checked='false' />
                  My own experiments
                  <a href='#' class='TaskList__Task--remove'></a>
                </li>                  
                

              </ul>
            </div>
            

          </div>
        </div>
        

      </div>
      
        
        
    );
}
export default toDoCardList;