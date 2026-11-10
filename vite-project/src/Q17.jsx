//Create a react component called registrationForm that includes field for username,password, and confirmPassword implement form validation that a. Username is atleast 5 character long b. password is atleast 6 character long c. the password and confirm password match Display appropriate error msg for each rule .The form should only be submitted if all validation pass

import { useState } from "react";
import { z } from "zod";

const schema = z.object({
    username: z.string().min(5, { message: "Username must be atleast 5 characters long" }),
    password: z.string().min(6, { message: "Password must be atleast 6 characters long" }),
    confirmPassword: z.string()
})
 
export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        setFormData({ 
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = schema.safeParse(formData);
        if (!result.success) {
            const fieldErrors = result.error.format();
            setErrors({
                username: fieldErrors.username?._errors[0],
                password: fieldErrors.password?._errors[0],
                confirmPassword: fieldErrors.confirmPassword?._errors[0]
            });
        }
        else if (formData.password !== formData.confirmPassword) {
            setErrors({
                confirmPassword: "Passwords do not match"
            });
        }
        else {
            setErrors({});
            alert("Form submitted successfully");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-1 font-semibold">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-semibold">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-semibold">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                >
                    Register
                </button>
            </form>
        </div>
    );
}
