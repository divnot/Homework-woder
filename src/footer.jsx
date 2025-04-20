import React from "react";

function Footer(){
    return(
         <footer className="bg-blue-900 ">
        <div className="grid md:grid-cols-3 justify-items-center items-center  grid-cols-1">
            <div>
                <p className="text-3xl font-bold text-yellow-500" > Quick links</p>
                <ul>
                    <li className="text-white text-center">Services</li>
                    <li className="text-white text-center">Packages</li>
                    <li className="text-white text-center">Working</li>
                    <li className="text-white text-center">About</li>
                    <li className="text-white text-center"> Websit</li>
                </ul>
            </div>
            <div>
                <p className="text-3xl font-bold text-center text-yellow-500 " >About us</p>
                <ul>
                <li className="text-white text-center">support </li>
                <li className="text-white text-center">blog-page</li>
                <li className="text-white text-center">Order</li>
                <li className="text-white text-center">Working</li>
                <li className="text-white text-center">Call-us</li>


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
                <li className="text-white text-center">Portfolio</li>
                <li className="text-white text-center">E-commerce</li>
                <li className="text-white text-center">Captize</li>
                <li className="text-white text-center">Home.wdower</li>
                <li className="text-white text-center">blogs</li>

                </ul>
            </div>

        </div> <br/>
        <hr/>
        <div className="grid lg:grid-cols-2  m-2 grid-cols-1 text-yellow-400 justify-items-center items-center  ">
        <div>
            <p >@2025 Homework Dower work.in. All Rights Reserved.</p>
           
        </div>
        <div>
        Terms & Conditions | Privacy Policy
        </div>
        </div>
       
      

      <div className=" grid lg:grid-cols-2 grid-cols-1  justify-items-center items-center ">
        <div>
            <img className="h-24 w-24 " src="https://asset.edubirdie.com/bundles/asterfreelance/_layout/images/EdubirdieCom/our-journey/our-journey-bird.png" alt="noiamge"/>
       
        </div>
       
        <div >
            <p className="p-2 m-1 text-blue-200 text-center">Related Searches:
            Homework Dower considers academic integrity to be the essential part of the learning process and does not support any violation of the academic standards. Should you have any questions regarding our Fair Use Policy or become aware of any violations, please do not hesitate to contact us via  Homework Dower support</p>

        </div>
      </div>
      
        
        
        </footer>
    )
}

export default Footer;