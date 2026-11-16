import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addField, editField, removeField } from "./Q25a";

export default function DynamicForm() {
    const fields = useSelector((state) => state.form.fields)
    const dispatch = useDispatch();

    const [label, setLabel] = useState("");
    const [type, setType] = useState("");

    const handleAdd = () => {
        if (label.trim === "") return;
        dispatch(addField({
            id: Date.now(),
            label: label,
            type: type,
        }))

        setLabel("");
        setType("text");
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Dynamic Form</h2>
            <div className="flex gap-2 mb-4">
                <input
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    placeholder="Field name"
                    className="border p-2 rounded w-full"
                />

                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="border p-2 rounded"
                >
                    <option value="text">Text</option>
                    <option value="email">Email</option>
                    <option value="number">Number</option>
                </select>
                <button
                    onClick={handleAdd}
                    className="bg-blue-600 text-white px-3 rounded"
                >
                    Add
                </button>
            </div>
            {fields.map((field) => (
                <div key={field.id} className="mb-4 border p-3 rounded">
                    <label className="font-semibold">{field.label}</label>

                    <input
                        type={field.type}
                        placeholder={field.label}
                        className="border p-2 rounded w-full mt-2"
                    />

                    <div className="flex gap-2 mt-2">
                        <button
                            onClick={() => {
                                const newLabel = prompt("Enter new field name", field.label);
                                if (newLabel && newLabel.trim()) {
                                    dispatch(editField({
                                        id: field.id,
                                        label: newLabel,
                                        type: field.type
                                    }));
                                }
                            }}
                            className="bg-green-600 text-white px-3 py-1 rounded"
                        >
                            Edit
                        </button>

                        <button
                            onClick={() => dispatch(removeField(field.id))}
                            className="bg-red-600 text-white px-3 py-1 rounded"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}