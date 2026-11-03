// create a react component that shows a countdown timer and update the remaining time as counts down

import { useState,useEffect } from "react";

export default function CountDown(){
    const [time,setTime]=useState(60);
    useEffect(()=>{
        if(time<=0) return;
        const timer=setInterval(()=>{
            setTime((prev)=>prev-1);
        },1000);

        return ()=>clearInterval(timer);
    },[time]);


    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h2 className="text-3xl font-bold mb-5">CountDown TImer</h2>
            <h2 className="text-4xl font-bold text-blue-600 mb-5">{time} seconds</h2>
        </div>
    )
}
