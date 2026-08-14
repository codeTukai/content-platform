interface InputProps{
    placeholder:string;
    onChange?:()=>void;
    ref?: any;
}


export function InputBox({placeholder, ref}:InputProps) {
  return (
    <div>
      <input
        type={"text"}
        ref={ref}
        placeholder={placeholder}
        className="px-2 py-2 text-black rounded-2xl"
      />
    </div>
  );
}