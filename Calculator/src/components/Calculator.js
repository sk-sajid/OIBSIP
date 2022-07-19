import React,{useReducer,useEffect,useState} from 'react';
import './Calculator.css';

import Screen from './Screen';
import Keyboard from './Keyboard';

const reducer = (state,action) => {
    switch(action.type) {
        case 'number' :
            return {val : action.payload};
        case 'operator' :
            return {val : action.payload};
        default :
            return state;
    }
}

const Calculator = () => {
    const[state,dispatch] = useReducer(reducer,{val : "0"});
    const[load,setLoad] = useState(false);
    const rerender = () => {
        setLoad(!load);
    }
    useEffect(() => {
        window.addEventListener("resize",rerender);
        return () => {
            window.removeEventListener("resize",rerender);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[load]);
    return(
        <div className="calculator">
            <Screen val={state.val}/>
            <Keyboard dispatch={dispatch}/>
        </div>
    );
}

export default Calculator;