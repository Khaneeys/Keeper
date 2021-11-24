import React,{ useState } from "react";
import axios from "axios";

function Register(){

  const [user,setUser] = useState({
    name:"",
    password:"",
    confirmPassword:""
  });

  const alreadyUser = false;

  function register(event){

    const newRegister = {
      name: user.value,
      password: user.password,
      confirmPassword: user.confirmPassword
    };

    axios.post("http://localhost:4000/register",{newRegister,alreadyUser})
    .then((res)=> console.log(res.data));

    setUser({
      name:"",
      password:"",
      confirmPassword:""
    })

    event.preventDefault();

  }
  function handleChange(event) {
    const { value, name } = event.target;

    setUser(prevValue => {
      if (name === "username") {
        return {
          name: value,
          password: prevValue.password,
          confirmPassword: prevValue.ConfirmPassword
        };
      } else if (name === "password") {
        return {
          name: prevValue.name,
          password: value,
          confirmPassword: prevValue.ConfirmPassword
        };
      } else if (name === "confirmPassword") {
        return {
          name: prevValue.name,
          password: prevValue.password,
          confirmPassword: value
        };
      }
    });
  }

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
            <input
            type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={user.confirmPassword}
              onChange={handleChange}
            />
            <button onClick ={register} >Submit</button>
          </form>
          <a href="/login">Already a existing user?</a>
        </div>
        </div>
      );
    }

export default Register;
