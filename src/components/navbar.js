import React from "react";

import { useAuth } from "./authcontext";


const Navbar = () =>{
    const{user,logout} = useAuth();

    return(
        <nav>
            {user ? (
                <div>
                    <span>Welcome, {user}</span>
                    <button onClick={logout}>Logout</button>
                </div>) : (
                    <span>Please log in</span>
                ) }
        </nav>
    )
}

export default Navbar;