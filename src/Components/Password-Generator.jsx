import { useCallback, useState,useEffect } from "react";

export default function PasswordGenerator() {
  let [length, setLength] = useState(8);

  let [numberAllowed, setNumberAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    var pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "123456789";
    if (charAllowed) str += !"@#$%^&*()_+{}[]=--";
    for (let i = 1; i <=  length.length; i++) {
      let char= Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
      pass = char;
      setPassword(pass);
    }
  }, [length, numberAllowed, charAllowed, setPassword]);
useEffect(()=>{
  passwordGenerator();
},[length, numberAllowed, charAllowed,passwordGenerator])
  return (
    <>
      <div className="w-full h-screen text-white m-0 p-0 flex justify-center items-center	">
        <div className="bg-gray-500 h-36 w-full p-2 flex flex-col justify-center items-center">
          <span>
            <input
              type="text"
              readOnly=""
              className="w-46 bg-white text-orange-500 p-1 mb-4 "
              value={pass}
            />
            <button className="bg-blue-600 text-white p-1.5  rounded-lg  ">
              Copy
            </button>
          </span>
          <br />
          <span>
            <input
              type="range"
              name=""
              id=""
              className=""
              min={8}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />

            <label   className="text-orange-500 size-1">
              Length ({length})
            </label>
            <input
              type="checkbox"
              name=""
              id=""
              className="ml-2 p-1"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label   className="text-orange-500">
              Numbers
            </label>
            <input
              type="checkbox"
              name=""
              id=""
              className="ml-2 p-1"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label  className="text-orange-500">
              Letters
            </label>
          </span>
        </div>
      </div>
    </>
  );
}
