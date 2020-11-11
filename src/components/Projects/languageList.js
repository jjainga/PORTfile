import React from "react";

const LanguageList = (props) => {
const list = props.props
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
    let percent = Math.round((value/codeSum(props.props))*100);
    return percent;
}


    return (
        <div>
            {
                props.props != undefined ? (
                    <ul className="list-group">
                        {objToArr(props.props).map((code,i) => <li className="list-group-item" key={i}>{code[0]}: {codePercentage(code[1])}%</li>)}
                    </ul>
                ): null
            }
        </div>
    )
}
    export default LanguageList;