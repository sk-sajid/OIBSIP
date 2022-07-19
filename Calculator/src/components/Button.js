import React from 'react';
import './Button.css';

const STYLES = ['btn-operators','btn-result'];
const SIZES = ['btn-large'];
const TYPES = ['plus','minus','into','by','equals','backspace','clear'];

const Button = (props) => {
    const buttonStyle = STYLES.includes(props.styling) ? props.styling : '';
    const buttonSize = SIZES.includes(props.size) ? props.size : '';
    const type = TYPES.includes(props.type) ? props.type : 'number';
    if(!props.size) {
        return(
            <button 
                className={`btn ${buttonStyle} ${buttonSize} ${type}`}
                style={{height:`${props.height}px`,width:`${props.width}px`}}
            >
                {props.children}
            </button>
        );
    }
    return(
        <button 
            className={`btn ${buttonStyle} ${buttonSize}`}
            style={{height:`${props.height}px`,width:`${(2 * props.width) + 10}px`}}
        >
            {props.children}
        </button>
    );
}

export default Button;