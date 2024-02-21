import { useState } from "react";

import ApplicationTab from "./ApplicationTab";
import CoursesTab from "./courses/CoursesTab";
import AnnouncementTab from "./AnnouncementTab";
import SurveyTab from "./SurveyTab";
import { Course } from "../slices/coursesSlice";

function Panel() {
  const [activeTabIndex, setActiveTabIndex] = useState(1);

  const [courses, setCourses] = useState<Course[]>([]);
  const handleCourses = async () => {
    setActiveTabIndex(2);
    const response = await fetch(
      "http://localhost:49805/api/AccountCourse?PageIndex=0&PageSize=4"
    );

    const { items } = await response.json();
    setCourses(items);
    // let typescript infer the types by itself as much as possible.
  };
  return (
    <section>
      <div className="container mx-auto max-w-6xl rounded-xl shadow-2xl">
        <div className="logoplatform flex flex-col items-center p-4">
          <img
            src="/assets/iklogo.svg"
            alt=""
            className="h-[160px] w-[300px]"
          />

          <div className="mt-5 space-y-5 text-center">
            <h3 className="text-2xl">
              Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al.
            </h3>
            <h2 className="text-4xl font-bold">Aradığın “İş” Burada!</h2>
          </div>
        </div>

        <div className="tabs mx-auto mt-8 w-1/2">
          <ul className="flex justify-around text-lg">
            <li>
              <button
                className={`${
                  activeTabIndex === 1 && "border-black border-b-4"
                }`}
                onClick={() => setActiveTabIndex(1)}
              >
                Başvurularım
              </button>
            </li>

            <li>
              <button
                className={`${
                  activeTabIndex === 2 && "border-black border-b-4"
                }`}
                onClick={handleCourses}
              >
                Eğitimlerim
              </button>
            </li>

            <li>
              <button
                className={`${
                  activeTabIndex === 3 && "border-black border-b-4"
                }`}
                onClick={() => setActiveTabIndex(3)}
              >
                Duyuru ve Haberlerim
              </button>
            </li>

            <li>
              <button
                className={`${
                  activeTabIndex === 4 && "border-black border-b-4"
                }`}
                onClick={() => setActiveTabIndex(4)}
              >
                Anketlerim
              </button>
            </li>
          </ul>
        </div>

        {/* applications */}
        {activeTabIndex === 1 && <ApplicationTab />}
        {/* courses */}
        {activeTabIndex === 2 && <CoursesTab courses={courses} />}
        {/* announcements */}
        {activeTabIndex === 3 && <AnnouncementTab />}
        {/* surveys */}
        {activeTabIndex === 4 && <SurveyTab />}
      </div>
    </section>
  );
}
export default Panel;
