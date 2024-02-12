import React, { useState, useEffect } from "react";
import Pcard from "../components/profile/ProfileCard";
import Pdatacard from "../components/profile/ProfileDataCard";
import AccountService from "../services/AccountService";
import ForeignLanguageService from "../services/ForeignLanguageService";
import SocialMediaService from "../services/SocialMediaService";
import SkillService from "../services/SkillService";
import CertificateService from "../services/CertificateService";
import { Account } from "../models/accountModel";
import { ForeignLanguage } from "../models/foreignLanguageModel";
import { SocialMedia } from "../models/socialMediaModel";
import { Skill } from "../models/skillModel";
import { Certificate } from "../models/certificateModel";

const ProfilePage = () => {
  const [accountData, setAccountData] = useState<Account | null>(null);
  const [languageData, setLanguageData] = useState<ForeignLanguage | null>(
    null
  );
  const [socialMediaData, setSocialMediaData] = useState<SocialMedia | null>(
    null
  );
  const [skillData, setSkillData] = useState<Skill | null>(null);
  const [certificateData, setCertificateData] = useState<Certificate | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const account = await AccountService.getProfileData();
        const language = await ForeignLanguageService.getForeignLanguageData();
        const socialMedia = await SocialMediaService.getSocialMediaData();
        const skill = await SkillService.getSkillData();
        const certificate = await CertificateService.getCertificateData();

        setAccountData(account);
        setLanguageData(language);
        setSocialMediaData(socialMedia);
        setSkillData(skill);
        setCertificateData(certificate);
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
        <Pdatacard data={accountData} />
        <Pcard title="Hakkımda" data={languageData} />
        <Pcard title="Yetkinliklerim" data={skillData} />
        <Pcard title="Yabancı Dillerim" data={languageData} />
        <Pcard title="Sertifikalarım" data={certificateData} />
        <Pcard title="Medya Hesaplarım" data={socialMediaData} />
      </div>
      <div className="col-span-2 w-full space-y-8">
        <Pcard title="Tobeto İşte Başarı Modelim" chart={true} />
        <Pcard title="Tobeto Seviye Testlerim" data={languageData} />
        <Pcard
          title="Yetkinlik Rozetlerim"
          data={languageData}
          badges={["a", "b", "c"]}
        />
        <Pcard title="Aktivite Haritam" activity={true} />
        <Pcard title="Eğitim Hayatım ve Deneyimlerim" data={languageData} />
      </div>
    </main>
  );
};

export default ProfilePage;
