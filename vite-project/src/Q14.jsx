// write function processData that takes array of objects representing users, each object has a property like name,age,location. The function should return an array of strings in the format "Name=[name] Age:[age] Location:[location] use arrow fn ,spread,rest operator to achieve that"


const processData=(...users)=>{
    return users.map((user)=>{
        return `Name=${user.name} Age:${user.age} Location:${user.location}`
    })
}
export default function Q14(){
    const users=[
        { name: "Harsh", age: 20, location: "Punjab" },
        { name: "Rahul", age: 21, location: "Delhi" },
        { name: "Priya", age: 22, location: "Mumbai" },
    ]

    const result=processData(...users);
    return(
        <div>
            <h2>Users details</h2>
            {result.map((item,index)=>{
                return <p key={index}>{item}</p>
            })}
        </div>
    )
}