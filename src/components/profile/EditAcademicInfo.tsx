import { useEffect, useState } from "react";
import GenericButton from "../helpers/GenericButton";
import { AnimatePresence, motion } from "framer-motion";
import { University } from "../../models/universityModel";
import UniversityService from "../../services/UniversityService";
const EditAcademicInfo = () => {
  const transition = {
    duration: 1,
  };

  const slideTransition = {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
  };
  const [universities, setUniversities] = useState<University[] | null>(null);
  //const [educationStatus, setEducationStatus] = useState<Account | null>(null);
  // const [cityData, setCityData] = useState<City[] | null>(null);
  // const [districtData, setDistrictData] = useState<District[] | null>(null);
  useEffect(() => {
    const fetchEducationData = async () => {
      const universityData = await UniversityService.getUniData();

      setUniversities(universityData);
    };
    fetchEducationData();
  }, []);
  return (
    <AnimatePresence>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideTransition}
        transition={transition}
      >
        <form
          className="form flex flex-col"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="input-container grid grid-cols-4 place-items-center gap-4 p-12">
            <div className="col-span-2">
              <label htmlFor="">Eğitim Durumu*</label>
              <select name="educationStatus" id="" className="rounded-xl">
                <option value="">Lisans</option>
                <option value="">Önlisans</option>
                <option value="">Yüksek Lisans</option>
                <option value="">Doktora</option>
              </select>
            </div>

            <div className="col-span-2">
              <label htmlFor="">Bölüm*</label>
              <input type="text" placeholder="Bilgisayar Mühendisliği" />
            </div>
            <div className="col-span-2">
              <label htmlFor="">Üniversite*</label>
              <select
                name="Universities"
                id=""
                className="rounded-xl transition duration-300 focus:border-0 focus:ring-4 focus:ring-purple-400"
              >
                {universities?.map((university) => (
                  <option>{university.name}</option>
                ))}
              </select>
            </div>
            <div className="col-span-2">
              <label htmlFor="">Başlangıç Yılı*</label>
              <input type="date" />
            </div>
            <div className="col-span-2">
              <label htmlFor="">Bitiş Yılı*</label>
              <input type="date" />
            </div>
          </div>
          <GenericButton className="w-1/4 place-self-center bg-violet-500 text-white">
            Kaydet
          </GenericButton>
        </form>
      </motion.div>
    </AnimatePresence>
  );
};
export default EditAcademicInfo;
