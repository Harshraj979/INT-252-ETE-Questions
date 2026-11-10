// Create a react component called TodoList that allows users to add or remove items from a to-do list . Use usestate to manage list of items and handle events for adding and removing items. Imple,emtn lifecycle methods using hooks to log messages when the component mounts and unmounts.

import {useState,useEffect} from "react";

export default function TodoList(){
    const [todos,setTodos]=useState([]);
    const [task,setTask]=useState("");

    //component lifecycle
    useEffect(()=>{
        console.log("Component mounted");
        return()=>{
            console.log("component unmounted");
        }
    },[])

    //Add todo
    const addTodo=()=>{
        if(task.trim()==="") return;
        setTodos([...todos,task]);
        setTask("");
    }

    //remove todo
    const removeTodo=(index)=>{
        setTodos(todos.filter((_,i)=>i!==index));
    }

    return(
        <div className="max-w-md mx-auto mt-10 p-5 border rounded-5">
            <h2 className="text-2xl font-bold mb-4">Todo List</h2>
            <div className="flex gap-2 mb-4">
                <input 
                    className="border p-2 rounded"
                    type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder="Enter a task"
                />
                <button
                    onClick={addTodo}
                    className="bg-green-600 tex-white px-4 py-2 rounded">
                    Add
                </button>
            </div>

            <ul>
                {todos.map((todo,index)=>(
                    <li key={index} className="flex justify-between items-center mb-2">
                        {todo}

                        <button 
                            onClick={()=>removeTodo(index)}
                            className="bg-red-600 text-white px-3 py-1 rounded">
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}