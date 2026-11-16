// a-Build  a userProfile component that allows user to edit their profile info (name,email password) using controlled component. uSe usestae to manage form state and display the updated info in real time
//b- modify the component to update only a specific field without overwritting the entire user object

import { useState } from "react";

export default function UserProfile() {
    const [user, setUser] = useState({
        name: "Harsh",
        email: "harsh@gmail.com",
        password: "123456"
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">User profile</h2>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Enter Name"
                className="border p-2 rounded w-full mb-3"
            />
            <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="border p-2 rounded w-full mb-3"
            />
            <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="border p-2 rounded w-full mb-3"
            />
            <h3 className="text-xl font-bold mt-4">Updated Profile</h3>

            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>

        </div>

    )
}