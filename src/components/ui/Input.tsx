import type { InputHTMLAttributes } from "react";

type IProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...rest }: IProps) => {
  return (
    <input
      className="text-md rounded-lg border-1px border-gray-300 p-3 shadow-md focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      {...rest}
    />
  );
};

export default Input;