import { useNavigate } from "react-router-dom";
import { Course } from "../../slices/coursesSlice";

type CardProps = {
  course: Course;
};

const CourseCard = ({ course }: CardProps) => {
  console.log(course);
  let date = new Date(course.startDate).toLocaleDateString();
  // console.log(date);
  const navigate = useNavigate();
  return (
    <div className="coursecard relative flex h-[320px] w-64 flex-col items-center space-y-3 rounded-xl border-4 border-transparent bg-[#f1f1f1] p-1 text-center shadow-xl transition duration-500 hover:border-violet-500">
      <img
        src={course.pathFileLesson}
        className="h-40 w-60 self-center rounded-t-xl object-cover"
      />
      <div className="flex flex-col items-center">

        <h2 className="mt-4 font-semibold">{course.lessonName}</h2>
        <span className="text-sm font-medium">{date}</span>
        <button
          // onClick={() =>
          //   navigate(
          //     `/${course.courseName.replace(/\s+/g, "")}/${
          //       course.courseId
          //     }/coursedetails`
          //   )
          // }
          className="absolute bottom-2 rounded-full bg-zinc-300 px-3 py-2 text-sm font-medium transition duration-500 hover:bg-violet-500 hover:text-white"
        >
          Eğitime Git
        </button>
      </div>
    </div>
  );
};
export default CourseCard;
