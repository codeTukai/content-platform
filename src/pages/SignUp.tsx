import { useRef } from "react";
import { Button } from "../component/ui/Button";
import { InputBox } from "../component/ui/InputBox";

export function SignUp() {
    const usernameRef= useRef<HTMLInputElement>();
    const passwordRef= useRef<HTMLInputElement>();

    function signup() {
        const username = usernameRef.current?.value
        const password = usernameRef.current?.value
    }
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl  p-8 border min-w-48">
        <InputBox placeholder="Enter Username" ref={usernameRef}/>
        <br />
        <InputBox placeholder="Enter Username" ref={passwordRef}/>
        <br />
        <div className="flex justify-center">
          <Button onClick={signup} variant="orbitary" size="md" text="SignUp" fullWidth={true} />
        </div>
      </div>
    </div>
  );
}
