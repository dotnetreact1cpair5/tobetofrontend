import React, { useState, useEffect } from "react";
import { fetchSocialMediaData } from "../../services/SocialMediaService";

interface SocialMediaData {
  id: number;
  name: string;
}

function SocialMedias() {
  const [socialMediaData, setSocialMediaData] = useState<SocialMediaData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedColor, setSelectedColor] = useState("");

  const handleSelectChange = (e: any) => {
    setSelectedColor(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const socialMediaData = await fetchSocialMediaData();
        setSocialMediaData(socialMediaData);

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
            {socialMediaData.map((item, index) => (
              <option key={index} value={item.name}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-6">
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://" required/>
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

export default SocialMedias