type ModalProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  assessment: any;
};

const Modal = ({ assessment, setShowModal }: ModalProps) => {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full bg-black bg-opacity-60">
      <div className="relative mx-auto flex h-96 max-w-6xl flex-col items-center justify-center gap-20 place-self-center bg-white p-4 text-center text-black hover:opacity-100">
        <h2 className="text-4xl font-bold">{assessment.username}</h2>
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
          Bu sınav 25 sorudan oluşmakta olup sınav süresi 30 dakikadır. Sınav
          çoktan seçmeli test şeklinde olup sınavı yarıda bıraktığınız takdirde
          çözdüğünüz kısım kadarıyla değerlendirileceksiniz.
        </p>
        <div className="flex flex-col text-lg font-semibold">
          <span>Sınav Süresi : 30 Dakika</span>
          <span>Soru Sayısı : 25</span>
          <span>Soru Tipi : Çoktan Seçmeli</span>
        </div>
      </div>
    </div>
  );
};
export default Modal;
