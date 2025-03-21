import React from "react";
import './Products.css';

export default function Products() {
    const products = [
        {id : 1, name: "Product 1", price: 56},
        {id : 2, name: "Product 2", price: 40},
        {id : 3, name: "Product 3", price: 35}
    ];
    return <div className="App-Products-Row">
        {products.map((value, index) => (
            <div key = {index} className="App-Products-Box"> 
                <h3>{value.name}</h3>
                <h4>{value.price}</h4>
                <button>Add to Cart</button>
            </div>
        ))}
    </div>
}