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
    <div className="coursecard flex h-[320px] w-64 flex-col space-y-3 rounded-xl border-4 border-transparent bg-[#f1f1f1] p-1 shadow-xl transition duration-500 hover:border-violet-500">
      <img
        src="/assets/classimage.png"
        className="h-40 w-60 self-center rounded-t-xl object-cover"
      />
      <h2 className="font-semibold">{course.courseName}</h2>
      <span className="text-sm font-medium">{date}</span>
      <button
        onClick={() =>
          navigate(
            `/${course.courseName.replace(/\s+/g, "")}/${
              course.courseId
            }/coursedetails`
          )
        }
        className="mx-2 rounded-full bg-zinc-300 px-1 py-2 text-sm font-medium transition duration-500 hover:bg-violet-500 hover:text-white"
      >
        Eğitime Git
      </button>
    </div>
  );
};
export default CourseCard;
