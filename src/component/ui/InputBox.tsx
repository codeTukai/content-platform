import { forwardRef } from "react";

interface InputProps {
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, onChange }, ref) => {
    return (
      <div className="w-full">
        <input
          type="text"
          ref={ref}
          placeholder={placeholder}
          onChange={onChange}
          className="
            w-full
            px-4
            py-2
            text-black
            border
            border-gray-300
            rounded-xl
            outline-none
            transition
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-100
          "
        />
      </div>
    );
  }
);

InputBox.displayName = "InputBox";