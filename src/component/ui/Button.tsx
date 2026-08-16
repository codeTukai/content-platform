import type { ReactNode } from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "orbitary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
}

const variantStyles = {
  primary:
    "bg-[#7164c0] text-white hover:bg-[#6255b0] active:bg-[#5548a0]",

  secondary:
    "bg-[#d9ddee] text-gray-800 hover:bg-[#cdd2e8] active:bg-[#c1c7df]",

  orbitary:
    "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700",
};

const sizeStyles = {
  lg: "px-6 py-3 text-lg",
  md: "px-4 py-2 text-base",
  sm: "px-3 py-1.5 text-sm",
};

const defaultStyle =
  "rounded-xl cursor-pointer inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

export const Button = ({
  variant,
  size,
  text,
  startIcon,
  endIcon,
  fullWidth = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        ${fullWidth ? "w-full" : ""}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${defaultStyle}
      `}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}

      <span>{text}</span>

      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
};