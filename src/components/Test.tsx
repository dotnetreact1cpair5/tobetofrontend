function Test() {
  return (
    <section>
      <div className="container mx-auto my-8 max-w-6xl rounded-xl p-4 shadow-2xl">
        <div className="test-card relative flex w-1/2 flex-col gap-4 rounded-xl p-4 shadow-2xl">
          <h3 className="font-bold">Sınavlarım</h3>
          <h3 className="font-bold">
            Herkes için Kodlama 1C Değerlendirme Sınavı
          </h3>
          <span className="text-sm font-normal">Herkes İçin Kodlama - 1C</span>
          <span className="flex space-x-2">
            <img src="/assets/timer.svg" className="w-5" />{" "}
            <span className="font-bold">45 Dakika</span>
          </span>
          <img
            src="/assets/check.svg"
            alt=""
            className="absolute right-4 top-4 w-5"
          />
        </div>
      </div>
    </section>
  );
}
export default Test;
