import { useEffect, useState } from "react";
import GenericButton from "../helpers/GenericButton";
import AccountService from "../../services/AccountService";
import { Account } from "../../models/accountModel";
import CityService from "../../services/CityService";
import { City } from "../../models/cityModel";
import DistrictService from "../../services/DistrictService";
import { District } from "../../models/districtModel";
import { AnimatePresence, motion } from "framer-motion";

const EditUserInfo = () => {
  const transition = {
    duration: 1,
  };

  const slideTransition = {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
  };
  const [accountData, setAccountData] = useState<Account | null>(null);
  const [cityData, setCityData] = useState<City[] | null>(null);
  const [districtData, setDistrictData] = useState<District[] | null>(null);
  useEffect(() => {
    const fetchAccountData = async () => {
      const data = await AccountService.getProfileData();
      const cityData = await CityService.getCityData();
      const districtData = await DistrictService.getDistrictData();

      setAccountData(data);
      setCityData(cityData);
      setDistrictData(districtData);
    };
    fetchAccountData();
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
        <form className="form flex flex-col">
          <div className="flex flex-col items-center justify-center">
            <img
              src="/assets/pfp.png"
              className="relative h-40 w-40 self-center rounded-full"
            />
            <div className="z-10 -mt-8 flex space-x-12">
              <img
                src="/assets/trash.svg"
                className="h-8 w-8 cursor-pointer rounded-full bg-red-400 p-2"
              />
              <img
                src="/assets/editpen.svg"
                className="h-8 w-8 cursor-pointer rounded-full bg-violet-200 p-1"
              />
            </div>
          </div>
          <div className="input-container grid grid-cols-4 place-items-center gap-4 p-12">
            <div className="col-span-2">
              <label htmlFor="">Adınız*</label>
              <input
                type="text"
                placeholder={accountData?.firstName}
                className="placeholder-slate-400"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="">Soyadınız*</label>
              <input
                type="text"
                placeholder={accountData?.lastName}
                className="placeholder-slate-400"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="">Telefon Numaranız*</label>
              <input
                type="text"
                placeholder={accountData?.phoneNumber}
                className="placeholder-slate-400"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="">Doğum Tarihiniz*</label>
              <input
                type="text"
                value={new Date(accountData?.birthDate).toLocaleDateString()}
                className="placeholder-slate-400"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="">TC Kimlik No*</label>
              <input
                type="text"
                placeholder={accountData?.nationalId}
                className="placeholder-slate-400"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="">E-posta</label>
              <input
                type="text"
                placeholder={accountData?.email}
                className="placeholder-slate-400"
              />
            </div>

            <div className="col-span-4">
              <label htmlFor="">Ülke*</label>

              <input
                type="text"
                className="placeholder-slate-400"
                placeholder={accountData?.countryName}
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="">İl*</label>
              <select
                name="Cities"
                id=""
                className="rounded-xl transition duration-300 focus:border-0 focus:ring-4 focus:ring-purple-400"
              >
                {cityData?.map((c) => {
                  return <option>{c.name}</option>;
                })}
              </select>
            </div>
            <div className="col-span-2">
              <label htmlFor="">İlçe*</label>
              <select
                name="Districts"
                id=""
                className="rounded-xl transition duration-300 focus:border-0 focus:ring-4 focus:ring-purple-400"
              >
                {districtData?.map((d) => {
                  return <option>{d.name}</option>;
                })}
              </select>
            </div>

            <div className="col-span-4">
              <label htmlFor="">Mahalle / Sokak</label>
              <textarea className="max-h-[200px] rounded-lg" />
            </div>
            <div className="col-span-4">
              <label htmlFor="">Hakkımda</label>
              <textarea className="max-h-[200px] rounded-lg" />
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
export default EditUserInfo;
