import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface GenericButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
}

const GenericButton = ({
  children,
  className,
  ...rest
}: GenericButtonProps) => {
  return (
    <button
      className={`${className} rounded-full px-4 py-2 font-semibold`}
      {...rest}
    >
      {children}
    </button>
  );
};
export default GenericButton;
// ("rounded-full bg-violet-600 px-4 py-2");
