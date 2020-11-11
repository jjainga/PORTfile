import React from "react";

const LanguageList = (props) => {
console.log(props.props)
function objToArr(obj) {
    if(obj != null && obj !== undefined){
        let objArr = Object.entries(obj);
        return objArr;
    } ; 
}

function codeSum(obj) {
    const sumValues = object => Object.values(object).reduce((a, b) => a + b);
        return sumValues(obj);
    }

function codePercentage(value) {
    let percent = Math.round((value/codeSum(props))*100);
    return percent;
}

    return <ul className="list-group">
                {objToArr(props).map(code => <li className="list-group-item">{code[0]}: {codePercentage(code[1])}%</li>)}
            </ul>
}
    export default LanguageList;