import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({ children, className, width = "w-full", ...rest }: IProps) => {
  return (
    <button
      className={`rounded-lg p-2 text-white duration-150 ${width} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;