import { useSearchParams } from "react-router-dom";

export default function User(){
    const [searchParams]=useSearchParams();
    const username=searchParams.get("username");
    
    return(
        <div>
            <h2>User Page</h2>
            <h3>Hello, {username}!</h3>
        </div>
    )
}