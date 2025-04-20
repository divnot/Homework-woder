import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button } from "bootstrap";
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
  <div className=" md:w-11/12 w-11/12  mt-24 mb-10 md:h-[32rem]  h-[25rem]">
      <Slider {...setting}>
      <div  >
       
    <img className=" w-screen  object-fill object-center md:h-[32rem] h-[25rem]  " src="https://img.freepik.com/premium-photo/mid-adult-man-using-mobile-phone_1048944-9693424.jpg?uid=R196701994&ga=GA1.1.1328997156.1739096467&semt=ais_hybrid&w=740" alt="noimage" />
    </div>
    <div>
     <img className="w-screen  object-fill object-center md:h-[32rem] h-[25rem] " src="https://img.freepik.com/premium-photo/young-teacher-review-tests-school-classroom_392895-168409.jpg?uid=R196701994&ga=GA1.1.1328997156.1739096467&semt=ais_hybrid&w=740" alt="noimage" />
    </div>
    <div>
     <img className="w-screen  object-fill object-center md:h-[32rem] h-[25rem] " src="https://img.freepik.com/premium-photo/young-man-using-smart-phone-against-blue-background_1048944-3070892.jpg?uid=R196701994&ga=GA1.1.1328997156.1739096467&semt=ais_hybrid&w=740" alt="noimage" />
    </div>
    <div>
     <img className="w-screen  object-fill object-center md:h-[32rem] h-[25rem] " src="https://img.freepik.com/premium-photo/young-man-using-calculator-shopping-receipts-managing-domestic-budget-alone_213441-356.jpg?uid=R196701994&ga=GA1.1.1328997156.1739096467&semt=ais_hybrid&w=740" alt="noimage" />
    </div>
    <div>
     <img className="w-screen  object-fill object-center md:h-[32rem] h-[25rem] " src="https://img.freepik.com/premium-photo/top-view-man-writing-checklist-blue-background_1303704-11044.jpg?uid=R196701994&ga=GA1.1.1328997156.1739096467&semt=ais_hybrid&w=740" alt="noimage" />
    </div>
    <div>
     <img className="w-screen  object-fill object-center md:h-[32rem] h-[25rem] " src="https://img.freepik.com/premium-photo/thoughtful-focused-young-designer-draws-with-pencil-with-wooden-dummy_213441-456.jpg?uid=R196701994&ga=GA1.1.1328997156.1739096467&semt=ais_hybrid&w=740" alt="noimage" />
    </div>
   
  </Slider>
      </div>      
     
  </main>
<section>
  <p className="font-bold text-center m-16 md:text-5xl text-3xl text-blue-800"> SPECIAL OFFER</p>
<div className='grid lg:grid-cols-3 m-5 md:grid-cols-2 grid-cols-1 gap-3 w-auto justify-items-center items-center ' >
        <div className='maincard'>
          <div className='card'>
            <div className='cardfront'>
              <img className='relative left-28 pt-4'src="https://cdn-icons-png.flaticon.com/128/2266/2266134.png" alt="noimage" />
              <p className='font-bold text-center pt-14 text-2xl'>Lab files</p>
               </div>
            <div className='cardback'>
            <img className='relative left-28 pt-4'src="https://cdn-icons-png.flaticon.com/128/12294/12294398.png" alt="noimage" />
            <p className='font-bold text-center pt-8 text-2xl text-white '>OFFER  </p>
            <div className="flex justify-center">
            <p  className="font-bold text-center bg-black w-20 text-white">799RS</p>
            </div>
           
           
            
            </div>

          </div>
          
        </div>
        <div className='maincard'>
          <div className='card'>
            <div className='cardfront'> 
            <img className='relative left-28' src="https://cdn-icons-png.flaticon.com/128/6213/6213731.png" alt="noimage" />
            <p className='font-bold text-center pt-14 text-2xl'>Project work</p>
            </div>
            <div className='cardback'> 
            <img className='relative left-28 pt-4'src="https://cdn-icons-png.flaticon.com/128/12294/12294398.png" alt="noimage" />
            <p className='font-bold text-center pt-8 text-2xl text-white '>OFFER  </p>
            <div className="flex justify-center">
            <p  className="font-bold text-center bg-black w-20 text-white">799RS</p>
            </div>
            </div>

          </div>
          
        </div>
        <div className='maincard'>
          <div className='card'>
            <div className='cardfront '> 
            <img className='relative mt-3 left-28'  src="https://cdn-icons-png.flaticon.com/128/8488/8488732.png" alt="noimage" />
            <p className='font-bold text-center pt-14 text-2xl'>Websit</p>
               </div>
            <div className='cardback'> 
            <img className='relative left-28 pt-4'src="https://cdn-icons-png.flaticon.com/128/12294/12294398.png" alt="noimage" />
            <p className='font-bold text-center pt-8 text-2xl text-white '>OFFER  </p>
            <div className="flex justify-center">
            <p  className="font-bold text-center bg-black w-20 text-white">799RS</p>
            </div>
            </div>

          </div>
          
        </div>
        <div className='maincard'>
          <div className='card'>
            <div className='cardfront'>
            <img className='relative left-28'  src="https://cdn-icons-png.flaticon.com/128/3732/3732413.png" alt="noimage" />
            <p className='font-bold text-center pt-14 text-2xl'>Onlie assigments</p>
               </div>
            <div className='cardback'> 
            <img className='relative left-28 pt-4'src="https://cdn-icons-png.flaticon.com/128/12294/12294398.png" alt="noimage" />
            <p className='font-bold text-center pt-8 text-2xl text-white '>OFFER  </p>
            <div className="flex justify-center">
            <p  className="font-bold text-center bg-black w-20 text-white">799RS</p>
            </div>
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
            <p className='font-bold text-center pt-8 text-2xl text-white '>OFFER  </p>
            <div className="flex justify-center">
            <p  className="font-bold text-center bg-black w-20 text-white">799RS</p>
            </div>
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
            <p className='font-bold text-center pt-8 text-2xl text-white '>OFFER  </p>
            <div className="flex justify-center">
            <p  className="font-bold text-center bg-black w-20 text-white">799RS</p>
            </div>
            </div>

          </div>
          
        </div>
       
       
      </div>
