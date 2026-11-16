//Build a react app that uses react router dom that includes 3 pages home ,about,contact Implement navigation between these pages using link component and ensue that url changes refelect on current pageimport { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Q26a";
import About from "./Q26b";
import Contact from "./Q26c";

export default function App() {
    return (
        <BrowserRouter>
            <nav className="flex gap-6 p-4 bg-gray-800 text-white">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}