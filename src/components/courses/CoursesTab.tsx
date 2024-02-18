import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import showMore from "/assets/showmore.svg";
import Loading from "../helpers/Loading";
import CourseCard from "./CourseCard";
import { Course } from "../../slices/coursesSlice";

type CourseTabProps = {
  courses: Course[];
};

const CoursesTab = ({ courses }: CourseTabProps) => {
  //  TODO: Loading state & a message saying 'there are no courses'. Think of all cases and make components accordingly.
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden p-4">
      <div className="card-container flex space-x-8 p-8 text-center">
        {!courses.length && <Loading />}
        {!!courses.length &&
          courses.map((course) => <CourseCard course={course} />)}
      </div>
      <Link to="/egitimlerim" className="flex flex-col">
        <img src={showMore} className="h-16 w-16 self-center" />
        <span>Daha Fazla Göster</span>
      </Link>
    </div>
  );
};
export default CoursesTab;
