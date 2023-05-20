import React, {useState} from "react";
import {RiUserFill, RiLockPasswordFill} from 'react-icons/ri';

const Login = ({ onLogin }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () =>{
        if(username !== '' && password !== ''){

            //
            
            onLogin();
        }
    }

    return(
        <div className="login-container">
            <h2>Login</h2>
            <hr style={{color: "#333", borderStyle: "dotted"}}/>
            <div>
                <RiUserFill className="input-icon" />
                <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
            </div>
            <hr style={{color: "#333", borderStyle: "dotted"}}/>
            <div>
                <RiLockPasswordFill className="input-icon" />
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <hr style={{color: "#333", borderStyle: "dotted"}}/>
            <button className="btn btn-sm text-light fw-bold" style={{backgroundColor: "#3498db"}} onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}

export default Login;