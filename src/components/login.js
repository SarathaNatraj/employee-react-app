import React, { useState } from "react";

import { useAuth } from "./authcontext";

const Login = () => {
    const[username,setUserName] = useState('');
    const {login} = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
           login(username);
           setUserName('');

    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={ (e)=> setUserName(e.target.value)}
            placeholder="username">

            </input>
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;