import type { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;
  onClick?: () => void;
}

const CircleColor = ({ color, ...rest }: IProps) => {
  return (
    <span
      className={`mb-1 block h-5 w-5 cursor-pointer rounded-full`}
      style={{ backgroundColor: color }}
      {...rest}
    />
  );
};

export default CircleColor;