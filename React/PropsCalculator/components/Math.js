import React from "react";
let value;

function Math(props) {
    switch (props.operator) {
        case '+':
            value = props.num1 + props.num2;
            break;
        case '-':
            value = props.num1 - props.num2;
            break;
        case '*':
            value = props.num1 * props.num2;
            break;
        case '/':
            value = props.num1 / props.num2;
            break;
    }
    return (<span style = {{fontSize:value}}>{value}</span>)
}

export default Math;