import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header(){
    // const [type,settype]=useState(false);

//     function handlenav(){
//         settype(!type);
//     }
//    console.log(type);
    return(
        <>
        <div className="grid grid-cols-3 justify-items-center items-center fixed w-screen z-10 top-0 bg-blue-600 h-20">
            <div>
               <img className="w-10 h-10 " src="https://cdn-icons-png.flaticon.com/128/8968/8968856.png" alt="noimage" />

            </div>
            <div>
            <ul  className="flex gap-5">
         <NavLink to="/"> <li className="text-blue-50 font-bold">Gym</li>   </NavLink>   
         <NavLink  to="/about"> <li className="text-blue-50 font-bold" >Pool</li>  </NavLink>  
         <NavLink  to="/contact"> <li className="text-blue-50 font-bold">Restorent</li>  </NavLink>  
         <NavLink  to="/project"> <li className="text-blue-50 font-bold">Room's</li>  </NavLink>  
         <NavLink  to="/gallary"> <li className="text-blue-50 font-bold">Gallary</li>  </NavLink>  
         
        </ul>

            </div>

            <div >
                <button className="bg-yellow-600 rounded-2xl w-28 text-white" >Owner</button>
            </div>


        </div>
       
       
        
        </>
    )
}

export default Header;