</section>

<section>
    <div className='animate mt-10 mb-10 pt-6'>
        <div className='slide lg:gap-4 gap-2'>
         
          < img className ='w-40  three' src="https://www.svgrepo.com/show/373535/css.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/373705/js-official.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/452092/react.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/452129/vs-code.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/374061/sass.svg" alt="noimage" />
          < img className ='w-40  three' src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/452210/git.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/452207/framer.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/452207/framer.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/475654/github-color.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/374118/tailwind.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/354118/nodejs.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/354202/postman-icon.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/331488/mongodb.svg" alt="noimage" />
        </div>
      </div>



    </section>



<section>
  <p className="text-center font-bold m-16 text-blue-800 md:text-5xl text-3xl ">
 SPECIAL OFFER
  </p>
  <p className="m-5 text-center text-blue-500">
  Hey there! <span className="text-blue-900 text-2xl font-bold ">value your money</span> Planning to ace your semester without breaking the bank? When you choose to buy assignments in bulk from us, we unlock a special combo designed just for you. Imagine getting a significant discount on the overall cost, making each assignment even more budget-friendly than you thought possible. This is your chance to get high-quality, well-researched assignments covering all your subjects at an incredibly minimal cost. Don't let this fantastic opportunity slip away – invest in your academic success without emptying your wallet!
  </p>
  <div className="grid md:grid-cols-2 m-10 grid-cols-1 justify-items-center items-center">
    <div>
   <img className="h-40 w-40" src="https://cdn-icons-png.flaticon.com/128/5371/5371425.png" alt="noimage" />
    </div>
    <div >
    
      <p className="font-bold text-blue-600 text-4xl m-4 animate-bounce text-center">
       OFFER
      </p>
      <p className="text-blue-500 font-bold mt-2 text-2xl text-center ">Order 4 assigments</p>
      <div className="flex justify-center">
      <button className="font-bold mt-2  text-white bg-blue-600 w-20 h-7">399Rs</button>

      </div>
     
     

    </div>

  </div>

  <div className="grid md:grid-cols-2 m-5 mt-20 grid-cols-1 justify-items-center items-center">
    <div className=" lg:order-none order-1">
    <p className="font-bold text-blue-600 text-4xl m-4 animate-bounce text-center">
       OFFER
      </p>
      <p className="text-blue-500 font-bold mt-2 text-2xl text-center ">Order 10 assigments</p>
      <div className="flex justify-center">
      <button className="font-bold mt-2  text-white bg-blue-600 w-20 h-7">799Rs</button>

      </div>
   
   
    </div>
    <div >
    <img className="h-40 w-40 " src="https://cdn-icons-png.flaticon.com/128/5371/5371425.png" alt="noimage" />
    </div>

  </div>

  <div className="grid md:grid-cols-2 m-5 grid-cols-1 mt-20 justify-items-center items-center">
    <div>
    <img className="h-40 w-40 " src="https://cdn-icons-png.flaticon.com/128/5371/5371425.png" alt="noimage" />
    </div>
    <div>
    <p className="font-bold text-blue-600 text-4xl m-4 animate-bounce text-center">
       OFFER
      </p>
      <p className="text-blue-500 font-bold mt-2 text-2xl text-center ">Order 20 assigments</p>
      <div className="flex justify-center">
      <button className="font-bold mt-2  text-white bg-blue-600 w-20 h-7">1099Rs</button>

      </div>
    </div>

  </div>
  <div className="grid md:grid-cols-2 m-5 mt-20 grid-cols-1 justify-items-center items-center">
    <div className="lg:order-none order-1">
    
    <p className="font-bold text-blue-600 text-4xl m-4 animate-bounce text-center">
       OFFER
      </p>
      <p className="text-blue-500 font-bold mt-2 text-2xl text-center ">Order 35 assigments</p>
      <div className="flex justify-center">
      <button className="font-bold mt-2  text-white bg-blue-600 w-20 h-7">2099Rs</button>

      </div>
    </div>
    <div>
    <img className="h-40 w-40" src="https://cdn-icons-png.flaticon.com/128/5371/5371425.png" alt="noimage" />

    </div>

  </div>

  <div className="grid md:grid-cols-2 m-5 grid-cols-1 justify-items-center items-center">
    <div>
    <img className="h-40 w-40" src="https://cdn-icons-png.flaticon.com/128/5371/5371425.png" alt="noimage" />
    </div>
    <div>
    <p className="font-bold text-blue-600 mt-20 text-4xl m-4 animate-bounce text-center">
       OFFER
      </p>
      <p className="text-blue-500 font-bold mt-2 text-2xl text-center ">Order 40 above assigments</p>
      <div className="flex justify-center">
      <button className="font-bold mt-2  text-white bg-blue-600 w-20 h-7">3099Rs</button>

      </div>

    </div>

  </div>
</section>

        
        </>
    )
}

export default About;