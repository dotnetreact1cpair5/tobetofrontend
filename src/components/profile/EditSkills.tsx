import { useEffect, useState } from "react";
import SkillService from "../../services/SkillService";
import GenericButton from "../helpers/GenericButton";
import { Skill } from "../../models/skillModel";
import { AnimatePresence, motion } from "framer-motion";

const EditSkills = () => {
  const transition = {
    duration: 1,
  };

  const slideTransition = {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
  };
  const [skills, setSkills] = useState<Skill[] | null>(null);
  useEffect(() => {
    const fetchSkills = async () => {
      const data = await SkillService.getSkillData();
      console.log(data);
      setSkills(data);
    };
    fetchSkills();
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
          <div className="input-container grid grid-cols-4 place-items-center gap-4 p-12">
            <div className="col-span-4">
              <label htmlFor="">Yetkinlik</label>
              <select className="rounded-lg">
                {skills?.map((s) => {
                  return <option>{s.skillName}</option>;
                })}
              </select>
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
export default EditSkills;
