"use client";
import React, { useState } from "react";

function LoginPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const loginReqest = async () => {
    const response = await fetch("http://localhost:3000/api/login",
      {
        method: "POST",
        body: JSON.stringify({ user, password }),
      })
    const data = await response.json();
    console.log(data);


  };
  return (
    <div className="flex flex-col bg-slate-200 m-3">
      <h1 className="bg-blue-200 font-bold text-green-600">Login Form (JWT Auth)</h1>
      <div className="flex gap-3">
        <label>Email as ID</label>
        <input value={user} onChange={(e) => { setUser(e.target.value); }} type="text" placeholder="Enter Email" className="bg-slate-100 px-3 rounded-lg"></input>
        <label>Password</label>
        <input value={password} onChange={(e) => { setPassword(e.target.value); }} placeholder="Password" className="bg-slate-100 px-3 rounded-lg" type="text"></input>
        <button onAuxClick={loginReqest}>Submit</button>
      </div>
    </div>
  );
}

export default LoginPage;
