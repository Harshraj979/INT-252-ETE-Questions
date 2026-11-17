import {useState} from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

import PrivateRoute from "./Q32a";
import Login from "./Q32b";
import Dashboard from "./Q32c";

export default function Q32(){
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    return(
        <BrowserRouter>
            <nav className="flex gap-5 p-4 bg-gray-800 text-white">
                <Link to="/login">Login</Link>
                <Link to="/dashboard">Dashboard</Link>

                <button onClick={() => setIsAuthenticated(true)}>
                    Login
                </button>
                <button onClick={() => setIsAuthenticated(false)}>
                    Logout
                </button>
            </nav>

            <Routes>
                <Route path="/login" element={<Login />} />

                <Route 
                    path="/dashboard" 
                    element={<PrivateRoute isAuthenticated={isAuthenticated}>
                    <Dashboard/></PrivateRoute>}/>
            </Routes>
        </BrowserRouter>
    )
}