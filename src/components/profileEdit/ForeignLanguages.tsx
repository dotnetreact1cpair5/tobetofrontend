import React, { useState, useEffect } from "react";
import { fetchForeignLanguageData } from "../../services/ForeignLanguageService";
import { fetchForeignLanguageLevelData } from "../../services/ForeignLanguageLevelService";

interface ForeignLanguageData {
  id: number;
  name: string;
}

interface ForeignLanguageLevelData {
  id: number;
  name: string;
}

function ForeignLanguages() {
  const [foreignLanguageData, setForeignLanguageData] = useState<ForeignLanguageData[]>([]);
  const [foreignLanguageLevelData, setForeignLanguageLevelData] = useState<ForeignLanguageLevelData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedColor, setSelectedColor] = useState("");

  const handleSelectChange = (e: any) => {
    setSelectedColor(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const foreignLanguageData = await fetchForeignLanguageData();
        console.log(JSON.stringify(foreignLanguageData));
        setForeignLanguageData(foreignLanguageData);

        const foreignLanguageLevelData = await fetchForeignLanguageLevelData();
        setForeignLanguageLevelData(foreignLanguageLevelData);

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
          <select
            name="dropdown"
            id="dropdown"
            className="w-max-content  py-2"
          >
            {foreignLanguageData.map((item, index) => (
              <option key={index} value={item.name}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <select
            name="dropdown"
            id="dropdown"
            className="w-max-content  py-2"
          >
            {foreignLanguageLevelData.map((item, index) => (
              <option key={index} value={item.name}>{item.name}</option>
            ))}
          </select>
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

export default ForeignLanguages