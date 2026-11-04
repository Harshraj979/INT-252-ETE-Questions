//Create a component called ContactForm that includes fields for name,email,message. Implement both controlled and uncontrolled component 
// for these fields.The NAmeand email fields should be controlled while the message should be uncontrolled component. 
// Add a submit button that logs form data to the console when clicked

import {useState,useRef} from "react";

export default function ContactForm(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");

    const messageRef=useRef();

    function handleSubmit(e){
        e.preventDefault();

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", messageRef.current.value);
    }

    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-bold mb-5">Contact Form</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-8 rounded-xl shadow">
                {/* Controlled component */}
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-3 rounded"
                    required
                />
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-3 rounded"
                    required
                />
                {/* Uncontrolled Message Field */}
                <textarea
                    ref={messageRef}
                    placeholder="Enter Message"
                    className="border p-3 rounded"
                    required
                />

                <button
                    type="submit"
                    className="bg-cyan-600 text-white p-3 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}