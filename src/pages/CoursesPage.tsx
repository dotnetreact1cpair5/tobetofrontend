import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import Loading from "../components/Loading";

const CoursesPage = () => {
  useEffect(() => {
    fetchAllCourses();
  }, []);
  const [courses, setCourses] = useState(null);
  const fetchAllCourses = async () => {
    const response = await fetch(
      "http://localhost:49805/api/Course?PageIndex=0&PageSize=10"
    );
    const data = await response.json();
    setCourses(Object.values(data.items));
  };
  return (
    <main className="min-h-screen p-4">
      <div className="rounded-2xl bg-[url('/public/edubanner.svg')] bg-[left_0_center] bg-cover min-h-[200px] p-18 flex justify-start items-center">
        <h1 className="ml-48 font-bold text-white text-8xl">Eğitimlerim</h1>
      </div>
      <div className="grid grid-cols-4 p-8 place-items-center">
        {courses ? (
          courses.map((course) => <CourseCard course={course} />)
        ) : (
          <Loading />
        )}
      </div>
    </main>
  );
};
export default CoursesPage;
