//c reate controlled component for student application that share functionality to another student by using render prop

import { useState } from "react";

export default function StudentApplication({render}){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");

    function handleSubmit(e){
        e.preventDefault();
        alert("Student Application submitted successfully for "+name);
    }

    return render({
        name,email,setName,setEmail,handleSubmit
    })
}