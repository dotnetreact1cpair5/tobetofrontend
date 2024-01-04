function Test() {
  return (
    <section>
    <div className="container max-w-6xl mx-auto my-8 p-4 shadow-2xl rounded-xl">
      <div className="relative w-1/3 test-card shadow-2xl rounded-xl p-4 flex flex-col gap-4">
        <h3 className="font-bold">Sınavlarım</h3>
        <h3 className="font-bold">
          Herkes için Kodlama 1C Değerlendirme Sınavı
        </h3>
        <span className="font-normal text-sm">
          Herkes İçin Kodlama - 1C
        </span>
        <span className="flex space-x-2">
          <img src="../public/timer.svg" className="w-5" />{" "}
          <span className="font-bold">45 Dakika</span>
        </span>
        <img
          src="../public/check.svg"
          alt=""
          className="w-5 absolute top-4 right-4"
        />
      </div>
    </div>
  </section>
  )
}
export default Test