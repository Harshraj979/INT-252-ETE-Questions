//Build a react component productCatalog that recives list of props as props THe  component should dynamically render child components based on type of products. Use conditional rendering  inside productCatalog to switch between different ccard

function ElectronicsCard({ product }) {
    return (
        <div className="border p-4 rounded">
            <h2 className="font-bold">{product.name}</h2>
            <p>Price: ₹{product.price}</p>
            <p>Type: Electronics</p>
        </div>
    );
}

function ClothingCard({ product }) {
    return (
        <div className="border p-4 rounded">
            <h2 className="font-bold">{product.name}</h2>
            <p>Price: ₹{product.price}</p>
            <p>Size: {product.size}</p>
        </div>
    );
}

function FoodCard({ product }) {
    return (
        <div className="border p-4 rounded">
            <h2 className="font-bold">{product.name}</h2>
            <p>Price: ₹{product.price}</p>
            <p>Expiry: {product.expiry}</p>
        </div>
    );
}

function NotFoundCard() {
    return <p>Invalid Product Type</p>;
}

export default function ProductCatalog({ products }) {
    return (
        <div className="grid grid-cols-3 gap-4 p-5">
            {products.map((product) => {
                if (product.type === "electronics") {
                    return (
                        <div key={product.id}>
                            <ElectronicsCard product={product} />
                        </div>
                    )
                }
                else if (product.type === "clothing") {
                    return (
                        <div key={product.id}>
                            <ClothingCard product={product} />
                        </div>
                    );
                }
                else if (product.type === "food") {
                    return (
                        <div key={product.id}>
                            <FoodCard product={product} />
                        </div>
                    );
                }
                else {
                    return (
                        <div key={product.id}>
                            <NotFoundCard />
                        </div>
                    );
                }
            })}
        </div>
    )
}