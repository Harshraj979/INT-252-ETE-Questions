// a - build a toggleButton component that switches between "ON" and " OFF" when clicked. use the useState hook to track the button state and apply different style(background change) depending whether its ON or OFF
// b- Modify the toggleButton to accept an initialState as a prop and conditionally apply the disabled state whether button can't be toggled 

import { useState } from "react";

export default function ToggleButton({ initialState = false, disabled = false }) {
    const [isOn, setIsOn] = useState(initialState);

    const handleToggle = () => {
        if (disabled) return;
        setIsOn((prev) => !prev);
    };

    return (
        <div className="flex justify-center mt-10">
            <button
                onClick={handleToggle}
                disabled={disabled}
                className={`px-6 py-3 rounded text-white font-bold ${
                    isOn ? "bg-green-600" : "bg-red-600"
                } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            >
                {isOn ? "ON" : "OFF"}
            </button>
        </div>
    );
}