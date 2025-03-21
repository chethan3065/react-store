import React, { useState } from "react";
import './components/Products.css';

export default function App4() {
    // const[email, setEmail] = useState();
    // const[password, setPassword] = useState();
    const [user, setUser] = useState({});
    const[msg, setMsg] = useState();
    const handleSubmit = () => {
        if(user.email==="john@gmail.com" && user.password === "1234") {
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
                <input type = "text" placeholder="Email" onChange={(event)=>setUser({ ...user, email: event.target.value})}></input>
            </p>
            <p>
                <input type="password" placeholder="Password" onChange={(event)=>setUser({ ...user, password: event.target.value})}></input>
            </p>
            <button btn onClick={handleSubmit}>Log In</button>
        </div>
    )
}