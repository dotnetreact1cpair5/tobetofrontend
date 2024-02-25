import React, { useState, useEffect } from "react";
import ProfileCard from "../components/profile/ProfileCard";
import ProfileDataCard from "../components/profile/ProfileDataCard";
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
import { AnimatePresence, motion } from "framer-motion";

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
  const transition = {
    duration: 1.5,
  };

  const slideTransition = {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideTransition}
        transition={transition}
      >
        <main className="container mx-auto grid max-w-6xl grid-cols-3 space-x-8 p-8">
          <div className="col-span-1 w-full space-y-8">
            {loading && <div>Loading...</div>}
            {fetchError && <div>Error: {fetchError}</div>}
            <ProfileDataCard data={accountData} />
            <ProfileCard title="Hakkımda" data={languageData} />
            <ProfileCard title="Yetkinliklerim" data={skillData} />
            <ProfileCard title="Yabancı Dillerim" data={languageData} />
            <ProfileCard title="Sertifikalarım" data={certificateData} />
            <ProfileCard title="Medya Hesaplarım" data={socialMediaData} />
          </div>
          <div className="col-span-2 w-full space-y-8">
            <ProfileCard title="Tobeto İşte Başarı Modelim" chart={true} />
            <ProfileCard title="Tobeto Seviye Testlerim" data={languageData} />
            <ProfileCard
              title="Yetkinlik Rozetlerim"
              data={languageData}
              badges={["a", "b", "c"]}
            />
            <ProfileCard title="Aktivite Haritam" activity={true} />
            <ProfileCard
              title="Eğitim Hayatım ve Deneyimlerim"
              data={languageData}
            />
          </div>
        </main>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProfilePage;
