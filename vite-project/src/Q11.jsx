// Create a simple counter application using React hooks. The application should have two buttons one to increment other to decrement additionally use useEffect to log a message to console whenever counter value changes.

import {useState,useEffect} from "react";

export default function Counter(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("The count is: ",count);
    },[count]);

    return(
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <h1 className="text-3xl font-bold mb-5">Counter App</h1>
            <h2 className="text-4xl font-bold mb-5">Count:{count}</h2>

            <div className="flex gap-4">
                <button
                    onClick={()=>setCount(count+1)}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg"
                >
                    Increment
                </button>
                <button
                    onClick={()=>setCount(count-1)}
                    className="bg-red-600 text-white px-6 py-3 rounded-lg"
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}