import AssessmentCard from "../components/AssessmentCard";
import AssessmentList from "../components/AssessmentList";
import GenericButton from "../components/GenericButton";

function AssessmentsPage() {
  return (
    <main className="container mx-auto my-10 max-w-6xl space-y-10">
      <h2 className="text-center text-4xl font-normal">
        <span className="text-[#9933ff]">Yetkinlik</span>lerini ücretsiz ölç,{" "}
        <span className="text-[#9933ff]">bilgi</span>lerini test et.
      </h2>
      <section className="space-y-10">
        <div className="flex h-72 flex-col items-center justify-around rounded-2xl bg-gradient-to-tr from-[#e37afe] to-[#3c0b8c] p-4 text-white">
          <h3 className="text-2xl font-semibold">Tobeto İşte Başarı Modeli</h3>
          <p className="text-xl">
            80 soru ile yetkinliklerini ölç, önerilen eğitimleri tamamla,
            rozetini kazan.
          </p>
          <GenericButton>Raporu Görüntüle</GenericButton>
        </div>

        {/* left-right card area */}
        <div className="doublecard grid grid-cols-2">
          <AssessmentCard />
          <AssessmentList />
        </div>

        <section className="subscription-perks text-center">
          <div className="vertical-bar mx-auto h-[180px] w-[12px] bg-gradient-to-b from-[#93f] via-[#953dac] to-[#fff]"></div>
          <div className="content space-y-14">
            <h2 className="text-4xl">
              <span className="text-[#9933ff]">Aboneliğe özel</span>{" "}
              değerlendirme araçları için
            </h2>
            <div className="doublecard grid grid-cols-2 gap-4">
              <div className="flex h-96 flex-col items-center justify-evenly rounded-2xl bg-gradient-to-br from-[#ad1deb] to-[#6e72fc] p-4 text-white">
                <h3 className="text-2xl font-semibold">
                  Kazanım Odaklı Testler
                </h3>
                <p className="text-xl">
                  Dijital gelişim kategorisindeki eğitimlere başlamadan
                  öncekonuyla ilgili bilgin ölçülür ve seviyene göre
                  yönlendirilirsin.
                </p>
                <div></div>
              </div>
              <div className="flex h-96 flex-col items-center justify-around rounded-2xl bg-gradient-to-br from-[#ad1deb] to-[#6e72fc] p-4 text-white">
                <h3 className="mt-8 text-2xl font-semibold">
                  Huawei Talent Interview Teknik Bilgi Sınavı*
                </h3>
                <p className="text-xl">
                  <span className="font-semibold italic hover:text-[#ffdd40]">
                    Sertifika alabilmen için,
                  </span>{" "}
                  eğitim yolculuğunun sonunda teknik yetkinliklerin ve kod
                  bilgin ölçülür.
                </p>
                <p>4400+ soru | 30+ programlama dili 4 zorluk seviyesi</p>
                <sub>*Türkiye Ar-Ge Merkezi tarafından tasarlanmıştır.</sub>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
export default AssessmentsPage;
