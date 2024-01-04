function ActionButtons() {
  return (
    <section>
      <div className="container max-w-6xl mx-auto grid grid-cols-3 text-center place-items-center my-10 gap-2">
        <div className=" card bg-gradient-to-bl from-[#1d0b8c] to-[#bda6fe] p-5 w-60 text-white flex flex-col gap-4">
          <h1>Profilini oluştur</h1>
          <button className="bg-violet-600 rounded-full px-4 py-2">
            Başla
          </button>
        </div>
        <div className=" card bg-gradient-to-bl from-[#0e0b93] to-[#5eb6ca] p-12 w-60 text-white flex flex-col">
          <h1>Kendini değerlendir</h1>
          <button className="bg-violet-600 rounded-full px-4 py-2">
            Başla
          </button>
        </div>
        <div className=" card bg-gradient-to-bl from-[#3c0b8c] to-[#e3a6fe] p-12 w-60 text-white flex flex-col">
          <h1>Öğrenmeye başla</h1>
          <button className="bg-violet-600 rounded-full px-4 py-2">
            Başla
          </button>
        </div>
      </div>
    </section>
  );
}
export default ActionButtons;
