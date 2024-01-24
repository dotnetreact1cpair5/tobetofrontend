import { FC, ReactNode } from "react";

interface GenericButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  color?: string;
  border?: string;
}

const GenericButton = ({ children, color = "violet" }: GenericButtonProps) => {
  return (
    // <Button
    //   pill
    // className={`rounded-full bg-${color}-400 px-4 py-2 font-semibold`}
    // >
    //   {children}
    // </Button>
    <div></div>
  );
};
export default GenericButton;
// ("rounded-full bg-violet-600 px-4 py-2");
