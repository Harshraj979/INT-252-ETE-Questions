//create a react component taskManager that allows user to add update and delete tasks using the useReducer hook to manage state. Each state should have the title and completed status

import { useReducer, useState } from "react";
const initialState = [];
function reducer(state, action) {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];

        case "UPDATE":
            return state.map((task) => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        title: action.payload.title
                    }
                }
                else {
                    return task
                }
            })
            
        case "DELETE":
            return state.filter((task) => task.id !== action.payload)

        default:
            return state
    }
}

export default function TaskManager() {
    const [tasks, dispatch] = useReducer(reducer, initialState);
    const [title, setTitle] = useState("");

    const addTask = () => {
        if (title.trim() === "") return;
        dispatch({
            type: "ADD",
            payload: {
                id: Date.now(),
                title,
                completed: false
            }
        })
        setTitle("");
    }
    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded">
            <h2 className="text-2xl font-bold mb-4">Task Manager</h2>

            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task"
                className="border p-2 rounded"
            />

            <button onClick={addTask} className="bg-blue-600 text-white p-2 ml-2 rounded">
                Add
            </button>

            {tasks.map((task) => (
                <div key={task.id} className="flex justify-between mt-4">
                    <div>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() =>
                                dispatch({
                                    type: "UPDATE",
                                    payload: {
                                        id: task.id,
                                        title: task.title,
                                        completed: !task.completed
                                    }
                                })
                            }
                        />

                        <span className={task.completed ? "line-through ml-2" : "ml-2"}>
                            {task.title}
                        </span>
                    </div>

                    <button
                        onClick={() => {
                            const newTitle = prompt("Enter new title", task.title);

                            if (newTitle && newTitle.trim()) {
                                dispatch({
                                    type: "UPDATE",
                                    payload: {
                                        id: task.id,
                                        title: newTitle,
                                        completed: task.completed
                                    }
                                });
                            }
                        }}
                        className="bg-green-600 text-white px-2 rounded"
                    >
                        Edit
                    </button>

                    <button
                        onClick={() =>
                            dispatch({ type: "DELETE", payload: task.id })
                        }
                        className="bg-red-600 text-white px-2 rounded"
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}
