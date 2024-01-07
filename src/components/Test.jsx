function Test() {
  return (
    <section>
    <div className="container max-w-6xl p-4 mx-auto my-8 shadow-2xl rounded-xl">
      <div className="relative flex flex-col w-1/2 gap-4 p-4 shadow-2xl test-card rounded-xl">
        <h3 className="font-bold">Sınavlarım</h3>
        <h3 className="font-bold">
          Herkes için Kodlama 1C Değerlendirme Sınavı
        </h3>
        <span className="text-sm font-normal">
          Herkes İçin Kodlama - 1C
        </span>
        <span className="flex space-x-2">
          <img src="../public/timer.svg" className="w-5" />{" "}
          <span className="font-bold">45 Dakika</span>
        </span>
        <img
          src="../public/check.svg"
          alt=""
          className="absolute w-5 top-4 right-4"
        />
      </div>
    </div>
  </section>
  )
}
export default Test