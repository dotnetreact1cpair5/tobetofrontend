import { Drawer } from "antd";
import { Course } from "../../slices/coursesSlice";

type DrawerProps = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  course: Course | null;
};
const DetailDrawer = ({ isOpen, setOpen, course }: DrawerProps) => {
  return (
    <Drawer
      title={course?.lessonName}
      onClose={() => setOpen(!isOpen)}
      open={isOpen}
      size="large"
    >
      <div>
        <img src={course?.pathFileLesson} alt="" />
        <h2>{course?.lessonName}</h2>
        <p>{course?.contentTypeLesson}</p>
        <p>{course?.lessonVideoDuration}</p>
        <p>{course?.instructor}</p>
        <p>{course?.contentName}</p>
        <p>{course?.organizationName}</p>
        <p>{course?.sessionRecord}</p>
        <p>{course?.organizationName}</p>
        <p>{course?.endDate.toLocaleString()}</p>
        <p>Some contents...</p>
      </div>
    </Drawer>
  );
};
export default DetailDrawer;
