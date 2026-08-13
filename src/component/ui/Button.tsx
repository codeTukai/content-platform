
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
    "primary": "bg-blue-400 text-white",
    "secondary" : "bg-purple-200 text-purple-600"
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

const defaultStyle = "rounded-xl box-shadow"
export const Button = (props:ButtonProps) => {
    return(
        <button className= {`${sizeStyles[props.size]} ${variantStyles[props.variant]} ${defaultStyle}`}>
            {props.startIcon}
            <div className="flex pl-2 pr-2">
                {props.text}
            </div>
             
            {props.endIcon}
        </button>
     
       
        
    )
}

{/* <Button variant="primary" size="md" text="ff" onClick={()=>{}} startIcon="+" endIcon="-"/> */}