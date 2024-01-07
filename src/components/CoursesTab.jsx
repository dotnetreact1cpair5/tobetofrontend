import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import showMore from "/showmore.svg";
function CoursesTab({ tabState }) {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex p-8 space-x-8 card-container">
        <Card
          className="max-w-sm dark:bg-teal-400"
          imgSrc="../public/iklogo.svg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <button className="px-4 py-2 rounded-full bg-violet-600">
            Başla
          </button>
        </Card>
        <Card
          className="max-w-sm dark:bg-teal-400"
          imgSrc="../public/iklogo.svg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <button className="px-4 py-2 rounded-full bg-violet-600">
            Başla
          </button>
        </Card>
        <Card
          className="max-w-sm dark:bg-teal-400"
          imgSrc="../public/iklogo.svg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <button className="px-4 py-2 rounded-full bg-violet-600">
            Başla
          </button>
        </Card>
        <Card
          className="max-w-sm dark:bg-teal-400"
          imgSrc="../public/iklogo.svg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <button className="px-4 py-2 rounded-full bg-violet-600">
            Başla
          </button>
        </Card>
      </div>
      <Link to="/degerlendirmeler" className="flex flex-col">
        <img src={showMore} className="self-center w-16 h-16" />
        <span>Daha Fazla Göster</span>
      </Link>
    </div>
  );
}
export default CoursesTab;
