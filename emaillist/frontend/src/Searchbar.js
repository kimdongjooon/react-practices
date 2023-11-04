import React from "react";
import styles from './assets/scss/Searchbar.scss';

function Searchbar({searchEmail}){
    return(
        <div className={styles.Searchbar}>
                <input 
                    type='text' 
                    placeholder='찾기'
                    onChange={e => {
                        console.log(e.target.value);
                        searchEmail(e.target.value);
                    }}
                    />
        </div>
    );
}

export default Searchbar;
 
 
 