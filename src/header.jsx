import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header(){
    const [type,settype]=useState(false);

    function handlenav(){
        settype(!type);
    }
   console.log(type);
    return(
        <>
        <div className="mainnav">
            <div>
                <h1>logo</h1>

            </div>
            <div className={type?"show":"close"}>
            <ul  className="navul" style={{display:"flex"}}>
         <NavLink to="/"> <li>Home</li>   </NavLink>   
         <NavLink  to="/about"> <li>About</li>  </NavLink>  
         <NavLink  to="/contact"> <li>contact</li>  </NavLink>  
         <NavLink  to="/project"> <li>Project</li>  </NavLink>  
         <NavLink  to="/gallary"> <li>Gallary</li>  </NavLink>  
        </ul>

            </div>

            <div className="burg">
                <button onClick={handlenav}>click</button>
            </div>


        </div>
       
       
        
        </>
    )
}

export default Header;