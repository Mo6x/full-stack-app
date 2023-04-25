import React, { useState } from "react";
import "./Login.scss";
import axios from "axios";



function Login() {

  const [username, setUsername ] = useState("");
  const [ password, setPassword] = useState("");
  const [error, setError ] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefualt();
    try{
  const res = await axios.post("http://localhost:8000/api/auth/login", { 
    username,
    password,
  });
  console.log(res);  
  } catch(err) {
    setError(err);
    console.log(err);
  };
  };
    
  return (
    <div className="login">
        <form onSubmit = {handleSubmit}> 
          <h1>Sign In</h1>
          <label htmlFor="">Username</label>
          <input name="username" type="text" placeholder="Christopher" onChange={e => setUsername(e.target.value)}/>

          <label htmlFor="">Password</label>
          <input 
          name="password"
          type="password"
          placeholder="Christmoses1999@gmail.com" onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
    </div>
  );
};

export default Login