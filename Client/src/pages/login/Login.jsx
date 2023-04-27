import React, { useState, useNavigate } from "react";
import "./Login.scss";
import newRequest from "../../utils/newRequest";



function Login() {
  const [username, setUsername ] = useState("");
  const [ password, setPassword] = useState("");
  const [error, setError ] = useState(null);

   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefualt();
    try{
    const res = await newRequest.post("/auth/login", { username, password });
    localStorage.setItem("currentUser", JSON.stringify(res.data));
    navigate("/");
  } catch(err) {
    setError(err.response.data);
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
          {error && error}
        </form>
    </div>
  );
};

export default Login