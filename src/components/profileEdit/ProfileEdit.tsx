import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { Sidebar } from 'flowbite-react';
import { HiUser } from 'react-icons/hi';
import { MdBusinessCenter } from "react-icons/md";
import { IoBook } from "react-icons/io5";
import { BiSolidAward } from "react-icons/bi";
import { PiCertificateFill } from "react-icons/pi";
import { MdOutlineLanguage } from "react-icons/md";
import { MdOutlineTranslate } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";

import PersonalInformation from "./PersonalInformation";
import Experience from "./Experience";
import Educations from "./Educations";
import Skills from "./Skills";
import Certificates from "./Certificates";
import SocialMedias from "./SocialMedias";
import ForeignLanguages from "./ForeignLanguages";
import Settings from "./Settings";

function ProfileEdit() {
  return (
    <>
      <main className="min-h-screen">
        <section className="py-6 bg-white">
          <div className="container">
            <div className="row">
              <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-span-3 ...">
                  <div className="p-2 py-4 mobile-sidebar">
                    <Sidebar aria-label="Default sidebar example">
                      <Sidebar.Items>
                        <Sidebar.ItemGroup>
                          <Sidebar.Item href="/profilim/profilimi-duzenle/kisisel-bilgilerim" icon={HiUser}>
                            Kişisel Bilgilerim
                          </Sidebar.Item>
                          <Sidebar.Item href="/profilim/profilimi-duzenle/deneyimlerim" icon={MdBusinessCenter}>
                            Deneyimlerim
                          </Sidebar.Item>
                          <Sidebar.Item href="/profilim/profilimi-duzenle/egitim-hayatim" icon={IoBook}>
                            Eğitim Hayatım
                          </Sidebar.Item>
                          <Sidebar.Item href="/profilim/profilimi-duzenle/yetkinliklerim" icon={BiSolidAward}>
                            Yetkinliklerim
                          </Sidebar.Item>
                          <Sidebar.Item href="/profilim/profilimi-duzenle/sertifikalarim" icon={PiCertificateFill}>
                            Sertifikalarım
                          </Sidebar.Item>
                          <Sidebar.Item href="/profilim/profilimi-duzenle/medya-hesaplarim" icon={MdOutlineLanguage}>
                            Medya Hesaplarım
                          </Sidebar.Item>
                          <Sidebar.Item href="/profilim/profilimi-duzenle/yabanci-dil" icon={MdOutlineTranslate}>
                            Yabancı Dillerim
                          </Sidebar.Item>
                          <Sidebar.Item href="/profilim/profilimi-duzenle/ayarlar" icon={IoIosSettings}>
                            Ayarlar
                          </Sidebar.Item>
                        </Sidebar.ItemGroup>
                      </Sidebar.Items>
                    </Sidebar>
                  </div>
                </div>
                <div className="row-span-2 col-span-2 ...">
                <Outlet />
                  <Routes>
                    <Route path="kisisel-bilgilerim" element={<PersonalInformation />} />
                    <Route path="deneyimlerim" element={<Experience />} />
                    <Route path="egitim-hayatim" element={<Educations />} />
                    <Route path="yetkinliklerim" element={<Skills />} />
                    <Route path="sertifikalarim" element={<Certificates />} />
                    <Route path="medya-hesaplarim" element={<SocialMedias />} />
                    <Route path="yabanci-dil" element={<ForeignLanguages />} />
                    <Route path="ayarlar" element={<Settings />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default ProfileEdit