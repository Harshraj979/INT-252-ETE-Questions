// create a react component that features an embedded calculator for basic arithematic operation  with real time result display and changing events upon user interaction

import {useState} from "react";

export default function Calculator(){
    const [num1,setNum1]=useState("");
    const [num2,setNum2]=useState("");
    const [operator,setOperator]=useState("+");

    let result="";

    if(num1!=="" && num2!==""){
        if (operator === "+") {
            result = Number(num1) + Number(num2);
        }
        else if (operator === "-") {
            result = Number(num1) - Number(num2);
        }
        else if (operator === "*") {
            result = Number(num1) * Number(num2);
        }
        else if (operator === "/") {
            if (Number(num2) !== 0) {
                result = Number(num1) / Number(num2);
            }
            else {
                result = "Cannot divide by zero";
            }
        }
    }

    return(
        <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg mt-4">
                <h1 className="text-3xl font-bold mb-6 text-center">Calculator</h1>
                 <input
                    type="number"
                    placeholder="Enter first number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    className="border p-3 rounded w-full mb-4"
                />
                <select
                    value={operator}
                    onChange={(e) => setOperator(e.target.value)}
                    className="border p-3 rounded w-full mb-4"
                >
                    <option value="+">Addition (+)</option>
                    <option value="-">Subtraction (-)</option>
                    <option value="*">Multiplication (*)</option>
                    <option value="/">Division (/)</option>
                </select>
                <input
                    type="number"
                    placeholder="Enter second number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    className="border p-3 rounded w-full mb-4"
                />
                <h2 className="text-xl font-semibold text-center mt-4">
                    Result: {result}
                </h2>
            </div>
        </div>
    )
}