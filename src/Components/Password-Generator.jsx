import { useCallback, useState } from "react";

export default function PasswordGenerator() {
  let [length, setLength] = useState(8);

  let [numberAllowed, setNumberAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "123456789";
    if (charAllowed) str+= !"@#$%^&*()_+{}[]=--";    for (let i = 1; i <= array.length; i++) {
      pass = Math.floor(Math.random( ) * str.length + 1);
      pass = str.charAt( charAllowed)
      setPassword(pass);
    }
  }, [length, numberAllowed, charAllowed, setPassword]);
   
  return (
    <>
      <div className="w-full h-screen text-white m-0 p-0 flex justify-center items-center	">
        <div className="bg-gray-500 h-36 w-96 p-2 flex flex-col justify-center">
          <span>
            <input
              type="text"
              className="w-46 bg-white text-orange-500 p-1 mb-4 "
            />
            <button className="bg-blue-600 text-white p-1.5  rounded-lg  ">
              Copy
            </button>
          </span>
          <br />
          <span>
            <input type="range" name="" id="" className="" />

            <label htmlFor="" className="text-orange-500 size-1">
              Length ({length})
            </label>
            <input type="checkbox" name="" id="" className="ml-2 p-1" />
            <label htmlFor="" className="text-orange-500">
              Numbers
            </label>
            <input type="checkbox" name="" id="" className="ml-2 p-1" />
            <label htmlFor="" className="text-orange-500">
              Letters
            </label>
          </span>
        </div>
      </div>
    </>
  );
}
