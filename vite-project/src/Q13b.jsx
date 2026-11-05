import ProfileCard from "./Q13a";

export default function Q13() {
    const users = [
        {
            id: 1,
            name: "Harsh",
            age: 20,
            bio: "Computer Science student passionate about programming."
        },
        {
            id: 2,
            name: "Rahul",
            age: 21,
            bio: "Web developer interested in React and JavaScript."
        },
        {
            id: 3,
            name: "Priya",
            age: 19,
            bio: "Creative designer interested in UI/UX development."
        },
        {
            id: 4,
            name: "Aman",
            age: 22,
            bio: "Software engineer who loves problem solving."
        }
    ];
    return(
        <div className="min-h-screen bg-gray-100 p-10">
            <h1 className="text-3xl font-bold text-center mb-10">User Profiles</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {users.map((user)=>(
                    <ProfileCard key={user.id}
                    name={user.name}
                    age={user.age}
                    bio={user.bio}
                />
                ))}
            </div>
        </div>
    )
}