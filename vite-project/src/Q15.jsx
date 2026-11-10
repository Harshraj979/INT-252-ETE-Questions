//create a react app with routing using react-router-dom. The app should have 3 pages Home about and user. The USer page should accept username as a query and display a personalized greetung .Implement navigation between these pages and ensure the username is passed correctly to the user pagedon't 

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Q15a";
import About from "./Q15b";
import User from "./Q15c";

export default function Q15() {
    return (
        <BrowserRouter>
            <nav className="flex items-center justify-center px-6 py-4 gap-4 bg-gray-200">
                <Link className="hover:text-yellow-300" to="/">Home</Link>
                <Link className="hover:text-yellow-300" to="/about">About</Link>
                <Link className="hover:text-yellow-300" to="/user?username=Harsh">User</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user" element={<User />} />
            </Routes>
        </BrowserRouter>
    )
}