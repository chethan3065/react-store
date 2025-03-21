import React, { useState } from "react";
import './components/Products.css'

export default function App5() {
    const[count, setCount] = useState(0);
    const click = () => {
        setCount(count+1);
    }

    return (
        <div className="App-Products-Row">
            <h1>{count}</h1>
            <button onClick={click}>Click</button>
        </div>
    )
}