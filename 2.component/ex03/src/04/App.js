import React, {useRef}from 'react';
import logo from './assets/images/react-logo.png';

function App() {
    const imageRef = useRef(null);
    

    const onKeyPressInput = (e) =>{
        if(e.key === 'Enter'){
            console.log(e.target.value);
        }
    };

    const onFocusInput = (e) =>{
        console.log('focused');
    };

    const onBlurInput = (e) =>{
        console.log('blur');
    };

    const onMouseOverImage = (e) =>{
        const offsetTop = imageRef.current.offsetTop;
        const offsetLeft = imageRef.current.offsetLeft;
        console.log('mouseover',`x=${e.clientX-offsetLeft}, y=${e.clientY-offsetTop}`);
    };

    const onMouseMoveImage = (e) =>{
        const offsetTop = imageRef.current.offsetTop;
        const offsetLeft = imageRef.current.offsetLeft;
        // console.log('mousemove',`x=${e.clientX}, y=${e.clientY}`);
        console.log('mousemove',`x=${e.clientX-offsetLeft}, y=${e.clientY-offsetTop}`);
    };

    const onMouseOutImage = (e) =>{
        const offsetTop = imageRef.current.offsetTop;
        const offsetLeft = imageRef.current.offsetLeft;
        console.log('mouseout',`x=${e.clientX-offsetLeft}, y=${e.clientY-offsetTop}`);
        
    };

    const onMouseDownImage = (e) =>{
        console.log('mousedown',`x=${e.clientX}, y=${e.clientY}`);
    };

    const onMouseUpImage = (e) =>{
        console.log('mouseup',`x=${e.clientX}, y=${e.clientY}`);
    };

    const onClickImage = (e) =>{
        console.log('mouseclick',`x=${e.clientX}, y=${e.clientY}`);
    };

    const onDoubleClickImage = (e) =>{
        console.log('mousedoubleclick',`x=${e.clientX}, y=${e.clientY}`);
    };
    

    return (
        <>
            <h2>Event Handler 예제</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyPress={ onKeyPressInput }
                onFocus={ onFocusInput }
                onBlur={ onBlurInput } />
                <br/>
                <br/>
            <img
                ref={ imageRef }
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={ logo }
                onMouseOver={ onMouseOverImage }
                onMouseMove={ onMouseMoveImage }
                onMouseOut={ onMouseOutImage }
                onMouseDown={ onMouseDownImage }
                onMouseUp={ onMouseUpImage }
                onClick={ onClickImage }
                onDoubleClick={ onDoubleClickImage }/>
        </>
    );
}

export default App;