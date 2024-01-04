import { useState } from "react";
import { Card } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import { Tabs } from "flowbite-react";
import showMore from "/showmore.svg";
function Panel() {
  const [showCourses, setShowCourses] = useState(false);
  const fetchCourses = () => {
    setShowCourses(true);
  };
  return (
    <section>
      <div className="container max-w-6xl mx-auto shadow-2xl rounded-xl">
        <div className="logoplatform p-4 flex flex-col items-center">
          <img
            src="../public/iklogo.svg"
            alt=""
            className="w-[300px] h-[160px]"
          />
          <div className="text-center space-y-5 mt-5">
            <h3 className="text-2xl">
              Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al.
            </h3>
            <h2 className="text-4xl font-bold">Aradığın “İş” Burada!</h2>
          </div>
        </div>
        <div className="tabs">
          <ul className="flex justify-around text-lg">
            <li>
              <button className="focus:border-b-4 border-black ">
                Basvurularim
              </button>
            </li>
            <li>
              <button
                className="focus:border-b-4 border-black"
                onClick={fetchCourses}
              >
                Eğitimlerim
              </button>
            </li>
            <li>
              <button className="focus:border-b-4 border-black ">
                Duyuru ve Haberlerim
              </button>
            </li>
            <li>
              <button className="focus:border-b-4 border-black ">
                Anketlerim
              </button>
            </li>
          </ul>
        </div>
        {/* courses */}
        {showCourses && (
          <div className="flex flex-col items-center justify-center p-4">
            <div className="card-container p-8 flex space-x-8">
              <Card
                className="dark:bg-teal-400 max-w-sm"
                imgSrc="../public/iklogo.svg"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <button className="bg-violet-600 rounded-full px-4 py-2">
                  Başla
                </button>
              </Card>
              <Card
                className="dark:bg-teal-400 max-w-sm"
                imgSrc="../public/iklogo.svg"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <button className="bg-violet-600 rounded-full px-4 py-2">
                  Başla
                </button>
              </Card>
              <Card
                className="dark:bg-teal-400 max-w-sm"
                imgSrc="../public/iklogo.svg"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <button className="bg-violet-600 rounded-full px-4 py-2">
                  Başla
                </button>
              </Card>
              <Card
                className="dark:bg-teal-400 max-w-sm"
                imgSrc="../public/iklogo.svg"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <button className="bg-violet-600 rounded-full px-4 py-2">
                  Başla
                </button>
              </Card>
            </div>
            <Link to="/degerlendirmeler" className="flex flex-col">
              <img src={showMore} className="w-16 h-16 self-center" />
              <span>Daha Fazla Göster</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
export default Panel;
