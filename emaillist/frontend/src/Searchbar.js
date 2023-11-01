import React from "react";
import styles from './assets/scss/Searchbar.scss';

function Searchbar(props){
    return(
        <div className={styles.Searchbar}>
                <input type='text' placeholder='찾기'/>
        </div>
    );
}

export default Searchbar;
 
 
 