import { useEffect, useState } from "react";
import CourseList from "../components/courses/CourseList";
import useCourseList from "../hooks/useCourseList";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const CoursesPage = () => {
  // const { data, loading, error } = useCourseList();
  // console.log({ data, loading, error });

  const selectAllCourses = useSelector((state: RootState) => state.courses);
  console.log(selectAllCourses);

  useEffect(() => {
    fetchAllCourses();
  }, []);
  const [courses, setCourses] = useState([]);
  const fetchAllCourses = async () => {
    const response = await fetch(
      "http://localhost:49805/api/Course?PageIndex=0&PageSize=10"
    );
    const { items } = await response.json();
    console.log(items);
    setCourses(items);
    // const data: Record<string, unknown> = await response.json();
    // const { items } = data;
    // setCourses(Object.values(data.items));
  };
  return <CourseList courses={courses} />;
};
export default CoursesPage;
