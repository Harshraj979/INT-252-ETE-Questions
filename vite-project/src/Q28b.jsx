
import UserProfile from "./Q28";

export default function Q28() {

    const user = {
        name: "Harsh",
        age: 20,
        isPremium: false,
        address: {
            city: "Phagwara",
            state: "Punjab",
            zip: "144401"
        }
    };

    return (
        <UserProfile
            name={user.name}
            age={user.age}
            isPremium={user.isPremium}
            address={user.address}
        />
    );
}
