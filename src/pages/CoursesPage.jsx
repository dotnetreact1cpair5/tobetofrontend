const CoursesPage = () => {
  return (
    <main className="min-h-screen p-4">
      <div className="rounded-2xl bg-[url('/public/edubanner.svg')] bg-[left_0_center] bg-cover min-h-[200px] p-18 flex justify-start items-center">
        <h1 className="ml-48 font-bold text-white text-8xl">Eğitimlerim</h1>
      </div>
      <div className="grid grid-cols-4 p-8 place-items-center">
        <div className="coursecard flex flex-col p-1 w-64 shadow-xl rounded-xl bg-[#f1f1f1] space-y-3 h-[320px] border-4 border-transparent transition duration-500 hover:border-violet-500">
          <img
            src="/public/classimage.png"
            alt=""
            className="self-center object-cover h-40 w-60 rounded-t-xl"
          />
          <h2 className="font-semibold">
            Dr. Ecmel Ayral'dan Hoşgeldin Mesajı
          </h2>
          <span className="text-sm font-medium">21 Eylül 2023 15:20</span>
          <button className="px-1 py-2 mx-2 text-sm font-medium transition duration-500 rounded-full hover:text-white hover:bg-violet-500 bg-zinc-300">
            Eğitime Git
          </button>
        </div>
      </div>
    </main>
  );
};
export default CoursesPage;
