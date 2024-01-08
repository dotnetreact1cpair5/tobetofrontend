import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import showMore from "/showmore.svg";
import Loading from "./Loading";
import CourseCard from "./CourseCard";
const CoursesTab = ({ courses }) => {
  //  TODO: Loading state & a message saying 'there are no courses'. Think of all cases and make components accordingly.
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex p-8 space-x-8 card-container">
        {courses ? (
          courses.map((course) => (
            // <Card key={course.id}
            //   className="max-w-sm dark:bg-teal-400"
            //   imgSrc="../public/iklogo.svg"
            // >
            //   <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            //     {course.car}
            //   </h5>
            //   <p className="font-normal text-gray-700 dark:text-gray-400">
            //    {course.createdDate}
            //   </p>
            //   <button className="px-4 py-2 rounded-full bg-zinc-300">
            //     Eğitime Git
            //   </button>
            // </Card>
            // <div className="coursecard flex flex-col p-1 w-64 shadow-xl rounded-xl bg-[#f1f1f1] space-y-3 h-[320px] border-4 border-transparent transition duration-500 hover:border-violet-500">
            //   <img
            //     src="/public/classimage.png"
            //     alt=""
            //     className="self-center object-cover h-40 w-60 rounded-t-xl"
            //   />
            //   <h2 className="font-semibold">
            //     Dr. Ecmel Ayral'dan Hoşgeldin Mesajı
            //   </h2>
            //   <span className="text-sm font-medium">21 Eylül 2023 15:20</span>
            //   <button className="px-1 py-2 mx-2 text-sm font-medium transition duration-500 rounded-full hover:text-white hover:bg-violet-500 bg-zinc-300">
            //     Eğitime Git
            //   </button>
            // </div>
            <CourseCard />
          ))
        ) : (
          <Loading />
        )}
      </div>
      <Link to="/egitimlerim" className="flex flex-col">
        <img src={showMore} className="self-center w-16 h-16" />
        <span>Daha Fazla Göster</span>
      </Link>
    </div>
  );
};
export default CoursesTab;
