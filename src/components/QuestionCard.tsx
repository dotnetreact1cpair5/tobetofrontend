import { useEffect, useState } from "react";
import GenericButton from "./helpers/GenericButton";

type ModalProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ questionSetId, setShowModal }: ModalProps) => {

    useEffect(() => {
        const fetchAssessments = async () => {
          const accountQuestionSetsResponse = await fetch("http://localhost:5045/api/AccountQuestionSets?PageIndex=0&PageSize=5");
          const accountQuestionSetsData = await accountQuestionSetsResponse.json();
          const result = accountQuestionSetsData.items;
          setAssessments(result);
        };
        fetchAssessments();
      }, []);

  return (
    <div className="fixed left-0 top-0 flex h-full w-full bg-black bg-opacity-60">
      <div className="relative mx-auto flex h-96 max-w-6xl flex-col items-center justify-center gap-20 place-self-center bg-white p-4 text-center hover:opacity-100">
      
      
        <h2 className="text-4xl font-bold">FrontEnd</h2>
        {/* <h2 className="text-4xl font-bold">{children.questionSetName}</h2> */}

        <button
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setShowModal(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <p className="text-xl">
        Bu sınav 25 sorudan oluşmakta olup sınav süresi 30 dakikadır. Sınav çoktan seçmeli test şeklinde olup 
        sınavı yarıda bıraktığınız taktırde çözdüğünüz kısım kadarıyla değerlendirileceksiniz.
        {children.questionSetDescription}
        </p>
        <div className="flex flex-col text-lg font-semibold">
        <span>Sınav Süresi : 30 Dakika</span>
          <span>Soru Sayısı : 25</span>
          <span>Soru Tipi : Çoktan Seçmeli</span>

          {/* <span>Sınav Süresi : {children.questionSetDuration} Dakika</span>
          <span>Soru Sayısı : {children.questionSetTotalQuestion}</span>
          <span>Soru Tipi : {children.questionSetType}</span> */}
        </div>
        <div>
        <GenericButton>{children.status == false ? "Sınava Başla" : "Raporu Görüntüle"}</GenericButton>
        </div>
      </div>
    </div>
  );
};
export default Modal;
