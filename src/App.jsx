import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [nat, setNat] = useState("uzbek");
  const [desc, setDesc] = useState("");

  const [users, setUsers] = useState([]);

  function handChangeName(event) {
    setUsername(event.target.value);
  }
  function handChangeEmail(event) {
    setEmail(event.target.value);
  }
  function handChangeNat(event) {
    setNat(event.target.value);
  }
  function handChangeDesc(event) {
    setDesc(event.target.value);
  }

  function handSave(event) {
    event.preventDefault();

    const userObj = {
      username: username,
      email: email,
      nat: nat,
      desc: desc,
      id: Date.now(),
    };

    const copied = [...users];
    copied.push(userObj);
    setUsers(copied);
    console.log(userObj);
    setUsername("");
    setEmail("");
    setNat("");
    setDesc("");

    function createCard() {
      return users.map((userForm) => (
        <div key={userForm.id} className="card">
          <h2>{userForm.username}</h2>
          <h3>{userForm.email}</h3>
          <p>{userForm.nat}</p>
          <p>{userForm.desc}</p>
        </div>
      ));
    }
  }

  return (
    <div className="container">
      <form>
        <input
          onChange={handChangeName}
          value={username}
          type="text"
          className="text"
          id=""
          placeholder="Enter name..."
        />
        <input
          onChange={handChangeEmail}
          value={email}
          type="email"
          className="email"
          id=""
          placeholder="Enter email..."
        />
        <select onChange={handChangeNat} value={nat} id="">
          <option value="uzbek">uzbek</option>
          <option value="english">english</option>
          <option value="russian">russian</option>
        </select>
        <textarea
          onChange={handChangeDesc}
          value={desc}
          name=""
          id=""
          placeholder="Enter description.."
        ></textarea>
        <button onClick={handSave}>SAVE</button>
      </form>
      <div className="card">
        <div className="block">
          {users.map((user) => (
            <div className="card">
              <h2>{user.username}</h2>
              <h3>{user.email}</h3>
              <p>Nationality: {user.nat}</p>
              <p>Description: {user.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
