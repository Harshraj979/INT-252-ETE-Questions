import ProductCatalog from "./Q24";
export default function Q24(){
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 50000,
            type: "electronics"
        },
        {
            id: 2,
            name: "T-Shirt",
            price: 800,
            type: "clothing",
            size: "M"
        },
        {
            id: 3,
            name: "Pizza",
            price: 300,
            type: "food",
            expiry: "2 days"
        },
        {
            id: 4,
            name: "Watch",
            price: 1500,
            type: "accessories"
        }
    ];
    return <ProductCatalog products={products}/>
}