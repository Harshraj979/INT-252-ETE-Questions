// Develop a simple hotel homepage using React that includes  two component  App and HotelInfo. pass hotel data as props to HotelInfo component.
//  Display the hotel name,address and a table of room types and prices. include a book now button for each room that triggers an alert with room type when clicked .

export default function HotelInfo({hotel}){
    return(
        <div className="bg-white p-8 rounded-xl shadow-lg w-150">
            <h1 className="text-3xl font-bold text-amber-600 mb-4">{hotel.name}</h1>
            <p className="text-gray-600 mb-6">Address: {hotel.address}</p>
            <h2 className="text-xl font-semibold mb-3">Available Rooms</h2>

            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-emerald-400">
                        <th className="border p-3">Room Type</th>
                        <th className="border p-3">Price</th>
                        <th className="border p-3">Prices</th>
                    </tr>
                </thead>

                <tbody>
                    {hotel.rooms.map((room,index)=>(
                        <tr className="text-center" key={index}>
                            <td className="border p-3">{room.type}</td>
                            <td className="border p-3">{room.price}</td>
                            <td className="border p-3">
                                <button 
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                                    onClick={()=>alert(`You selected ${room.type}`)}>Book Now
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
