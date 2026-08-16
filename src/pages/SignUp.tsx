import { useRef } from "react";
import { Button } from "../component/ui/Button";
import { InputBox } from "../component/ui/InputBox";
import axios from "axios";
import { DATABASE_URL } from "./config";
import { useNavigate } from "react-router-dom";

export function SignUp() {
    const usernameRef= useRef<HTMLInputElement>(null);
    const passwordRef= useRef<HTMLInputElement>(null);
    const navigate = useNavigate()

    async function signup() {
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value
        console.log("db is",DATABASE_URL);
        
        await axios.post(DATABASE_URL + "/api/v1/user/signup",{
         
            username,
            password
         
          
        })
        alert("you have sign up")
        navigate("/login")
    }
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl  p-8 border min-w-48">
        <InputBox placeholder="Enter Username" ref={usernameRef}/>
        <br />
        <InputBox placeholder="Enter Password" ref={passwordRef}/>
        <br />
        <div className="flex justify-center">
          <Button onClick={signup} variant="orbitary" size="md" text="SignUp" fullWidth={true} />
        </div>
      </div>
    </div>
  );
}
