//Create a menu component that takes a list of food items as a prop each having a type(e.g pizza,burger,salad). Use conditional rendering to dynmaically render different child components based on the type(pizzacard,burgercard,saladcard). Modify the menu component to include a default case for handling unknown food types rendering a notFoundCard for those items

export function PizzaCard({item}){
    return <h3>Pizza: {item.name}</h3>
}
export function BurgerCard({item}){
    return <h3>Burger: {item.name}</h3>
}
export function SaladCard({item}){
    return <h3>Salad: {item.name}</h3>
}
export function NotFoundCard({item}){
    return <h3>Unknown Food: {item.name}</h3>
}