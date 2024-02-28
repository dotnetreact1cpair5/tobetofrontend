import { useState } from "react";
import GenericButton from "./helpers/GenericButton";
import Modal from "./helpers/Modal";

const AssessmentCard = ({ children, toggleModal, assessment }: any) => {
  const [showModal, setShowModal] = useState(false);
  const modalHandler = () => {
    console.log("clicked");
    setShowModal(true);
  };
  return (
    <div className="flex w-[514px] items-center justify-between rounded-full bg-gradient-to-r from-[#bda6fe] to-[#1d0b8c] px-4 py-2">
      <span>
        <img src="/assets/assessmenticon.png" className="h-12 w-12" />
      </span>
      {children}

      <GenericButton className="bg-white px-8 text-lg text-black hover:scale-110" onClick={modalHandler}>
        Başla
      </GenericButton>
      {showModal && (
        <Modal assessment={assessment} setShowModal={setShowModal} />
      )}
    </div>
  );
};
export default AssessmentCard;
