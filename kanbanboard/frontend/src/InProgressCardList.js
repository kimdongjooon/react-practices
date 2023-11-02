import React from "react";

function inProgressCardList(props){

    return(
        <div class='CardList'>
        <h1>In Progress</h1>

        <div class='Card'>
          <div class='Card__Title'>Read the Book</div>
          <div class='Card__Details'>
            I should read the whole book

            <div class='TaskList'>
              <ul>
              </ul>
            </div>


          </div>
        </div>


      </div>
        
    );
}
export default inProgressCardList;