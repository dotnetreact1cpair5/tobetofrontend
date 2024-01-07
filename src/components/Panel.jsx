import { useState } from "react";

import ApplicationTab from "./ApplicationTab";
import CoursesTab from "./CoursesTab";
import AnnouncementTab from "./AnnouncementTab";
import SurveyTab from "./SurveyTab";
function Panel() {
  const [tabState, setTabState] = useState(1);
  const toggleTab = (index) => {
    setTabState(index);
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
                className={`${tabState === 1 && "border-black border-b-4"}`}
                onClick={() => toggleTab(1)}
              >
                Başvurularım
              </button>
            </li>

            <li>
              <button
                className={`${tabState === 2 && "border-black border-b-4"}`}
                onClick={() => toggleTab(2)}
              >
                Eğitimlerim
              </button>
            </li>

            <li>
              <button
                className={`${tabState === 3 && "border-black border-b-4"}`}
                onClick={() => toggleTab(3)}
              >
                Duyuru ve Haberlerim
              </button>
            </li>

            <li>
              <button
                className={`${tabState === 4 && "border-black border-b-4"}`}
                onClick={() => toggleTab(4)}
              >
                Anketlerim
              </button>
            </li>
          </ul>
        </div>

        {/* courses */}
        {tabState === 2 && <CoursesTab />}

        {/* surveys */}
        {tabState === 4 && <SurveyTab />}
      </div>
    </section>
  );
}
export default Panel;
