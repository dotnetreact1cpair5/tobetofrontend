import { Drawer } from "antd";
import { Course } from "../../services/courseService";

type DrawerProps = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  c: Course | null;
};
const DetailDrawer = ({ isOpen, setOpen }: DrawerProps) => {
  return (
    <Drawer
      title="Basic Drawer"
      onClose={() => setOpen(!isOpen)}
      open={isOpen}
      size="large"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};
export default DetailDrawer;
