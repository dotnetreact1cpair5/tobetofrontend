import { useEffect, useState } from "react";
import GenericButton from "../helpers/GenericButton";
import { SocialMedia } from "../../models/socialMediaModel";
import SocialMediaService from "../../services/SocialMediaService";
import { AnimatePresence, motion } from "framer-motion";

const EditSocialMedia = () => {
  const transition = {
    duration: 1,
  };

  const slideTransition = {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
  };
  const [selectedMedia, setSelectedMedia] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [socialMedia, setSocialMedia] = useState<SocialMedia[] | null>(null);
  useEffect(() => {
    const fetchSocialMedia = async () => {
      const data = await SocialMediaService.getSocialMediaData();
      console.log(data);
      setSocialMedia(data);
    };
    fetchSocialMedia();
  }, []);

  // const handleSubmit = (e, id) => {
  //   e.preventDefault();
  //   SocialMediaService.postSocialMedia(id);
  // };

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
          <div className="input-container grid grid-cols-4 place-items-center gap-4 p-12">
            <div className="col-span-2">
              <select
                name="Cities"
                id=""
                className="rounded-xl transition duration-300 focus:border-0 focus:ring-4 focus:ring-purple-400"
                value={selectedMedia}
                onChange={(e) => setSelectedMedia(e.target.value)}
              >
                <option selected value="">
                  Seçiniz
                </option>
                {socialMedia?.map((s) => {
                  return <option>{s.socialMediaPlatformName}</option>;
                })}
              </select>
            </div>
            <div className="col-span-2">
              <input type="text" placeholder="https://" />
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
export default EditSocialMedia;
