
import type { ReactNode } from "react";

export interface ButtonProps{
    variant: "primary" | "secondary"; 
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    onClick: () => void;
}


const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary" : "bg-purple-400 text-purple-600"
}
export const Button = (props:ButtonProps) => {
    return(
        <button className={variantStyles[props.variant]}>
           {props.text}
        </button>
    )
}

<Button variant="primary" size="md" text="ff" onClick={()=>{}} startIcon="+" endIcon="-"/>