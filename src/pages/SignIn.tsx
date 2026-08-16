import { useRef } from "react";
import { Button } from "../component/ui/Button";
import { InputBox } from "../component/ui/InputBox";
import axios from "axios";
import { DATABASE_URL } from "./config";
import { useNavigate } from "react-router-dom";


export function SignIn() {

  const usernameRef= useRef<HTMLInputElement>(null);
      const passwordRef= useRef<HTMLInputElement>(null);
      const navigate = useNavigate()
  
      async function signin() {
          const username = usernameRef.current?.value
          const password = passwordRef.current?.value
          console.log("db is",DATABASE_URL);
          
          const response = await axios.post(DATABASE_URL + "/api/v1/user/signin",{
              username,
              password
          })
         const jwt = response.data.token;
         localStorage.setItem("token", jwt);
         navigate("/dashboard")
      }
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl p-8 border min-w-48">
                <InputBox ref={usernameRef} placeholder="Enter Username" />
                <InputBox ref={passwordRef} placeholder="Enter Username" />
                <div className="flex justify-center">
                <Button onClick={signin} variant="secondary" size="md" text="SignIn" fullWidth={true}/>
            </div>
                </div>
        </div>
  )
}
