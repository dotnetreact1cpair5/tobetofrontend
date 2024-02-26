import { NavLink } from "react-router-dom";

const EditProfileList = () => {
  const transition = {
    duration: 1,
  };

  const slideTransition = {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
  };
  return (
    <ul className="profile-list text-xl">
      <li>
        <img src="/assets/user.svg" />
        <NavLink to="/profilimi-duzenle/kisisel-bilgilerim">
          Kişisel Bilgilerim
        </NavLink>
      </li>
      <li>
        <img src="/assets/business.svg" />
        <NavLink to="/profilimi-duzenle/deneyimlerim">Deneyimlerim</NavLink>
      </li>
      <li>
        <img src="/assets/book.svg" />
        <NavLink to="/profilimi-duzenle/egitim-hayatim">Eğitim Hayatım</NavLink>
      </li>
      <li>
        <img src="/assets/award.svg" />
        <NavLink to="/profilimi-duzenle/yetkinliklerim">Yetkinliklerim</NavLink>
      </li>
      <li>
        <img src="/assets/certificates.svg" />
        <NavLink to="sertifikalarim">Sertifikalarım</NavLink>
      </li>
      <li>
        <img src="/assets/globe.svg" />
        <NavLink to="/profilimi-duzenle/medya-hesaplarim">
          Medya Hesaplarım
        </NavLink>
      </li>
      <li>
        <img src="/assets/translate.svg" />
        <NavLink to="/profilimi-duzenle/yabanci-dil">Yabancı Dillerim</NavLink>
      </li>
      {/* <li>
        <img src="/assets/settings.svg" />
        <NavLink to="/profilimi-duzenle/ayarlar">Ayarlar</NavLink>
      </li> */}
    </ul>
  );
};
export default EditProfileList;
