interface InputProps{
    placeholder:string;
    onChange?:()=>void;
}


export function InputBox({placeholder}:InputProps) {
  return (
    <div>
      <input
        type={"text"}
       
        placeholder={placeholder}
        className="px-2 py-2 text-black rounded-2xl"
      />
    </div>
  );
}