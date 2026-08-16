
import { useRef, useState } from "react";
import CrossIcon from "../../icons/CrossIcon";
import { Button } from "./Button";
import { InputBox } from "./InputBox";
import axios from "axios";
import { DATABASE_URL } from "../../pages/config";

enum TypeProps {
    youtube = "youtube",
    twitter = "twitter"
  }

export function CreateContentModal({ open, onClose }) {
  const [type, setType] = useState(TypeProps.youtube)
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  
  async function addContent(){
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    console.log("click me");
    console.log("title", title);
    console.log("link", link);
    
    
    const token = localStorage.getItem("token");
    console.log(token);
    
    await axios.post(`${DATABASE_URL}/api/v1/content/addContent`,{
      title,
      type,
      link
    },{
      headers:{
        token:localStorage.getItem("token")
      }
    }
  )
  }
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-gray-600 fixed top-0 left-0 opacity-60 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-8 rounded-md">
              <div className="flex justify-end ">
                <div onClick={onClose} className="cursor-pointer">
                <CrossIcon size="lg" />
                </div>
              </div>
              <div className="mb-2">
                <InputBox ref={titleRef}  placeholder={"Title"} />
                <InputBox ref={linkRef} placeholder={"Link"} />
            <div className=" justify-center p-2">
              <h1 className="p-4 ">Type</h1>
              <div className="mb-4 gap-4">
                <Button size="md" text="youtube" variant={type===TypeProps.youtube ? "primary" : "secondary"} 
                onClick={()=>{
                  setType(TypeProps.youtube)
                }}
                />
                <Button size="md" text="twitter" variant={type===TypeProps.twitter ? "primary" : "secondary"}
                onClick={()=>{
                  setType(TypeProps.twitter)
                }}
                />
              </div>
                <Button onClick={addContent} variant="primary" size="md" text="Submit" />
            </div>
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}



//  function InputBox({ref, onChange, placeholder }: { onChange: () => void }) {
//   return (
//     <div>
//       <input
//         type={"text"}
//         ref={ref}
//         placeholder={placeholder}
//         onChange={onChange}
//         className="px-2 py-2 text-black rounded-2xl"
//       />
//     </div>
//   );
// }
