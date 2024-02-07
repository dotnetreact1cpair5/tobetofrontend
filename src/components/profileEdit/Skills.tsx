import React, { useState, useEffect } from "react";
import { fetchSkillData } from "../../services/SkillService";

interface SkillData {
  id: number;
  name: string;
}

function Skills() {
  const [skillData, setSkillData] = useState<SkillData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedColor, setSelectedColor] = useState("");

  const handleSelectChange = (e: any) => {
    setSelectedColor(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const skillData = await fetchSkillData();
        setSkillData(skillData);

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
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Yetkinlik</label>
        <select
          name="dropdown"
          id="dropdown"
          className="w-max-content  py-2"
        >
          {skillData.map((item, index) => (
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

export default Skills