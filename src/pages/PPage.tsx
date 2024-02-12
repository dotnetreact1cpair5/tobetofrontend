import React, { useState, useEffect } from "react";
import Pcard from "../components/profile/Pcard";
import Pdatacard from "../components/profile/Pdatacard";
import ForeignLanguageService from "../services/ForeignLanguageService";
import { ForeignLanguage } from "../models/ForeignLanguage";

const PPage = () => {
  const [foreignLanguageData, setForeignLanguageData] = useState<ForeignLanguage | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ForeignLanguageService.getForeignLanguageData();
        setForeignLanguageData(data);
      } catch (error: any) {
        setFetchError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <main className="container mx-auto grid max-w-6xl grid-cols-3 space-x-8 p-4">
      <div className="col-span-1 w-full space-y-8">
        {loading && <div>Loading...</div>}
        {fetchError && <div>Error: {fetchError}</div>}
        <Pcard title="Hakkımda" />
        {foreignLanguageData && (
          <Pcard title="Yabancı Dillerim" content={foreignLanguageData.name} />
        )}
        <Pcard title="Sertifikalarim" content="Amazon AWS" />
        <Pcard title="Medya Hesaplarım" content="Linkedin" />
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
