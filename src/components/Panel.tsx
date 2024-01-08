import { useState } from "react";

import ApplicationTab from "./ApplicationTab";
import CoursesTab from "./CoursesTab";
import AnnouncementTab from "./AnnouncementTab";
import SurveyTab from "./SurveyTab";

export type Course = { name: string; createdDate: string };

function Panel() {
  const [activeTabIndex, setActiveTabIndex] = useState(1);

  const [courses, setCourses] = useState<Course[]>([]);
  const handleCourses = async () => {
    setActiveTabIndex(2);
    const response = await fetch(
      "http://localhost:49805/api/Course?PageIndex=0&PageSize=4"
    );
    const data: Record<string, unknown> = await response.json();
    const { items } = data;
    // setCourses(data);
    setCourses(items as Course[]);
    // let typescript infer the types by itself as much as possible.
    // Object.entries
  };
  return (
    <section>
      <div className="container max-w-6xl mx-auto shadow-2xl rounded-xl">
        <div className="flex flex-col items-center p-4 logoplatform">
          <img
            src="../public/iklogo.svg"
            alt=""
            className="w-[300px] h-[160px]"
          />
          <div className="mt-5 space-y-5 text-center">
            <h3 className="text-2xl">
              Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al.
            </h3>
            <h2 className="text-4xl font-bold">Aradığın “İş” Burada!</h2>
          </div>
        </div>

        <div className="w-1/2 mx-auto mt-8 tabs">
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
