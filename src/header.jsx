import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Header(){
    // const [type,settype]=useState(false);

//     function handlenav(){
//         settype(!type);
//     }
//    console.log(type);

    const [type , settype]= useState(false);

    console.log(type);


function handlemal(){
    settype(!type);
}
    return(
        <>
        <div className="grid grid-cols-3 justify-items-center items-center fixed w-screen z-10 top-0 bg-blue-600 h-20">
            <div >
               {/* <img className="w-10 h-10 " src="https://cdn-icons-png.flaticon.com/128/3128/3128310.png" alt="noimage" /> */}
               <span className="flex justify-center md:gap-4 m-1 gap-1 mt-3 " ><img className="md:h-10 md:m-1 m-2 h-6 md:w-10 w-6"  src="https://cdn-icons-png.flaticon.com/128/2585/2585152.png" alt="noimage" />  <p className="text-yellow-200 text-[14px] font-bold ">ℌ𝔬𝔪𝔢𝔴𝔬𝔯𝔨 𝔇𝔬𝔴𝔢𝔯</p></span>  

            </div>
            <div  className={type ? "show": "close"}>
            <ul  className="flex gap-5">
         <NavLink to="/"> <li className="text-blue-50 font-bold">Services</li>   </NavLink>   
         <NavLink  to="/about"> <li className="text-blue-50 font-bold" >Pakges</li>  </NavLink>  
         <NavLink  to="/contact"> <li className="text-blue-50 font-bold">Working</li>  </NavLink>  
         <NavLink  to="/project"> <li className="text-blue-50 font-bold">About</li>  </NavLink>  
         <NavLink  to="/gallary"> <li className="text-blue-50 font-bold">websit</li>  </NavLink>  
          
         
        </ul>

            </div>

            <div >
                <button className="bg-yellow-600 rounded-2xl w-24 text-white" >Hier Writer</button>
            </div>
            <div className="pop">
    <button  onClick={handlemal} className="bg-black text-white  h-5  " ><GiHamburgerMenu /></button>
         </div> 

        </div>
       
       
        
        </>
    )
}

export default Header;