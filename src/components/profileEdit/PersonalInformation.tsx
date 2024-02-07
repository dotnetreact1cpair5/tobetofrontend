import React, { useState, useEffect } from "react";
import { fetchCountryData } from "../../services/CountryService";
import { fetchCityData } from "../../services/CityService";
import { fetchDistrictData } from "../../services/DistrictService";
import { Datepicker } from "flowbite-react";

interface CountryData {
  id: number;
  name: string;
}

interface CityData {
  id: number;
  name: string;
}

interface DistrictData {
  id: number;
  name: string;
}

interface FormData {
    photoImage: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    birthDate: Date;
    nationalIdentity: string;
    email: string;
    country: string;
    city: string;
    district: string;
    address: string;
    description: string;
  }

function PersonalInformation() {

  const [countryData, setCountryData] = useState<CountryData[]>([]);
  const [cityData, setCityData] = useState<CityData[]>([]);
  const [districtData, setDistrictData] = useState<DistrictData[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedColor, setSelectedColor] = useState("");

  const handleSelectChange = (e: any) => {
    setSelectedColor(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countryData = await fetchCountryData();
        setCountryData(countryData);

        const cityData = await fetchCityData();
        setCityData(cityData);

        const districtData = await fetchDistrictData();
        setDistrictData(districtData);

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
      <form>
      <div className="profile-photo mx-auto">
      <span style={{boxSizing:"border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth:"100%"}}>
      <div className="cv-pp">
              <img
                src="/public/images.png"
                alt="Name"
                className="cvName cvIcon"
              />
            </div>
      </span>
      <div className="photo-edit-btn cursor-pointer"></div>
      </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adınız*</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kampüs 365" required />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Soyadınız*</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Front-End Developer" required />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefon Numaranız*</label>
            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Yazılım" required />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Doğum Tarihiniz*</label>
            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Yazılım" required />      
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">TC Kimlik No*</label>
            <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required />
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">*Aboneliklerde fatura için doldurulması zorunlu alan</label>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-Posta</label>
            <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
          </div>
          <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ülke*</label>
          <select
            name="dropdown"
            id="dropdown"
            className="w-max-content  py-2"
          >
            <option key="" value="">Ülke Seçiniz</option>
            {countryData.map((item, index) => (
              <option key={index} value={item.name}>{item.name}</option>
            ))}
          </select>        
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">İl</label>
            <select
            name="dropdown"
            id="dropdown"
            className="w-max-content  py-2"
          >
            <option key="" value="">İl Seçiniz</option>
            {cityData.map((item, index) => (
              <option key={index} value={item.name}>{item.name}</option>
            ))}
          </select>  
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">İlçe</label>
            <select
            name="dropdown"
            id="dropdown"
            className="w-max-content  py-2"
          >
            <option key="" value="">İlçe Seçiniz</option>
            {districtData.map((item, index) => (
              <option key={index} value={item.name}>{item.name}</option>
            ))}
          </select>  
                    </div>
         
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mahalle / Sokak</label>
          <textarea id="message" style={{padding:"50px"}} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>    
          </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hakkımda</label>
          <textarea id="message" style={{padding:"50px"}} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>
        </div>
        <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Kaydet</button>
      </form>
    </>
    //     <form className="flex max-w-md flex-col gap-4">
    //   <div>
    //     <div className="mb-2 block">
    //       <Label htmlFor="email1" value="Your email" />
    //     </div>
    //     <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
    //   </div>
    //   <div>
    //     <div className="mb-2 block">
    //       <Label htmlFor="password1" value="Your password" />
    //     </div>
    //     <TextInput id="password1" type="password" required />
    //   </div>
    //   <div className="flex items-center gap-2">
    //     <Checkbox id="remember" />
    //     <Label htmlFor="remember">Remember me</Label>
    //   </div>
    //   <Button type="submit">Submit</Button>
    // </form>
       
    )
}

export default PersonalInformation