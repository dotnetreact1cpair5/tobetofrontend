import { useNavigate } from "react-router-dom";

function ActionButtons() {
  const navigate = useNavigate();
  return (
    <section>
      <div className="container mx-auto my-10 grid max-w-6xl grid-cols-3 place-items-center gap-2 text-center">
        <div className="card flex w-60 flex-col gap-4 bg-gradient-to-bl from-[#1d0b8c] to-[#bda6fe] p-5 text-white">
          <h1>Profilini oluştur</h1>
          <button
            className="rounded-full bg-violet-600 px-4 py-2"
            onClick={() => navigate("/profilim")}
          >
            Başla
          </button>
        </div>
        <div className="card flex w-60 flex-col bg-gradient-to-bl from-[#0e0b93] to-[#5eb6ca] p-12 text-white">
          <h1>Kendini değerlendir</h1>
          <button
            className="rounded-full bg-violet-600 px-4 py-2"
            onClick={() => navigate("/degerlendirmeler")}
          >
            Başla
          </button>
        </div>
        <div className="card flex w-60 flex-col bg-gradient-to-bl from-[#3c0b8c] to-[#e3a6fe] p-12 text-white">
          <h1>Öğrenmeye başla</h1>
          <button
            className="rounded-full bg-violet-600 px-4 py-2"
            onClick={() => navigate("/katalog")}
          >
            Başla
          </button>
        </div>
      </div>
    </section>
  );
}
export default ActionButtons;
