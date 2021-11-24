import React,{ useState } from "react";
import axios from "axios";

function Login(){

  const [user,setUser] = useState({
    name:"",
    password:""
  });

  const correct = false;
  
  function login(event){
    const newLogin = {
      name: user.value,
      password: user.password
    };

    axios.post("http://localhost:4000/login",{newLogin,correct})
    .then((res)=> console.log(res.data));

    setUser({
      name:"",
      password:"",
    })

    event.preventDefault();
  };

  function handleChange(event) {
    const { value, name } = event.target;

    setUser(prevValue => {
      if (name === "username") {
        return {
          name: value,
          password: prevValue.password
        };
      } else if (name === "password") {
        return {
          name: prevValue.name,
          password: value
        };
      }
    });
  };

  return (
        <div className="container">
        <div className="container-item">
          <h1>
            Register
          </h1>
          <form>
            <input
              name="username"
              placeholder="Username"
              value={user.name}
              onChange={handleChange}
            />
            <input
            type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
            />
            <button onClick ={login} >Submit</button>
          </form>
          <a href="/register">New user?</a>
        </div>
        </div>
      );
    }

export default Login;
