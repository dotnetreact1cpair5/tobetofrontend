import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllCourses } from "../slices/coursesSlice";
import CourseList from "../components/courses/CourseList";

const CoursesPage = () => {
  const allCourses = useSelector((state: RootState) => state.courses.courses);
  // console.log(allCourses);
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector((state: RootState) => state.user.user?.id);
  console.log(userId);
  useEffect(() => {
    dispatch(fetchAllCourses(userId));
  }, []);

  return <CourseList list={allCourses} />;
};

export default CoursesPage;
