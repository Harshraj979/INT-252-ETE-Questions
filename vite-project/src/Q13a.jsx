//create a react component called ProfileCard that takes name, age and bio as a prop and displays them in styled card format. style it

export default function ProfileCard({name,age,bio}){
    return(
        <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl border border-gray-200">
            <div className="w-20 h-20 mx-auto rounded-full bg-indigo-500 text-white flex items-center justify-center text-3xl font-bold">
                {name.charAt(0).toUpperCase()}
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-4">{name}</h2>
            <p className="text-indigo-600 font-semibold mt-2">{age}</p>
            <p className="text-gray-600 mt-3">{bio}</p>
        </div>
    )
}