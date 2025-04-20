import React from "react";

function Order(){
    return(
        <>
      <div className="mt-28 text-center">
      <p className="text-blue-500 text-3xl  m-2 font-bold" >Provide your order details</p>
      <p className="text-blue-300 m-2 font-bold">These details are essential and help writers understand what you need.</p>

      </div>
       
<section>
    <div className="grid md:grid-cols-2 justify-items-center items-center m-20">
        <div>
        <form  action="https://formspree.io/f/mnnpepvb" method="POST"  >
  <label className=" font-bold" forHTML="browsers"> Type of paper</label><br/>
  <input className="text-center   md:h-12 md:w-96 h-8 w-48 bg-blue-100 "  list="browsers" placeholder="Q Type" name="PAPER TYPE" />
  <datalist id="browsers">
    <option value="A3"/>
    <option value="A4"/>
    <option value="A5"/>
    <option value="DRAWING PAGE"/>
    <option value="LAB-FILE"/>
  </datalist><br/><br/>
 
  {/* <input type="submit" value="Submit" /> */}
  <label className=" font-bold" forHTML="browser">Subject</label><br/>
  <input className="text-center md:h-12 md:w-96 h-8 w-48 bg-blue-100"  list="browser" placeholder="Q Subject" name="SUBJECT" />
  <datalist id="browser">
    <option value="MATHS"/>
    <option value="ENGLISH"/>
    <option value="HINDI"/>
    <option value="SCIENCE"/>
    <option value="WEBSIT ORDER"/>
  </datalist> <br/><br/><br/>
   
   <label forHTML="ins" className="font-bold ">Instruction</label> <br/>
  <textarea name="message" id="ins" className="bg-blue-100 md:h-20 md:w-96 h-14 w-48 " placeholder=" Please Enter Instructions " required/><br/><br/><br/>
  <button type="submit" className="bg-green-600 w-48 h-7 font-bold">NEXT</button>
 
</form>
        </div>
        <div className="md:mt-1 md:ml-6 mt-4">
      <img className="md:h-96 md:w-96" src="https://pbs.twimg.com/media/GovUd2nXQAAnT3J?format=png&name=small" alt="noimage" />

        </div>
    </div>


</section>
       
        
        </>
    )
}

export default Order;