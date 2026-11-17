//Build a react component UserProfile that accepts name,age and isPremium as props COnditionally render special badge for premium users Use props destructuring within the component to extract the props and display the user details
//Extend the component to handle a nested object prop for addess(city,state,zip) and display the address detail conditionally if all address properties are provided

export default function UserProfile({ name, age, isPremium, address }) {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg">
            <h2 className="text-2xl font-bold mb-3">User profile</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            {isPremium && (
                <span className="bg-yellow-400 text-black px-3 py-1 rounded">
                    Premium User
                </span>
            )}
            {address?.city && address?.state && address?.zip && (
                <div className="mt-4">
                    <h3 className="text-xl font-bold">Address</h3>
                    <p>City: {address.city}</p>
                    <p>State: {address.state}</p>
                    <p>Zip: {address.zip}</p>
                </div>
            )}
        </div>
    )
}