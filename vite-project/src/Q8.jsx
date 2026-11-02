// create a component that fetch data from an api:- https://jsonplaceholder.typicode.com/posts when it mounts and closes the connection when it unmounts. use useEffect to manage the side effects

import {useState,useEffect} from "react";

export default function Q8(){
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
        const controller=new AbortController();
        console.log('Component Mounted-Fetching data');

        fetch("https://jsonplaceholder.typicode.com/posts",{
            signal:controller.signal
        })
        .then((response)=>response.json())
        .then((data)=>{
            setPosts(data);
        })
        .catch((error)=>{
            if(error.name==="AbortError"){
                console.log("Fetch aborted");
            }else{
                console.error("Error fetching data:",error);
            }
        })
        return () => {
            controller.abort();
            console.log("Component Unmounted - Connection Closed");
        };
    },[])

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map((post)=>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}