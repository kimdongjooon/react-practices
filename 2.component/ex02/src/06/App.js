import React from 'react';
import styles from './assets/scss/App.scss';

import styled from 'styled-components';

const StyledH1 = styled.h1`
    width: 420px;
    font-size: 14px;
    text-align: center;
    margin: 100px auto;
    padding: 20px;
    border: 2px solid #999;
    color: #1144fe;
    background-color: #cdc1ce
`;

const StyledDiv = styled.div`
    text-align: center;
`;
function App() {
    return (
        <div id={styles.App}>
            
            <StyledDiv id={'App'}><StyledH1>CSS in JS: Styled Component</StyledH1></StyledDiv>

            <h1 className={styles.Header}>CSS in JS: Styled Component</h1>
        </div>
            
    );
}

export{App};