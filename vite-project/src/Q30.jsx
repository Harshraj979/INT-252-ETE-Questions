//Create alogin from with field email password using controlled input in react validate the form to ensure that email is in correct format and password is atleast 8 char long before submission
//Extend the form the display the validation error message in real time as the user types Implement logic to disbale submit button if the validation criteria is not met

import { useState } from "react";
import { z } from "zod";

const loginSchema = z.object({
    email: z.string().email('Invalid email format'),
    password: z.string().min(8, "Password must be 8 characters long")
});

export default function LoginForm() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedForm = {
            ...form,
            [name]: value
        }
        setForm(updatedForm);

        const result = loginSchema.safeParse(updatedForm);
        if (!result.success) {
            const fieldErrors = {};
            result.error.issues.forEach((issue) => {
                fieldErrors[issue.path[0]] = issue.message;
            })
            setErrors(fieldErrors);
        }
        else {
            setErrors({});
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const result = loginSchema.safeParse(form);
        if (result.success) {
            alert("login successful");
        }
        else {
            alert("please fix validation errors");
        }
    }

    const isValid = loginSchema.safeParse(form).success;
    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Login Form</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    className="border p-2 rounded w-full mb-2"
                />

                {errors.email && (
                    <p className="text-red-500 mb-3">{errors.email}</p>
                )}

                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                    className="border p-2 rounded w-full mb-2"
                />

                {errors.password && (
                    <p className="text-red-500 mb-3">{errors.password}</p>
                )}

                <button
                    type="submit"
                    disabled={!isValid}
                    className="bg-blue-600 text-white px-4 py-2 rounded w-full disabled:bg-gray-400"
                >
                    Login
                </button>
            </form>
        </div>
    )
}