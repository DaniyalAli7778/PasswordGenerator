import { useCallback, useState,useEffect,useRef} from "react";

export default function PasswordGenerator() {
  let [length, setLength] = useState(8);

  let [numberAllowed, setNumberAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    var pass =  "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "123456789";
    if (charAllowed) str +=  "@#$%^&*()_+{}[]=--";
    for (let i = 1; i <=  length; i++) {
      let char= Math.floor(Math.random() * str.length + 1 );
      pass += str.charAt(char);
     
      setPassword(pass);
    }
  }, [length, numberAllowed, charAllowed,  setPassword]);
const [text,setText ]=useState("copy")
  //useRef hook 
const passwordRef= useRef(null);
  const passwordcopiedtoclipboard = useCallback(()=>{
    passwordRef.current?.select(password);
    window.navigator.clipboard.writeText(password)
  },[password]) 
useEffect(()=>{
  passwordGenerator();
},[length, numberAllowed, charAllowed,passwordGenerator, ])
  return (
    <>
      <div className="w-full h-screen text-white m-0 p-0 flex justify-center items-center	">
        <div className="bg-gray-500 h-36 w-full p-2 flex flex-col justify-center items-center">
          <span>
            <input
              type="text"
              ref={passwordRef}
              className="w-46  bg-white text-orange-500 p-1 mb-4 rounded-l-md "
            value={password}
          onChange={(event)=>{
            setPassword(event.target.value)
          }}
          readOnly=""
            />
            <button className="bg-blue-600 text-white p-1 w-20 h-  rounded-r-md"    onClick={()=>{
              passwordcopiedtoclipboard();
              setText("copied !");
             
              setTimeout(() => {
                alert("Text is Copied")
                setText("copy")
              }, 1000);
             
            }} >
             {text}
            </button>
          </span>
          <br />
          <span>
            <input
              type="range"
              
            
              min={8}
              max={15}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />

            <label  htmlFor="numberInput" className="text-orange-500 size-1" >
              Length ({length})
            </label>
            <input
              type="checkbox"
             id="numberInput"
           
              className="ml-2 p-1"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label    htmlFor="numberInput"   className="text-orange-500">
              Numbers
            </label>
            <input
              type="checkbox"
             
              id="characterInput"
              className="ml-2 p-1"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput" className="text-orange-500">
              Letters
            </label>
          </span>
        </div>
      </div>
    </>
  );
}
