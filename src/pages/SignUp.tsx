import { Button } from "../component/ui/Button";
import { InputBox } from "../component/ui/InputBox";

export function SignUp() {
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl  p-8 border min-w-48">
        <InputBox placeholder="Enter Username" />
        <br />
        <InputBox placeholder="Enter Username" />
        <br />
        <div className="flex justify-center">
          <Button variant="orbitary" size="md" text="SignUp" fullWidth={true} />
        </div>
      </div>
    </div>
  );
}
