import React, { useState, useEffect } from "react";
import Pcard from "../components/profile/Pcard";
import Pdatacard from "../components/profile/Pdatacard";
import AccountService from "../services/AccountService";
import SkillService from "../services/SkillService";
import ForeignLanguageService from "../services/ForeignLanguageService";
import { Account } from "../models/accountModel";
import { Skill } from "../models/skillModel";
import { ForeignLanguage } from "../models/foreignLanguageModel";

const PPage = () => {
  const [profileData, setProfileData] = useState<Account | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      const accountService = new AccountService();
      try {
        const data = await accountService.getProfileData();
        setProfileData(data);
      } catch (error: any) {
        setFetchError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const [skillData, setSkillData] = useState<Skill | null>(null); 
  const [skillLoading, setSkillLoading] = useState<boolean>(true);
  const [skillFetchError, setSkillFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkillData = async () => {
      const skillService = new SkillService();
      try {
        const data = await skillService.getSkillData();
        setSkillData(data);
      } catch (error: any) {
        setSkillFetchError(error.message);
      } finally {
        setSkillLoading(false);
      }
    };

    fetchSkillData();
  }, []);

  const [foreignLanguageData, setforeignLanguageData] = useState<ForeignLanguage | null>(null); 
  const [foreignLanguageLoading, setforeignLanguageLoading] = useState<boolean>(true);
  const [foreignLanguageFetchError, setforeignLanguageFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchforeignLanguageData = async () => {
      const foreignLanguageService = new ForeignLanguageService();
      try {
        const data = await foreignLanguageService.getForeignLanguageData();
        console.log(data);
        setforeignLanguageData(data);
      } catch (error: any) {
        setforeignLanguageFetchError(error.message);
      } finally {
        setforeignLanguageLoading(false);
      }
    };

    fetchforeignLanguageData();
  }, []);

  return (
    <main className="container mx-auto grid max-w-6xl grid-cols-3 space-x-8 p-4">
      <div className="col-span-1 w-full space-y-8">
        {loading && <div>Loading...</div>}
        {fetchError && <div>Error: {fetchError}</div>}
        {profileData && <Pdatacard data={profileData} />}
        <Pcard title="Hakkımda" />
        {skillLoading && <div>Loading skills...</div>}
        {skillFetchError && <div>Error: {skillFetchError}</div>}
        {skillData && (
          <Pcard title="Yetkinliklerim" content={skillData.name} />
        )}

        {foreignLanguageLoading && <div>Loading languages...</div>}
        {foreignLanguageFetchError && <div>Error: {foreignLanguageFetchError}</div>}
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
