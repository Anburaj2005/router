

import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <><h1>Router dom tutorials</h1>
        <ul classname = "nav">
            <li>
                <Link to="/"> Home</Link>
            </li>
            <li>
                 <Link to="/about"> About</Link>
            </li>
            <li>
                <Link to="/profile"> Profile</Link>
            </li>
        </ul></>
    )
        
}
export default Header;