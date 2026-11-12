import Menu from "./Q19b";

export default function Q19(){
     const foodItems = [
        { name: "Margherita", type: "pizza" },
        { name: "Cheese Burger", type: "burger" },
        { name: "Greek Salad", type: "salad" },
        { name: "Pasta", type: "pasta" }
    ];
    return <Menu items={foodItems}/>
}