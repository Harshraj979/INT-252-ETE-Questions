// develop a react component that incorporates a navbar with various sections e.g Home,about service,contact and smoothly transitions between them using React Router

import {Link,Routes,Route} from "react-router-dom";
 
function Home(){
    return <h1 className="text-3xl font-bold">Welcome to Home Page</h1>
}
function About() {
    return <h1 className="text-3xl font-bold">About Us</h1>;
}
function Services() {
    return <h1 className="text-3xl font-bold">Our Services</h1>;
}
function Contact() {
    return <h1 className="text-3xl font-bold">Contact Us</h1>;
}

export default function Q7(){
    return(
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-indigo-200 p-5 flex justify-center gap-10">
                <Link to="/" className="text-white font-semibold">Home</Link>
                <Link to="/about" className="text-white font-semibold">About</Link>
                <Link to="/services" className="text-white font-semibold">Services</Link>
                <Link to="/contact" className="text-white font-semibold">Contact</Link>
            </nav>

            <div className="flex justify-center items-center min-h-[80vh]">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    )
}