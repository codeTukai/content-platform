import { Button } from "../component/ui/Button";
import { InputBox } from "../component/ui/InputBox";


export function SignIn() {
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl p-8 border min-w-48">
                <InputBox placeholder="Enter Username" />
                <InputBox placeholder="Enter Username" />
                <div className="flex justify-center">
                <Button variant="secondary" size="md" text="SignIn" fullWidth={true}/>
            </div>
                </div>
        </div>
  )
}
