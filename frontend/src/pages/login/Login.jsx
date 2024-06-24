import { Link } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import {useLogin} from "../../Hooks/useLogin";


export const Login = ()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useLogin();

    const handleChangePassword = (e)=>{
        setPassword(e.target.value);
    }
    const handleChangeUsername = (e)=>{
        setUsername(e.target.value);
    }
     const handleSubmit = async(e)=>{
        e.preventDefault();
        await login({username,password});
     }

  return (
    <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Username</label>
                <input value={username} name = "username" onChange={handleChangeUsername} type='text' placeholder='username...' />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input value={password} name = "password" onChange={handleChangePassword} type='password' placeholder='password...' />
            </div >
            <Link to ='/signup'>
                {"Don't"} have an account?
            </Link>

            <div className="form-group">
                <button type='submit'>Login</button>
            </div>
        </form>
    </div>
  )
}
