import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setName, addItem, removeItem } from "./Q21a";

export default function Cart() {
    const [item, setItem] = useState("");
    const userInfo = useSelector((state) => state.userInfo);
    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const handleAdd = () => {
        if (item.trim() === "") return;
        dispatch(addItem(item));
        setItem("");
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg">
            <h2 className="tex-2xl font-bold mb-3">User Info</h2>
            <input
                value={userInfo.name}
                onChange={(e) => dispatch(setName(e.target.value))}
                className="border p-2 rounded w-full mb-4"
                placeholder="Enter name"
            />
            <h2 className="text-xl font-bold mb-3">Shopping Cart</h2>
            <div className="flex gap-2">
                <input
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    placeholder="Enter item"
                    className="border p-2 rounded flex-1"
                />
                <button
                    onClick={handleAdd}
                    className="bg-blue-600 text-white px-4 rounded"
                >
                    Add
                </button>
            </div>
            <ul className="mt-4">
                {cart.map((item, index) => (
                    <li key={index} className="flex-justify between mb-2 gap-4">
                        {item}
                        <button
                            onClick={() => dispatch(removeItem(item))}
                            className="bg-red-500 text-white px-3 rounded"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}