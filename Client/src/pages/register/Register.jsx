import React, { useState } from "react"
import "./Register.scss"

function Register() {

  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        img: "",
        country: "",
        isSeller: false,
        desc: "",
  })
   
  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  return (
 <div className="register">
   <form> 
    <div className="let">
       <h1>Create a new account</h1>
       <label htmlFor="">Username</label>
       <input name="username" type="text" placeholder="Christopher" onChange={handleChange}/>
       <label htmlFor="">Email</label>
       <input name="email" type="email" placeholder="email" onChange={handleChange}/>
       <label htmlFor="">Password</label>
       <input 
       name="password"
       type="password"
       onChange={handleChange}
       />
       <label htmlFor="">Profile Picture</label>
       <input type="file" />
       <label htmlFor="">Country</label>
       <input name="Country" type="text" placeholder="Nigerian" onChange={handleChange}/>
       <button type="submit">Register</button> 
    </div>
    <div className="right">
       <h1>I want to become a seller</h1>
       <div className="toggle">
         <label htmlFor="">Active a seller account</label>
         <label className="switch">
             <input type="checkbox" />
             <span className="slider round"></span> 
         </label>
        </div>
        <label htmlFor="">Phone Number</label>
        <input name="phone" type="text" placeholder="+234 8058960314" onChange={handleChange}/>
        <label htmlFor="">Description</label>
        <textarea placeholder="A short description of yourself"
        name="desc"
        id=""
        cols="30"
        rows="10"
        onChange={handleChange}
        ></textarea>
     </div> 
  </form>
</div>
  );
};

export default Register;