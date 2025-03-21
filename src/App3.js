import React, { useState } from "react";
import './components/Products.css';

export default function App3() {
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    const[msg, setMsg] = useState();
    const handleSubmit = () => {
        if(email==="john@gmail.com" && password === "1234") {
            setMsg("Welcome John!");
            // alert("Welcome John!!")
        }
        else {
            // setMsg("Access Denied");
            alert("Access Denied");
        }
    };

    return (
        <div className="App-Products-Row">
            <h3>Login Form</h3>
            {msg}
            <p>
                <input type = "text" placeholder="Email" onChange={(event)=>setEmail(event.target.value)}></input>
            </p>
            <p><input type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)}></input></p>
            <button btn onClick={handleSubmit}>Log In</button>
        </div>
    )
}