import HotelInfo from "./Q2a";

export default function HotelRooms(){
    const hotelData={
        name: "Grand Palace Hotel",
        address: "Jalandhar, Punjab, India",

        rooms: [
            { type: "Single Room", price: 1500 },
            { type: "Double Room", price: 2500 },
            { type: "Deluxe Room", price: 4000 },
            { type: "Suite", price: 6000 }
        ]
    };

    return(
        <div>
            <HotelInfo hotel={hotelData}/>
        </div>
    )
}