
import type { ReactElement, ReactNode } from "react";

 interface ButtonProps{
    variant: "primary" | "secondary"; 
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactNode;
    onClick?: () => void;
}



const variantStyles = {
    "primary": "bg-[#7164c0]",
    "secondary" : "bg-[#d9ddee]"
}

// const sizeStyles = {
//     "lg" : "p-6 ",
//     "md": "p-4",
//     "sm": "p-2"
// }
const sizeStyles = {
    "lg" : "py-6 px-10 text-lg flex items-center",
    "md": "py-2 px-4 text-md",
    "sm": "py-1 px-2 text-sm"
}

const defaultStyle = "rounded-xl cursor-pointer"
export const Button = ({variant,size,text,startIcon, onClick}:ButtonProps) => {
    return(
        <button onClick={onClick} className= {`${sizeStyles[size]} ${variantStyles[variant]} ${defaultStyle}`}>
            {startIcon}
            <div className="flex pl-2 pr-2">
                {text}
            </div>
             
            
        </button>
     
       
        
    )
}

{/* <Button variant="primary" size="md" text="ff" onClick={()=>{}} startIcon="+" endIcon="-"/> */}