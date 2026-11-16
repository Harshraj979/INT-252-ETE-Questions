//you are given 2 objects  representing product detauls one with product spec(name,price ,manufactirer) and another is inventory(stock,warehouse location,restock dare) write a fn that combines these 2 object using spread and destructures the result to extact individula propertues .extend the fn to handle nested properties

const product = {
    name: "Laptop",
    price: 50000,
    manufacturer: "HP",
    specifications: {
        processor: "Intel i5",
        ram: "16GB"
    }
};


const inventory = {
    stock: 25,
    warehouse: {
        location: "Delhi",
        section: "A1"
    },
    restockDate: "2026-12-01"
};

function combineProduct(product,inventory){
    const combined={
        ...product, ...inventory
    }
    const {name,price,manufacturer,stock,restockDate}=combined;
    const{
        specification:{processor,ram},
        warehouse:{location,section}
    }=combined;

    return {name, price, manufacturer,stock,restockDate,processor,ram, location,section };
}

const result = combineProduct(product, inventory);
console.log(result);