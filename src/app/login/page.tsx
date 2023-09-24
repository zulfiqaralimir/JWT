"use client";
import React, { useState } from "react";

function Login() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  return (
    <div className="flex flex-col bg-slate-200 m-3">
      Login page
      <div className="flex gap-3">
        <label>user</label>
        <input type="text" className="bg-slate-400 px-3 rounded-lg"></input>
        <label>password</label>
        <input className="bg-slate-400 px-3 rounded-lg" type="text"></input>
      </div>
    </div>
  );
}

export default Login;
