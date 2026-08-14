
import CrossIcon from "../../icons/CrossIcon";
import { Button } from "./Button";

export function CreateContentModal({ open, onClose }) {
  
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
                <InputBox placeholder={"Title"} />
                <InputBox placeholder={"Link"} />
            <div className="flex justify-center p-2">

                <Button variant="primary" size="md" text="Submit" />
            </div>
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}



 function InputBox({ onChange, placeholder }: { onChange: () => void }) {
  return (
    <div>
      <input
        type={"text"}
        placeholder={placeholder}
        onChange={onChange}
        className="px-2 py-2 text-black rounded-2xl"
      />
    </div>
  );
}
