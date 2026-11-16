// Build a react app where the productPage component displays the details of different product based on dynmaic routing use route paramteres to extract product and display it in the component 
import { useParams } from "react-router-dom";
import { products } from "./Q22";

export default function ProductPage() {
    const { id } = useParams();
    const product = products.find((p) => p.id === id);
    if (!product) {
        return <h2>Product not found</h2>
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded">
            <h2 className="text-2xl font-bold mb-3">Product Details</h2>
            <p>Name: {product.name}</p>
            <p>Price: ₹{product.price}</p>
            <p>Category: {product.category}</p>
        </div>
    )
}