// create a React component that renders a form with 2 input fields for name and email and displays a welcome message when the form is submitted 
// and also uses a toggle button to switch between dark theme and light theme

import { useState } from "react";

export default function FormQ3(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [submitted,setSubmitted]=useState(false);
    const [darkMode,setDarkMode]=useState(false);

    function handleSubmit(e){
        e.preventDefault();
        setSubmitted(true);
    }

    return(
        <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode? "bg-gray-900 text-white":"bg-gray-100 text-gray-900"}`}>
            <h1 className="text-3xl font-bold mb-5"> User Form</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input 
                    type="text" 
                    placeholder="Enter Name" 
                    onChange={(e)=>setName(e.target.value)}
                    className="p-3 border rounded text-black bg-white"
                    required
                />
                 <input
                    type="email"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 border rounded text-black bg-white"
                    required
                />
                <button className="bg-amber-600 text-white p-2 rounded">
                    Submit
                </button>
            </form>
            {submitted && <h2 className="mt-4">Welcome {name} {email}</h2>}

            <button
                onClick={() => setDarkMode(!darkMode)}
                className="mt-5 bg-purple-600 text-white p-2 rounded">
                Toggle Theme
            </button>
        </div>
    )
}

