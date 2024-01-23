import Pcard from "../components/profile/Pcard";
import Pdatacard from "../components/profile/Pdatacard";

const PPage = () => {
  return (
    <main className="container mx-auto grid max-w-6xl grid-cols-3 space-x-8 p-4">
      <div className="col-span-1 w-full space-y-8">
        <Pdatacard />
        <Pcard title="Hakkımda" />
        <Pcard title="Yetkinliklerim" content="javascript" />
        <Pcard title="Yabancı Dillerim" content="ingilizce" />
        <Pcard title="Sertifikalarim" content="Amazon AWS" />
        <Pcard title="Medya Hesaplarım" content="linkedin" />
      </div>
      <div className="col-span-2 w-full space-y-8">
        <Pcard title="Tobeto İşte Başarı Modelim" chart={true} />
        <Pcard title="Tobeto Seviye Testlerim" content="javascript" />
        <Pcard
          title="Yetkinlik Rozetlerim"
          content="ingilizce"
          badges={["a", "b", "c"]}
        />
        <Pcard title="Aktivite Haritam" activity={true} />
        <Pcard
          title="Eğitim Hayatım ve Deneyimlerim"
          content="Henüz bir eğitim ve deneyim bilgisi eklemedin."
        />
      </div>
    </main>
  );
};
export default PPage;
