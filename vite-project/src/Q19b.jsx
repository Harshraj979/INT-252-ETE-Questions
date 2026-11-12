import { PizzaCard, BurgerCard, SaladCard, NotFoundCard } from "./Q19.jsx";

export default function Menu({ items }) {
    const renderFood = (item) => {
        switch (item.type) {
            case "pizza":
                return <PizzaCard item={item} />
            case "burger":
                return <BurgerCard item={item} />
            case "salad":
                return <SaladCard item={item} />
            default:
                return <NotFoundCard item={item} />
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-5">
            <h2 className="text-2xl font-bold mb-4">Food Menu</h2>
            {items.map((item, index) => (
                <div key={index} className="border p-3 rounded mb-3">
                    {renderFood(item)}
                </div>
            ))}
        </div>
    )
}