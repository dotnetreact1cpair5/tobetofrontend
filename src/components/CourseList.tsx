import CourseCard from "./CourseCard";
import Loading from "./Loading";
import { Course } from "./Panel";

type CourseListProps = {
  courses: Course[];
};

const CourseList = ({ courses }: CourseListProps) => {
  return (
    <main className="min-h-screen p-4">
      <div className="p-18 flex min-h-[200px] items-center justify-start rounded-2xl bg-[url('../assets/edubanner.svg')] bg-cover bg-[left_0_center]">
        <h1 className="ml-48 text-8xl font-bold text-white">Eğitimlerim</h1>
      </div>
      <div className="grid grid-cols-3 place-items-center p-8">
        {courses ? (
          courses.map((course) => (
            <CourseCard course={course} key={course.id} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </main>
  );
};
export default CourseList;
