//Create a redux setup for a todo list application. Implement the following
//1. A redux store
//2. A reducer to handle ADD_TODO and REMOVE_TODO actions
//3. Actions to add and remove todos
//4. A react component connected to the redux store that displays the list of todos and has functionality to add and remove todos

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./Q18";

export default function TodoList() {
    const [task, setTask] = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (task.trim() === "") return;
        dispatch(addTodo(task));
        setTask("");
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Todo List</h2>

            <div className="flex gap-4">
                <label className="block mb-1 font-semibold">Task</label>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleAdd}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                >
                    Add Task
                </button>
            </div>
            <ul className="mt-4">
                {todos.map((todo, index) => (
                    <li key={index} className="flex justify-between items-center mb-2">
                        <span>{todo}</span>
                        <button
                            onClick={() => dispatch(removeTodo(index))}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}