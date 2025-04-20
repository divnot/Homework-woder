
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";


function Home(){

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 3,
        slidesToScroll: 1,
      };


    return(
        <>
     <div className="flex justify-center ">
     <img  className="h-20 mt-32" src="https://asset.edubirdie.com/bundles/asterfreelance/_layout/images/EdubirdieCom/hiw-intro/hiw-bird_mob@2x.png" alt="noimage" />

     </div>
   
     
     <p className="font-bold text-5xl text-gray-700 text-center">Assigment Writting Services</p>
     <p className="font-bold md:text-3xl text-2xl m-1  text-gray-700 text-center">Get help you need for essays writing assignments, and more</p>

    <div className="flex justify-center">
   
    <NavLink  to="/order">  <button className="bg-yellow-400 text-center w-48 m-4 h-10">Place Order</button>  </NavLink>
        

    </div>


    <section className="grid grid-cols-3 md:m-14  m-4 justify-items-center items-center">
        <div>
            <span className="flex md:gap-5 gap-3"><img  className=" md:h-20 h-10 md:w-20 w-8 " src="https://cdn-icons-png.flaticon.com/128/7922/7922188.png" alt="Noimage" /> <p className="font-bold  ">Mars Fitness </p> </span>
        </div>
        <div>
        <span className="flex md:gap-5 gap-3"><img  className=" md:h-20 h-10 md:w-20 w-8"  src="https://cdn-icons-png.flaticon.com/128/3476/3476457.png" alt="Noimage" /> <p  className="font-bold "> My Portfolio</p> </span>
        </div>
        <div>
        <span className="flex md:gap-5 gap-3"><img  className=" md:h-20 h-10 md:w-20 w-8 " src="https://cdn-icons-png.flaticon.com/128/4090/4090395.png" alt="Noimage" /> <p  className="font-bold ">Homework Dower</p> </span>
        </div>
    </section>




    <section  >
    
    <p className="text-4xl text-gray-700 font-bold mt-12  text-center  p-2">Work Highlights</p> 
       <div className="flex justify-center items-center ">
      <div className="w-10/12 m-9 ">
          <Slider {...settings}>
        <div className="lg:p-5 m-3 p-1 "  >
         <img className="lg:w-screen lg:h-auto h-52  w-auto    rounded-lg" src="https://scontent.fdel3-1.fna.fbcdn.net/v/t1.6435-9/117127627_3372010126194875_3114588072028069026_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=22onAgX6bCMQ7kNvwE4mrbX&_nc_oc=Adn3oEanJePPsLrktEhO7eAZZqnEsj34eF7NUF6F_3NXuoelnt65yttUK_sqVH3j8Q_HJzpLDSIzSPerqb67riwX&_nc_zt=23&_nc_ht=scontent.fdel3-1.fna&_nc_gid=h80HeTnbf1pHoq86_VfObA&oh=00_AfGQaehH_2cmAvCkhj0N0MEEx_TBf6PXuJ02fcWWACl06A&oe=681BFBDE" alt="noimage" />
        </div>
        <div className="lg:p-5 m-3 p-1  ">
         <img className="lg:w-screen lg:h-auto h-52  w-auto  rounded-lg" src="https://scontent.fdel3-1.fna.fbcdn.net/v/t1.6435-9/117127627_3372010126194875_3114588072028069026_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=22onAgX6bCMQ7kNvwE4mrbX&_nc_oc=Adn3oEanJePPsLrktEhO7eAZZqnEsj34eF7NUF6F_3NXuoelnt65yttUK_sqVH3j8Q_HJzpLDSIzSPerqb67riwX&_nc_zt=23&_nc_ht=scontent.fdel3-1.fna&_nc_gid=h80HeTnbf1pHoq86_VfObA&oh=00_AfGQaehH_2cmAvCkhj0N0MEEx_TBf6PXuJ02fcWWACl06A&oe=681BFBDE" alt="noimage" />
        </div>
        <div className="lg:p-5 m-3 p-1  ">
         <img className="lg:w-screen lg:h-auto h-52  w-auto  rounded-lg" src="https://scontent.fdel3-1.fna.fbcdn.net/v/t1.6435-9/117127627_3372010126194875_3114588072028069026_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=22onAgX6bCMQ7kNvwE4mrbX&_nc_oc=Adn3oEanJePPsLrktEhO7eAZZqnEsj34eF7NUF6F_3NXuoelnt65yttUK_sqVH3j8Q_HJzpLDSIzSPerqb67riwX&_nc_zt=23&_nc_ht=scontent.fdel3-1.fna&_nc_gid=h80HeTnbf1pHoq86_VfObA&oh=00_AfGQaehH_2cmAvCkhj0N0MEEx_TBf6PXuJ02fcWWACl06A&oe=681BFBDE " alt="noimage" />
        </div>
        <div className="lg:p-5 m-3 p-1  ">
         <img className="lg:w-screen lg:h-auto h-52  w-auto  rounded-lg" src="https://scontent.fdel3-1.fna.fbcdn.net/v/t1.6435-9/117127627_3372010126194875_3114588072028069026_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=22onAgX6bCMQ7kNvwE4mrbX&_nc_oc=Adn3oEanJePPsLrktEhO7eAZZqnEsj34eF7NUF6F_3NXuoelnt65yttUK_sqVH3j8Q_HJzpLDSIzSPerqb67riwX&_nc_zt=23&_nc_ht=scontent.fdel3-1.fna&_nc_gid=h80HeTnbf1pHoq86_VfObA&oh=00_AfGQaehH_2cmAvCkhj0N0MEEx_TBf6PXuJ02fcWWACl06A&oe=681BFBDE" alt="noimage" />
        </div>
        <div className="lg:p-5 m-3 p-1  ">
         <img className="lg:w-screen lg:h-auto h-52  w-auto  rounded-lg" src="https://scontent.fdel3-1.fna.fbcdn.net/v/t1.6435-9/117127627_3372010126194875_3114588072028069026_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=22onAgX6bCMQ7kNvwE4mrbX&_nc_oc=Adn3oEanJePPsLrktEhO7eAZZqnEsj34eF7NUF6F_3NXuoelnt65yttUK_sqVH3j8Q_HJzpLDSIzSPerqb67riwX&_nc_zt=23&_nc_ht=scontent.fdel3-1.fna&_nc_gid=h80HeTnbf1pHoq86_VfObA&oh=00_AfGQaehH_2cmAvCkhj0N0MEEx_TBf6PXuJ02fcWWACl06A&oe=681BFBDE" alt="noimage" />
        </div >
        <div  className="lg:p-5 m-3 p-1  " >
         <img className="lg:w-screen lg:h-auto h-52  w-auto  rounded-lg" src="https://scontent.fdel3-1.fna.fbcdn.net/v/t1.6435-9/117127627_3372010126194875_3114588072028069026_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=22onAgX6bCMQ7kNvwE4mrbX&_nc_oc=Adn3oEanJePPsLrktEhO7eAZZqnEsj34eF7NUF6F_3NXuoelnt65yttUK_sqVH3j8Q_HJzpLDSIzSPerqb67riwX&_nc_zt=23&_nc_ht=scontent.fdel3-1.fna&_nc_gid=h80HeTnbf1pHoq86_VfObA&oh=00_AfGQaehH_2cmAvCkhj0N0MEEx_TBf6PXuJ02fcWWACl06A&oe=681BFBDE" alt="noimage" />
        </div>  
      </Slider>
          </div>
      </div> 
        </section>  

    <section className="m-10 mt-20 ">
        <p className="font-bold md:text-4xl text-3xl text-center text-gray-700">Benefits and guarantees</p>

        <div className="grid md:grid-cols-2 grid-cols-1 m-5 justify-items-center items-center "
        >
        <div className="m-2">
          <span className="flex gap-10 " ><img className="md:h-14 h-10 md:w-14 w-10"  src="https://asset.edubirdie.com/bundles/asterfreelance/_layout/images/EdubirdieCom/mars/emojis/papers.webp?1744032887" alt="noimage" />  <p className="text-gray-700 text-2xl">Instructions are followed</p>              </span>  
        </div>
        <div className="m-2">
           <span className="flex gap-10 " ><img className="md:h-14 h-10 md:w-14 w-10" src="https://asset.edubirdie.com/bundles/asterfreelance/_layout/images/EdubirdieCom/mars/emojis/money-fly.webp?1744032887" alt="noimage" />  <p  className="text-gray-700 text-2xl">Money-back is guaranteed</p>             </span> 
        </div>
        <div className="m-2">
           <span className="flex gap-10 " ><img className="md:h-14 h-10 md:w-14 w-10" src="https://asset.edubirdie.com/bundles/asterfreelance/_layout/images/EdubirdieCom/mars/emojis/deadlines.webp?1744032887" alt="noimage" />     <p  className="text-gray-700 text-2xl">Deadlines are met on time</p>         </span> 
        </div>
        <div className="m-2">
           <span className="flex gap-10 " ><img className="md:h-14 h-10 md:w-14 w-10" src="https://asset.edubirdie.com/bundles/asterfreelance/_layout/images/EdubirdieCom/mars/emojis/confidential-man.webp?1744032887" alt="noimage" />    <p  className="text-gray-700 text-2xl">Confidentiality is ensured</p>          </span> 
        </div>
        <div className="m-2">
           <span className="flex gap-10 " ><img className="md:h-14 h-10 md:w-14 w-10" src="https://asset.edubirdie.com/bundles/asterfreelance/_layout/images/EdubirdieCom/mars/emojis/loupe.webp?1744032887" alt="noimage" />  <p  className="text-gray-700 text-2xl">Original content is provided</p>             </span> 
        </div>
        <div className="m-2">
           <span className="flex gap-10 " ><img className="md:h-14 h-10 md:w-14 w-10" src="https://asset.edubirdie.com/bundles/asterfreelance/_layout/images/EdubirdieCom/mars/emojis/chat.webp?1744032887" alt="noimage" />   <p  className="text-gray-700 text-2xl">Support is available 24/7</p>            </span> 
        </div>

        </div>
        
    </section>


    <section>
        <p className=" md:text-5xl m-3 text-3xl text-center text-gray-700 font-bold">
        Prices and services

        </p>
      

        <p className=" text-gray-700 m-2 text-center ">
        Prices start at $10.99/page and depend on the page count, deadline, and writer's level

        </p>


        <div className="grid md:grid-cols-2 m-5  grid-cols-1 justify-items-center items-center ">
            <div className="border m-2 p-4 border-black rounded-2xl">
          <p className="text-3xl font-bold text-gray-700">Included services</p>
          <p className="text-gray-500">You’ll always get them for free</p>
          <hr/>
          <span className=" flex gap-28">
            <p>Formatting</p> <p className="bg-slate-200 rounded-2xl">Free</p>
            </span>

            <span className=" flex gap-28">
            <p>Formatting</p> <p className="bg-slate-200 rounded-2xl">Free</p>
            </span>

            <span className=" flex gap-28">
            <p>Formatting</p> <p className="bg-slate-200 rounded-2xl">Free</p>
            </span>

            <span className=" flex gap-28">
            <p>Formatting</p> <p className="bg-slate-200 rounded-2xl">Free</p>
            </span>
           
            </div>
            <div className="border p-4 m-2 border-black rounded-2xl"> 
            <p className="text-3xl font-bold text-gray-700">Additional services</p>
          <p className="text-gray-500">You’ll always get them for free</p>
          <hr/>
          <span className=" flex gap-28">
            <p>Formatting</p> <p className="bg-slate-200 rounded-2xl">Free</p>
            </span>

            <span className=" flex gap-28">
            <p>Formatting</p> <p className="bg-slate-200 rounded-2xl">Free</p>
            </span>

            <span className=" flex gap-28">
            <p>Formatting</p> <p className="bg-slate-200 rounded-2xl">Free</p>
            </span>

            <span className=" flex gap-28">
            <p>Formatting</p> <p className="bg-slate-200 rounded-2xl">Free</p>
            </span>
            </div>
        </div>

       <div className="flex justify-center">
       <NavLink  to="/order">  <button className="bg-yellow-400 w-40 m-2 h-8" >Create Order</button> </NavLink>
     
       </div>
       <p className="text-gray-500  text-center">fill out the form to see Prices</p>
      
    </section>


    <section className="m-10 mt-20 ">
        <p className="font-bold md:text-4xl text-3xl text-center text-gray-700">Benefits and guarantees</p>

        <div className="grid grid-cols-1 m-5 justify-items-center items-center ">
        <div className="m-2">
          <span className="flex gap-12 " ><img className=" h-14 w-10"  src="https://asset.edubirdie.com/bundles/asterfreelance/_layout/images/EdubirdieCom/mars/emojis/sign.webp?1744120257" alt="noimage" />  <p className="text-gray-700 text-2xl">Instructions are followed</p>              </span>  
        </div>
        <div>
        <NavLink to="/order" >  <button className="w-44 h-10 rounded-2xl mb-2 bg-yellow-400">Create Order</button> </NavLink>
        </div>
        <div className="m-2">
           <span className="flex gap-14 " ><img className=" h-10  w-10" src="https://asset.edubirdie.com/bundles/asterfreelance/_layout/images/EdubirdieCom/mars/emojis/teacher.webp?1744120257" alt="noimage" />  <p  className="text-gray-700 text-2xl">Money-back is guaranteed</p>             </span> 
        </div>
        <div className="m-2">
           <span className="flex gap-14 " ><img className=" h-10 w-10" src="https://asset.edubirdie.com/bundles/asterfreelance/_layout/images/EdubirdieCom/mars/emojis/card.webp?1744120257" alt="noimage" />     <p  className="text-gray-700 text-2xl">Deadlines are met on time</p>         </span> 
        </div>
        <div className="m-2">
           <span className="flex gap-14 " ><img className=" h-10  w-10" src="https://asset.edubirdie.com/bundles/asterfreelance/_layout/images/EdubirdieCom/mars/emojis/papers.webp?1744120257" alt="noimage" />     <p  className="text-gray-700 text-2xl">Deadlines are met on time</p>         </span> 
        </div>
       

        </div>
       
      
    </section>


    <section  >
    
    <p className="text-4xl text-gray-700 font-bold mt-12  text-center  p-2">Order and Details</p> 
       <div className="flex justify-center items-center ">
      <div className="w-10/12 m-9 ">
          <Slider {...settings}>
        <div className="lg:p-5 m-3 p-1 "  >
         <img className="lg:w-screen lg:h-auto h-52  w-auto    rounded-lg" src="https://pbs.twimg.com/media/Go6CLGUWkAAtYWO?format=jpg&name=large" alt="noimage" />
        </div>
        <div className="lg:p-5 m-3 p-1  ">
         <img className="lg:w-screen lg:h-auto h-52  w-auto  rounded-lg" src="https://pbs.twimg.com/media/Go6CLHeWMAAxDUZ?format=jpg&name=large" alt="noimage" />
        </div>
        <div className="lg:p-5 m-3 p-1  ">
         <img className="lg:w-screen lg:h-auto h-52  w-auto  rounded-lg" src="https://pbs.twimg.com/media/Go6CLKpXkAABB7F?format=jpg&name=large " alt="noimage" />
        </div>
        <div className="lg:p-5 m-3 p-1  ">
         <img className="lg:w-screen lg:h-auto h-52  w-auto  rounded-lg" src="https://pbs.twimg.com/media/Go6CLHeWMAAxDUZ?format=jpg&name=large" alt="noimage" />
        </div>
        <div className="lg:p-5 m-3 p-1  ">
         <img className="lg:w-screen lg:h-auto h-52  w-auto  rounded-lg" src="https://pbs.twimg.com/media/Go6CLKpXkAABB7F?format=jpg&name=large" alt="noimage" />
        </div >
        <div  className="lg:p-5 m-3 p-1  " >
         <img className="lg:w-screen lg:h-auto h-52  w-auto  rounded-lg" src="https://pbs.twimg.com/media/Go6CLHeWMAAxDUZ?format=jpg&name=large" alt="noimage" />
        </div>  
      </Slider>
          </div>
      </div> 
        </section>  

    <section>
      <div className="grid md:grid-cols-4 bg-gray-400 grid-cols-1 justify-items-center items-center m-3">
        <div>
          <img src="https://asset.edubirdie.com/bundles/asterfreelance/_layout/images/EdubirdieCom/mars/stats/stats-birdie.webp?1744120257" alt="noimage" />
        </div>
        <div>
          <p className="font-bold  md:text-start text-center">100+</p>
          <p>orders are completed monthly</p>

        </div>
        <div>
        <p  className="font-bold md:text-start text-center">86%</p>
        <p> customers have improved their grades</p>
        </div>
        <div>
        <p  className="font-bold md:text-start text-center">9/10</p>
        <p> orders are delivered before their deadlines</p>

        </div>
      </div>
    </section>
   
    <div className="m-10">
    <p className="text-center text-4xl font-bold">Join our online community</p>
    <p className="text-center ">Homework dower is more than just a writing platform</p>
    </div>

    <section className="grid md:grid-cols-3 grid-cols-1  md:m-14  m-5 justify-items-center items-center">
    
        <div className="bg-slate-200 w-56 rounded-2xl m-5 " >
            <span className="flex md:gap-5 gap-3"><img  className=" md:h-20 h-10 md:w-20 w-9 " src="https://cdn-icons-png.flaticon.com/128/15047/15047587.png" alt="Noimage" /> <p className="font-bold  ">Mail </p> </span>
        </div>
        <div className="bg-slate-200 w-56 rounded-2xl  m-5">
        <span className="flex md:gap-5 gap-3"><img  className=" md:h-20 h-10 md:w-20 w--w-9"  src="https://cdn-icons-png.flaticon.com/128/2504/2504923.png" alt="Noimage" /> <p  className="font-bold ">linked In</p> </span>
        </div>
        <div className="bg-slate-200 w-56 rounded-2xl  m-5">
        <span className="flex md:gap-5 gap-3"><img  className=" md:h-20 h-10 md:w-20 w-9 " src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png" alt="Noimage" /> <p  className="font-bold ">x (twitter)</p> </span>
        </div>
    </section>


    


    <section className="bg-slate-200 md:h-64">
      <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center items-center mt-20">
        <div>
          <img src="https://asset.edubirdie.com/bundles/asterfreelance/_layout/images/EdubirdieCom/mars/bird-with-stick.avif?1744120257" alt="noimage" />
        </div>
        <div>
          <p className="text-3xl font-bold">Join our 150+ of happy users</p>
          <p>Get original papers written according to your instructions</p>
          <p> 
          Save time for what matters most
          </p>
          <div className="flex md:justify-start justify-center">
          <NavLink to="/order" > <button className="bg-yellow-400 w-40 m-2 h-10 ">place an order</button> </NavLink>
      </div>
        </div>
      </div>
      
    </section>



        
        </>
    )
}
export default Home;