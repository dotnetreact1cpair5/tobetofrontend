import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import showMore from "../assets/showmore.svg";
import Loading from "./Loading";
import CourseCard from "./CourseCard";
import type { Course } from "./Panel";

type Props = {
  courses: Course[];
};

const CoursesTab = ({ courses }: Props) => {
  //  TODO: Loading state & a message saying 'there are no courses'. Think of all cases and make components accordingly.
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="card-container flex space-x-8 p-8">
        {!courses.length && <Loading />}
        {!!courses.length &&
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
            //   <button className="rounded-full bg-zinc-300 px-4 py-2">
            //     Eğitime Git
            //   </button>
            // </Card>
            // <div className="coursecard flex h-[320px] w-64 flex-col space-y-3 rounded-xl border-4 border-transparent bg-[#f1f1f1] p-1 shadow-xl transition duration-500 hover:border-violet-500">
            //   <img
            //     src="/public/classimage.png"
            //     alt=""
            //     className="h-40 w-60 self-center rounded-t-xl object-cover"
            //   />
            //   <h2 className="font-semibold">
            //     Dr. Ecmel Ayral'dan Hoşgeldin Mesajı
            //   </h2>
            //   <span className="text-sm font-medium">21 Eylül 2023 15:20</span>
            //   <button className="mx-2 rounded-full bg-zinc-300 px-1 py-2 text-sm font-medium transition duration-500 hover:bg-violet-500 hover:text-white">
            //     Eğitime Git
            //   </button>
            // </div>
            <CourseCard course={course} />
          ))}
      </div>
      <Link to="/egitimlerim" className="flex flex-col">
        <img src={showMore} className="h-16 w-16 self-center" />
        <span>Daha Fazla Göster</span>
      </Link>
    </div>
  );
};
export default CoursesTab;
