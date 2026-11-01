import { useAuth } from "./Q1a";

export default function App1(){
    const {login,logout,isAuthenticated}=useAuth();

    if(isAuthenticated){
        return(
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Authentication System</h1>
                <h2 className="text-xl text-green-600 font-semibold mb-6">Welcome! You are logged in.</h2>
                <button  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold" onClick={logout}>Logout</button>
            </div>
        )
    }
    else{
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Authentication System</h1>
                <h2 className="text-xl text-green-600 font-semibold mb-6">Please Login</h2>
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold" onClick={login}>Login</button>
            </div>
        );
    }
}