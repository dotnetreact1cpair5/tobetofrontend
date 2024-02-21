import CourseCard from "./CourseCard";
import Loading from "../helpers/Loading";
import { Course } from "../../slices/coursesSlice";
type CourseListProps = {
  list: Course[];
};

const CourseList = ({ list }: CourseListProps) => {
  console.log(list);
  return (
    <main className="min-h-screen p-4">
      <div className="p-18 flex min-h-[200px] items-center justify-start rounded-2xl bg-[url('/assets/edubanner.svg')] bg-cover bg-[left_0_center]">
        <h1 className="ml-48 text-8xl font-bold text-white">Eğitimlerim</h1>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-3 place-items-center gap-8 p-8">
        {list ? (
          list.map((course) => (
            <CourseCard course={course} key={course.courseId} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </main>
  );
};
export default CourseList;
