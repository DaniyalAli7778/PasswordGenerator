import React from "react";

export default function PasswordGenerator() {
  return (
    <>
      <div className="w-full h-screen text-white m-0 p-0 flex justify-center items-center	">
        <div className="bg-gray-500 h-36 w-96 p-2 flex flex-col justify-center">
         <span> <input type="text" className="w-46 bg-white text-orange-500 p-1 mb-4 " />
          <button className="bg-blue-600 text-white p-1.5  rounded-lg  "> Copy</button>
          </span>
          <br />
          <span>
          <input type="range" name="" id=""  className="w-15"/>
          <label htmlFor="">Length ({length})</label> 
          <input type="checkbox" name="" id=""className="ml-3" />
          <label htmlFor="" >Numbers</label> 
          <input type="checkbox" name="" id="" className="ml-3"/>
          <label htmlFor="" >Letters</label> 
          </span>
        </div> 
      </div>
    </>
  );
}
