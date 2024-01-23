interface GenericButtonProps {
  color?: string;
  children: any;
}

const GenericButton = ({ children, color }: GenericButtonProps) => {
  return (
    <button className={`rounded-full bg-green-500 px-4 py-2 font-semibold`}>
      {children}
    </button>
  );
};
export default GenericButton;
("rounded-full bg-violet-600 px-4 py-2");
