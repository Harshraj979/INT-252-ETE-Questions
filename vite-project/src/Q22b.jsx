import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductPage from "./Q22a";
import { products } from "./Q22";

export default function Q22() {
    return (
        <BrowserRouter>
            <div className="p-5">
                <h1 className="text-2xl font-bold mb-4">Products</h1>
                {products.map((product) => (
                    <div key={product.id} className="mb-2">
                        <Link
                            to={`/product/${product.id}`}
                            className="text-blue-600 underline"
                        >
                            {product.name}
                        </Link>
                    </div>
                ))}
                <Routes>
                    <Route path="/product/:id" element={<ProductPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}