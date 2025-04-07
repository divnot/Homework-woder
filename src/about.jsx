import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function About(){
  var setting = {
    dots: true,
    infinite: true,
    speed: 400,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

    return(
        <>

   

<main  className="grid grid-cols-1  w-auto justify-items-center items-center"  >
  <div className=" md:w-11/12 w-10/12  mt-24 mb-10 lg:h-[28rem]  h-[25rem]">
      <Slider {...setting}>
      <div  >
       
    <img className=" w-screen  object-fill object-center lg:h-[28rem] h-[25rem]  " src="https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/11/Online-personal-training-1920x591-1.jpg?fit=1920%2C591&ssl=1" alt="noimage" />
    </div>
    <div>
     <img className="w-screen  object-fill object-center lg:h-[28rem] h-[25rem] " src="https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/11/Offline-personal-training-1920x591-1.jpg?fit=1920%2C591&ssl=1" alt="noimage" />
    </div>
    <div>
     <img className="w-screen  object-fill object-center lg:h-[28rem] h-[25rem] " src="https://i0.wp.com/goldsgym.in/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-13-at-6.03.31-PM.jpeg?fit=1600%2C492&ssl=1" alt="noimage" />
    </div>
    <div>
     <img className="w-screen  object-fill object-center lg:h-[28rem] h-[25rem] " src="https://www.anytimefitness.co.in/wp-content/uploads/2025/02/Cardio-vs.-Strength-Training-Which-One-Benefits-Heart-Health-More.jpg " alt="noimage" />
    </div>
    <div>
     <img className="w-screen  object-fill object-center lg:h-[28rem] h-[25rem] " src="https://i.ytimg.com/vi/hma8nfpWQs4/maxresdefault.jpg" alt="noimage" />
    </div>
    <div>
     <img className="w-screen  object-fill object-center lg:h-[28rem] h-[25rem] " src="https://static.vecteezy.com/system/resources/previews/000/662/994/original/vector-colorful-fashion-sale-banner.jpg" alt="noimage" />
    </div>
   
  </Slider>
      </div>      
     
  </main>
<section>
<div className='grid lg:grid-cols-3 m-5 md:grid-cols-2 grid-cols-1 gap-3 w-auto justify-items-center items-center ' >
        <div className='maincard'>
          <div className='card'>
            <div className='cardfront'>
              <img className='relative left-28 pt-4'src="https://cdn-icons-png.flaticon.com/128/12294/12294398.png" alt="noimage" />
              <p className='font-bold text-center pt-14 text-2xl'>Frontend skills</p>
               </div>
            <div className='cardback'>
            <img className='relative left-28 pt-4'src="https://cdn-icons-png.flaticon.com/128/12294/12294398.png" alt="noimage" />
            <p className='font-bold text-center pt-11 text-2xl '>HTML,CSS,J.S,REACT,T.S,SASS AND BOOSTRAP</p>
            </div>

          </div>
          
        </div>
        <div className='maincard'>
          <div className='card'>
            <div className='cardfront'> 
            <img className='relative left-28' src="https://cdn-icons-png.flaticon.com/128/6213/6213731.png" alt="noimage" />
            <p className='font-bold text-center pt-14 text-2xl'>Backend skills</p>
            </div>
            <div className='cardback'> 
            <img className='relative left-28 pt-4'src="https://cdn-icons-png.flaticon.com/128/12294/12294398.png" alt="noimage" />
            <p className='font-bold text-center pt-12 text-2xl'>NEXT.JS, POSTMAN, NODE.JS</p>
            </div>

          </div>
          
        </div>
        <div className='maincard'>
          <div className='card'>
            <div className='cardfront'> 
            <img className='relative left-28'  src="https://cdn-icons-png.flaticon.com/128/270/270798.png" alt="noimage" />
            <p className='font-bold text-center pt-14 text-2xl'> verson-control</p>
               </div>
            <div className='cardback'> 
            <img className='relative left-28 pt-4'src="https://cdn-icons-png.flaticon.com/128/12294/12294398.png" alt="noimage" />
            <p className='font-bold text-center pt-12 text-2xl'>GIT-BASH/GITHUB</p>
            </div>

          </div>
          
        </div>
        <div className='maincard'>
          <div className='card'>
            <div className='cardfront'>
            <img className='relative left-28'  src="https://cdn-icons-png.flaticon.com/128/3732/3732413.png" alt="noimage" />
            <p className='font-bold text-center pt-14 text-2xl'>Management skills</p>
               </div>
            <div className='cardback'> 
            <img className='relative left-28 pt-4'src="https://cdn-icons-png.flaticon.com/128/12294/12294398.png" alt="noimage" />
            <p className='font-bold text-center pt-11 text-2xl'>HEAD-BOY,C.R,HOUSE-CAPTAIN,SPEAKER...</p>
            </div>

          </div>
          
        </div>
        <div className='maincard'>
          <div className='card'>
            <div className='cardfront'> 
            <img className='relative left-28' src="https://cdn-icons-png.flaticon.com/128/4219/4219718.png" alt="noimage" />
            <p className='font-bold text-center pt-14 text-2xl'>Languages skills</p>
               </div>
            <div className='cardback'>
            <img className='relative left-28 pt-4'src="https://cdn-icons-png.flaticon.com/128/12294/12294398.png" alt="noimage" />
            <p className='font-bold text-center pt-11 text-2xl'>ENGLISH(2 ACCENT), FRENCH, HINDI</p>
            </div>

          </div>
          
        </div>

        <div className='maincard'>
          <div className='card'>
            <div className='cardfront'> 
            <img className='relative left-28' src="https://cdn-icons-png.flaticon.com/128/7185/7185812.png" alt="noimage" />
            <p className='font-bold text-center pt-14 text-2xl'>Public speaking </p>
               </div>
            <div className='cardback'>
            <img className='relative left-28 pt-4'src="https://cdn-icons-png.flaticon.com/128/12294/12294398.png" alt="noimage" />
            <p className='font-bold text-center pt-11 text-2xl'>SCHOOL,COLLEGE,PUBLIC-STAGE LEVEL</p>
            </div>

          </div>
          
        </div>
       
       
      </div>
</section>

<section  >
    <p className="text-center text-5xl text-blue-600 m-8 font-bold ">Preview</p>
    <div className="grid md:grid-cols-2  m-5 grid-cols-1 justify-items-center items-center"  >
        <div>
            <img className="md:w-96 w-72" src="https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Corporate-Membership.jpg?resize=600%2C400&ssl=1" alt="noimage" />

        </div>
        <div>
            <p className="text-2xl text-center text-black font-bold">Corporate Membership</p>
            <p className="text-center">
                Don’t have time to go to the gym? We get the gym to you. Gold's Gym India offers corporate membership  programs tailored for companies looking to promote employee wellness and fitness. These programs are designed to encourage a healthier workforce by providing BMI screening, diet and nutrition counselling, fitness activities and seminars for building a healthier lifestyle.
            </p>

        </div>
    </div>
</section>


<section className=" mt-5 mb-5 h-auto w-screen bg-[url(https://giffiles.alphacoders.com/948/94825.gif)] no-bg-repeat bg-cover bg-fixed  " >
<p className="text-center text-4xl font-bold m-5 text-yellow-400">Gym highlights</p>
  <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center"  >
    
  <div>
   <div>
    <p className=" text-center text-white text-2xl">
    Trainer
    </p>
    <p className="text-blue-400">

      There is 24 hour available traniner for pool and for gym as well no need to worri<br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>

    </p>
   </div>


  </div>
  <div>

  <div>
    <p className=" text-center text-white text-2xl">
     Equipment 
    </p>
    <p className="text-blue-400">
      There is 24 hour available traniner for pool and for gym as well no need to worri<br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>

    </p>
   </div>
  
  </div>
  </div>
 
</section>


<section>
  <p className="text-center font-bold text-yellow-400 text-4xl ">
    Our Program
  </p>
  <p className="m-5 text-center">
  The diverse range of programs, from group exercises, corporate training to personalized training, caters to varying fitness levels and goals. Members get variety and the option of customization as each gym offers a diversity of exercise options and specialized programs, allowing members to choose activities that align with their interests and fitness objectives. Personalized training programs ensure workouts are tailored to individual needs, maximizing results. Participating in group exercises fosters a sense of community among members, providing social support and encouragement, which can be instrumental in maintaining consistency in their fitness journey.

  </p>
  <div className="grid md:grid-cols-2 m-5 grid-cols-1 justify-items-center items-center">
    <div>
   <img className="h-80 w-screen" src=" https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Corporate-Membership.jpg?w=1125&ssl=1" alt="noimage" />
    </div>
    <div>
      <p className="text-center text-3xl m-2 text-yellow-400 font-bold ">Coperative program</p>
      <p>
      There is 24 hour available traniner for pool and for gym as well no need to worri<br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>

      </p>

    </div>

  </div>

  <div className="grid md:grid-cols-2 m-5 grid-cols-1 justify-items-center items-center">
    <div>
   
    <p className="text-center text-3xl m-2 text-yellow-400 font-bold ">Coperative program</p>
    
   <p>
      There is 24 hour available traniner for pool and for gym as well no need to worri<br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>

      </p>
    </div>
    <div>
     

      <img className="h-80 w-screen" src=" https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Corporate-Membership.jpg?w=1125&ssl=1" alt="noimage" />

    </div>

  </div>

  <div className="grid md:grid-cols-2 m-5 grid-cols-1 justify-items-center items-center">
    <div>
   <img className="h-80 w-screen" src=" https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Corporate-Membership.jpg?w=1125&ssl=1" alt="noimage" />
    </div>
    <div>
    <p className="text-center text-3xl m-2 text-yellow-400 font-bold ">Coperative program</p>
      
      <p>
      There is 24 hour available traniner for pool and for gym as well no need to worri<br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>

      </p>

    </div>

  </div>
  <div className="grid md:grid-cols-2 m-5 grid-cols-1 justify-items-center items-center">
    <div>
    <p className="text-center text-3xl m-2 text-yellow-400 font-bold ">Coperative program</p>
    <p>
      There is 24 hour available traniner for pool and for gym as well no need to worri<br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>

      </p>
    </div>
    <div>
     


      <img className="h-80 w-screen" src=" https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Corporate-Membership.jpg?w=1125&ssl=1" alt="noimage" />

    </div>

  </div>

  <div className="grid md:grid-cols-2 m-5 grid-cols-1 justify-items-center items-center">
    <div>
   <img className="h-80 w-screen" src=" https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Corporate-Membership.jpg?w=1125&ssl=1" alt="noimage" />
    </div>
    <div>
    <p className="text-center text-3xl m-2 text-yellow-400 font-bold ">Coperative program</p>
      <p>
      There is 24 hour available traniner for pool and for gym as well no need to worri<br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>
      There is 24 hour available traniner for pool and for gym as well no need to worri <br/>

      </p>

    </div>

  </div>
</section>

        
        </>
    )
}

export default About;