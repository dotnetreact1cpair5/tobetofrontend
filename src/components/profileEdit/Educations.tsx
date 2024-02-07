import React, { useState, useEffect } from "react";
import { fetchEducationStatusData } from "../../services/EducationStatusService";
import { fetchUniversityData } from "../../services/UniversityService";
import { fetchEducationProgramData } from "../../services/EducationProgramService";
import { Datepicker } from "flowbite-react";

interface EducationStatusData {
  id: number;
  name: string;
}

interface UniversityData {
  id: number;
  name: string;
}

interface EducationProgramData {
  id: number;
  name: string;
}

function Educations() {

  const [educationStatusData, setEducationStatusData] = useState<EducationStatusData[]>([]);
  const [universityData, setUniversityData] = useState<UniversityData[]>([]);
  const [educationProgramData, setEducationProgramData] = useState<EducationProgramData[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedColor, setSelectedColor] = useState("");

  const handleSelectChange = (e: any) => {
    setSelectedColor(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const educationStatusData = await fetchEducationStatusData();
        setEducationStatusData(educationStatusData);

        const universityData = await fetchUniversityData();
        setUniversityData(universityData);

        const educationProgramData = await fetchEducationProgramData();
        setEducationProgramData(educationProgramData);

        setLoading(false);
      } catch (error) {
        console.error("Veri alınırken hata oluştu:", error);
        setError("Veri alınırken bir hata oluştu");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Eğitim Durumu*</label>
          <select
            name="dropdown"
            id="dropdown"
            className="w-max-content  py-2"
          >
            {educationStatusData.map((item, index) => (
              <option key={index} value={item.name}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Üniversite*</label>
          <select
            name="dropdown"
            id="dropdown"
            className="w-max-content  py-2"
          >
            {universityData.map((item, index) => (
              <option key={index} value={item.name}>{item.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bölüm*</label>
          <select
            name="dropdown"
            id="dropdown"
            className="w-max-content  py-2"
          >
            {educationProgramData.map((item, index) => (
              <option key={index} value={item.name}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Başlangıç Yılı*</label>        </div>
        {/* <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/> */}

      </div>
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mezuniyet Yılı*</label>
          {/* <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/> */}
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Devam ediyorum</label>
          <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

        </div>
      </div>
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <div className="mb-6">
          <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Kaydet</button>
        </div>
      </div>
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <div className="mb-6">
          {/* Liste nasıl bişey  sor!!!*/}
        </div>
      </div>
    </>
  )
}

export default Educations