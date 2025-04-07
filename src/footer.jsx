import React from "react";

function Footer(){
    return(
         <footer className="bg-blue-900 ">
        <div className="grid md:grid-cols-3 justify-items-center items-center  grid-cols-1">
            <div>
                <p className="text-3xl font-bold text-yellow-500" > Quick links</p>
                <ul>
                    <li className="text-white text-center">About</li>
                    <li className="text-white text-center">details</li>
                    <li className="text-white text-center">details</li>
                    <li className="text-white text-center">details</li>
                    <li className="text-white text-center">details</li>
                </ul>
            </div>
            <div>
                <p className="text-3xl font-bold text-center text-yellow-500 " >About us</p>
                <ul>
                <li className="text-white text-center">details</li>
                <li className="text-white text-center">details</li>
                <li className="text-white text-center">details</li>
                <li className="text-white text-center">details</li>
                <li className="text-white text-center">details</li>


                </ul>
                <div className="flex items-center justify-center m-2">
                <button className="text-center border-2 border-b-slate-950 bg-yellow-600   w-36" >Contact us</button>

                </div>
              

                <div className="flex gap-4 mt-3 ">
                  
                <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="noimage" />
                <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="noimage" />
                <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="noimage" />
                <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/3536/3536445.png" alt="noimage" />
                <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/1538/1538493.png" alt="noimage" />
                <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="noimage" />

                </div>
               
              
            </div>
            <div>
                <p className="text-3xl font-bold text-yellow-500">Latest Blog</p>
                <ul>
                <li className="text-white text-center">details</li>
                <li className="text-white text-center">details</li>
                <li className="text-white text-center">details</li>
                <li className="text-white text-center">details</li>
                <li className="text-white text-center">details</li>

                </ul>
            </div>

        </div> <br/>
        <hr/>
        <div className="grid lg:grid-cols-2  m-2 grid-cols-1 text-yellow-400 justify-items-center items-center  ">
        <div>
            <p >@2025 Mar's fitness Gym.in. All Rights Reserved.</p>
           
        </div>
        <div>
        Terms & Conditions | Privacy Policy
        </div>
        </div>
       
      

      <div className=" grid lg:grid-cols-2 grid-cols-1  justify-items-center items-center ">
        <div>
            <img className="h-24 w-24 " src="https://cdn-icons-png.flaticon.com/128/9546/9546977.png" alt="noiamge"/>
       
        </div>
       
        <div >
            <p className="p-2 m-1 text-blue-200 text-center">Related Searches:
            Gym Near Me, Gold’s Gym Mumbai Bandra, Corporate Wellness Program, Personal Training Program, Gym Memberships Near Me, Fitness Near Me, Golds Gym Near Me, Personal Training Near Me, Gyms In Pune Kalyani Nagar, Gyms In Bengaluru RR Nagar, Gyms In Delhi Greater Kailash, Gym Workout Routine, Weight Training for Weight Loss</p>

        </div>
      </div>
      
        
        
        </footer>
    )
}

export default Footer;