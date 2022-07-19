import React,{ useRef,useLayoutEffect,useState } from 'react';
import './Keyboard.css';

import Button from './Button';

const Keyboard = ({dispatch}) => {
    const[buttonWidth,setButtonWidth] = useState(0);
    const[buttonHeight,setButtonHeight] = useState(0);
    const keyboardRef = useRef();
    if(!keyboardRef.current) {
        keyboardRef.current = {};
        keyboardRef.current.clientWidth = 0;
        keyboardRef.current.clientHeight = 0;
    }
    useLayoutEffect(() => {
        if(window.innerHeight >= 400) {
            setButtonWidth((keyboardRef.current.clientWidth - 50) / 4);
            setButtonHeight((keyboardRef.current.clientHeight - 60) / 5);
        }
        else {
            setButtonWidth((keyboardRef.current.clientWidth - 35) / 4);
            setButtonHeight((keyboardRef.current.clientHeight - 42) / 5);
        }
    },[keyboardRef.current.clientWidth,keyboardRef.current.clientHeight]);
    const isButton = function(e) {
        if(e.target.classList.contains('number')) {
            dispatch({type : "number",payload : e.target.textContent});
        }
        else if(e.target.classList.contains('plus')) {
            dispatch({type : "operator",payload : '+'});
        }
        else if(e.target.classList.contains('minus')) {
            dispatch({type : "operator",payload : '-'});
        }
        else if(e.target.classList.contains('into')) {
            dispatch({type : "operator",payload : '*'});
        }
        else if(e.target.classList.contains('by')) {
            dispatch({type : "operator",payload : '/'});
        }
        else if(e.target.classList.contains('clear')) {
            dispatch({type : "operator",payload : 'clear'});
        }
        else if(e.target.classList.contains('backspace')) {
            dispatch({type : "operator",payload : 'backspace'});
        }
        else if(e.target.classList.contains('equals')) {
            dispatch({type : "operator",payload : 'equals'});
        }
    }
    return(
        <div ref={keyboardRef} className="keyboard" onClick={isButton}>
            <Button 
                height={buttonHeight}
                width={buttonWidth}
                size="btn-large"
            >
                calc
            </Button>
            <Button 
                height={buttonHeight}
                width={buttonWidth}
                styling='btn-operators'
                type='backspace'
            >
                <i className="fas fa-backspace backspace"></i>
            </Button>
            <Button 
                height={buttonHeight}
                width={buttonWidth}
                styling='btn-operators'
                type='clear'
            >
                AC
            </Button>
            <Button 
                height={buttonHeight}
                width={buttonWidth}
            >
                7
            </Button>
            <Button 
                height={buttonHeight}
                width={buttonWidth}
            >
                8
            </Button>
            <Button 
                height={buttonHeight}
                width={buttonWidth}
            >
                9
            </Button>
            <Button 
                height={buttonHeight}
                width={buttonWidth}
                styling='btn-operators'
                type='by'
            >
                <i className="fas fa-divide by"></i>
            </Button>
            <Button 
                height={buttonHeight}
                width={buttonWidth}
            >
                4
            </Button>
            <Button 
                height={buttonHeight}
                width={buttonWidth}
            >
                5
            </Button>
            <Button 
                height={buttonHeight}
                width={buttonWidth}
            >
                6
            </Button>
            <Button 
                height={buttonHeight}
                width={buttonWidth}
                styling='btn-operators'
                type='into'
            >
                <i className="fas fa-times into"></i>
            </Button>
            <Button 
                height={buttonHeight}
                width={buttonWidth}
            >
                1
            </Button>
            <Button 
                height={buttonHeight}
                width={buttonWidth}
            >
                2
            </Button>
            <Button 
                height={buttonHeight}
                width={buttonWidth}
            >
                3
            </Button>
            <Button 
                height={buttonHeight}
                width={buttonWidth}
                styling='btn-operators'
                type='minus'
            >
                <i className="fas fa-minus minus"></i>
            </Button>
            <Button 
                height={buttonHeight}
                width={buttonWidth}
            >
                .
            </Button>
            <Button 
                height={buttonHeight}
                width={buttonWidth}
            >
                0
            </Button>
            <Button 
                height={buttonHeight}
                width={buttonWidth}
                styling='btn-result'
                type='equals'
            >
                <i className="fas fa-equals equals"></i>
            </Button>
            <Button 
                height={buttonHeight}
                width={buttonWidth}
                styling='btn-operators'
                type='plus'
            >
                <i className="fas fa-plus plus"></i>
            </Button>
        </div>
    );
}

export default Keyboard;