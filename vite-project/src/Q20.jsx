//Implement a countdown timer component using the useState and useEffect hooks. The timer should start from  a specific number of seconds and count to zero updating every seconds.
//Add a reset button to the component that allows the user to reset the countdown button to its initial value

import {useState,useEffect} from "react";

export default function CountdownTimer(){
    const [time,setTime]=useState(10);
    const [initialTime,setInitialTime]=useState(10);

    useEffect(()=>{
        if(time<=0) return;
        const timer=setInterval(()=>{
            setTime((prev)=>prev-1);
        },1000)
        return ()=>clearInterval(timer);
    },[time])

    const handleReset=()=>{
        setTime(initialTime);
    }

    return(
        <div className="max-w-sm mx-auto mt-10 p-5 border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Countdown Timer</h2>
            <input 
                type="number" min ="1" value={initialTime} onChange={(e)=>{
                    setInitialTime(Number(e.target.value)); 
                    setTime(Number(e.target.value))
                }}
                className="border p-2 rounded w-full mb-4"
            />
            <h1 className="text-3xl font-bold mb-4">{time} Seconds</h1>
            {time === 0 && <p className="text-green-600">Time's Up!</p>}
            <button
                onClick={handleReset}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Reset
            </button>
        </div>
    )
}