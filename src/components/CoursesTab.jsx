import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import showMore from "/showmore.svg";
import Loading from "./Loading";
const CoursesTab = ({ courses }) => {
  //  TODO: Loading state & a message saying 'there are no courses'. Think of all cases and make components accordingly.
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex p-8 space-x-8 card-container">
        {courses ? (
          courses.map((course) => (
            <Card key={course.id}
              className="max-w-sm dark:bg-teal-400"
              imgSrc="../public/iklogo.svg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {course.car}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
               {course.createdDate}
              </p>
              <button className="px-4 py-2 rounded-full bg-zinc-300">
                Eğitime Git
              </button>
            </Card>
          ))
        ) : (
          <Loading />
        )}
      </div>
      <Link to="/degerlendirmeler" className="flex flex-col">
        <img src={showMore} className="self-center w-16 h-16" />
        <span>Daha Fazla Göster</span>
      </Link>
    </div>
  );
};
export default CoursesTab;
