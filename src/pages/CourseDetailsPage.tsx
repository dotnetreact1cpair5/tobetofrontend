import { useEffect, useState } from "react";
import CourseDetailsCard from "../components/courses/CourseDetailsCard";

import { useLocation } from "react-router-dom";

import courseService from "../services/courseService";
import { Course } from "../slices/coursesSlice";
const CourseDetailsPage = () => {
  const location = useLocation();
  console.log(location.pathname);
  const parts = location.pathname.split("/");
  const courseId = Number(parts[2]);
  console.log(courseId);
  const [course, setCourse] = useState<Course | null>(null);

  const fetchCourseById = async () => {
    setCourse(await courseService.getCourseById(courseId));
  };

  useEffect(() => {
    fetchCourseById();
  }, []);

  return (
    <main className="min-h-fit">
      <CourseDetailsCard course={course} />
    </main>
  );
};
export default CourseDetailsPage;
