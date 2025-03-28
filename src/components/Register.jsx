import React from "react";
import { useState } from "react";
import "./Register.css"
import { Link } from "react-router-dom";
export default function Register() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const handleSubmit = () => {
  //   const nameExists = users.some((u) => u.name === user.name);
  //   const emailExists = users.some((u) => u.email === user.email);

  //   if (nameExists) {
  //     alert("Username already exists!");
  //     return;
  //   }

  //   if (emailExists) {
  //     alert("Email already registered!");
  //     return;
  //   }
  //   setUsers([...users, user]);
  //   setUser({}); 

  const found = users.find((value) => value.email === user.email);
  if(found) {
    setMsg("User already exist")
  }
  };
  const handleDelete = (value) => {
    setUsers(users.filter((element) => element !== value))
  }
  return (
    <div className="App-Register-Row">
      <div>
        <h2>Registration Form</h2>
        <p>
          <input
            type="text"
            placeholder="Enter name"
            value={user.name || ""}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          ></input>
        </p>
        <p>
          <input
            type="text"
            placeholder="Email address"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
        </p>
        <p>
          <input
            type="password"
            placeholder="New password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          ></input>
        </p>
        <p>
          <button onClick={handleSubmit}>Submit</button>
        </p>
        <p>
          <Link to="../login">Already a member? Log In</Link>
        </p>
      </div>
      <div>
        {
          users && users.map((value,index)=>(
            <li key={index}>{value.name}-{value.email}-{value.password}
            <button onClick={() => handleDelete(value)}>Delete</button>
            </li>
          ))
        }
      </div>
    </div>
  );
}