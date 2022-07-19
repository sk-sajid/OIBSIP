import React from 'react';
import './Screen.css';

let exp = "";
let pointCount = 0;
let isMoreThanNineCharacters = 0;

const Screen = ({val}) => {

    const isOperator = (num) => {
        return num === '+' || num === '-' || num === '*' || num === '/';
    }

    // if AC clicked
    if(val === 'clear') {
        exp = '0';
        pointCount = 0;
    }

    // if backspace clicked
    else if(val === 'backspace') {

        // if point is deleted
        if(exp[exp.length - 1]) pointCount = 0;

        // if operator is deleted
        if(isOperator(exp[exp.length - 1])) pointCount = 1;

        exp = exp.slice(0,exp.length - 1);

        // if expression becomes empty("") after deleting reset it to 0 
        if(exp === '') exp = "0";
    }

    // if equal to is clicked
    else if(val === 'equals') {

        // if last char is operator
        if(isOperator(exp[exp.length - 1])) {
            exp = "" + eval(exp.slice(0,exp.length - 1));
            let isDecimal = exp.indexOf('.');
            if(isDecimal !== -1) {
                pointCount = 1;
            }
            else pointCount = 0;
        }

        // in all other cases
        else {
            exp = "" + eval(exp);

            // after evaluating if it is decimal setting it's precision
            let isDecimal = exp.indexOf('.');
            if(isDecimal !== -1) {
                pointCount = 1;
                exp = exp.slice(0,isDecimal) + exp.slice(isDecimal,isDecimal + 5);
            }
            else pointCount = 0;
        }
    }

    // if numbers,point,arithmetic operators clicked
    else {

        // if expression is 0 and operator is clicked
        if(exp === "0" && isOperator(val)) {
            exp = exp + val;
        }

        // if expression is 0 and other than operators,point are clicked
        else if(exp === "0" && val !== '.') {
            exp = "" + val;
        }

        // if expression is equal to or more than fifteen characters OR
        // last char of expression is operator AND the current value is also an operator
        else if((exp.length >= 15) || (isOperator(exp[exp.length - 1]) && isOperator(val))) {
            exp = exp.slice();
        }

        // if last character is 0 AND the before character is operator AND the current value is not a operator AND a point
        else if((exp[exp.length - 1] === '0') && isOperator(exp[exp.length - 2]) && !isOperator(val) && val !== '.') {
            exp = exp.slice();
        }

        else if(pointCount === 1 && val === ".") {
            exp = exp.slice();
        }

        // In all other cases
        else {

            // if point is clicked
            if(val === ".") pointCount = 1;

            // if operator is clicked
            if(isOperator(val)) pointCount=0;

            exp = exp + val;
        }
    }
    // if expression length is more than nine characters in the mobiles make them small
    if(exp.length > 9) {
        document.querySelector(".screen").classList.add("small");
        isMoreThanNineCharacters++;
    }
    // after becoming more than nine characters if it reduces below nine then again make them big
    if(exp.length <= 9 && isMoreThanNineCharacters !== 0) {
        document.querySelector(".screen").classList.remove("small");
    }
    return(
        <div className="screen">
            {exp}
        </div>
    );
}

export default Screen;