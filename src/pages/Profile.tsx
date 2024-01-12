import React, { useState, useEffect } from 'react';
import ReactCalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { Card } from 'flowbite-react'; 
import '../Profile.css';
import ProfileCard from '../components/ProfileCard';
import { fetchAccountData } from '../services/AccountService';
import { fetchExperiences } from '../services/ExperienceService';

interface ProfileData {
  id: number;
  firstName: string;
  lastName: string;
  nationalId: string;
  birthDate: string;
  phoneNumber: string;
}

interface ExperienceData {
  id: number;
  profileId: number;
  companyName: string;
  position: string;
  field: string;
  cityId: number;
  startDate: string;
  endDate: string;
  jobDescription: string;
}

const Profile: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData[]>([]);
  const [experienceData, setExperienceData] = useState<ExperienceData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await fetchAccountData();
        setProfileData(profileData);

        const experienceData = await fetchExperiences();
        setExperienceData(experienceData);

        setLoading(false);
      } catch (error) {
        console.error('Veri alınırken hata oluştu:', error);
        setError('Veri alınırken bir hata oluştu');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container1">
      <div className='veli'>
        {profileData.map((data) => (
          <ProfileCard key={data.id}>
            <div className="cv-pp">
              <img src="/public/images.png" alt="Name" className="cvName cvIcon" />
            </div>
            <div className="cv-info">
              <div className="info-box">
                <div className="info-icon-name">
                  <img src="/public/cv-name.svg" alt="Name" className="cvName" />
                </div>
                <div className="info-text">
                  <span className="header">Ad Soyad</span><br/>
                  <span className="text">{data.firstName} {data.lastName}</span>
                </div>
              </div>

              <div className="info-box">
                <div className="info-icon-name">
                  <img src="/public/cv-date.svg" alt="Date" className="cvDate" />
                </div>
                <div className="info-text">
                  <span className="header">Doğum Tarihi</span><br/>
                  <span className="text">{new Date(data.birthDate).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="info-box">
                <div className="info-icon-name">
                  <img src="/public/cv-mail.svg" alt="Mail" className="cvMail" />
                </div>
                <div className="info-text">
                  <span className="header">TC Kimlik No</span><br/>
                  <span className="text">{data.nationalId}</span>
                </div>
              </div>

              <div className="info-box">
                <div className="info-icon-name">
                  <img src="/public/cv-phone.svg" alt="Mail" className="cvPhone" />
                </div>
                <div className="info-text">
                  <span className="header">Telefon Numarası</span><br/>
                  <span className="text">{data.phoneNumber}</span>
                </div>
              </div>
            </div>      
          </ProfileCard>
        ))}

        <ProfileCard title="Hakkımda">
          Info
        </ProfileCard>

        <ProfileCard title="Yetkinliklerim">
          Info
        </ProfileCard>

        <ProfileCard title="Yabancı Dillerim">
          Info
        </ProfileCard>

        <ProfileCard title="Sertifikalarım">
          Info
        </ProfileCard>

        <ProfileCard title="Medya Hesaplarım">
        <a className="cv-instagram" target="_blank" href="/https://www.instagram.com/">Tıkla</a>
        </ProfileCard>
      </div>

      {/* RIGHT SIDE */}
      <div className='ali'>
        <ProfileCard title="Tobeto İşte Başarı Modelim">
        <div className="row">
            <div className="leftSide">Chart</div>
            <div className="rightSide">
              <div className="radar-labels">
                <div className="label"><span className="legend legend8">4.9</span><span className="legendName">Yeni dünyaya hazırlanıyorum</span></div>
                <div className="label"><span className="legend legend8">4.9</span><span className="legendName">Yeni dünyaya hazırlanıyorum</span></div>
                <div className="label"><span className="legend legend8">4.9</span><span className="legendName">Yeni dünyaya hazırlanıyorum</span></div>
                <div className="label"><span className="legend legend8">4.9</span><span className="legendName">Yeni dünyaya hazırlanıyorum</span></div>
                <div className="label"><span className="legend legend8">4.9</span><span className="legendName">Yeni dünyaya hazırlanıyorum</span></div>
                <div className="label"><span className="legend legend8">4.9</span><span className="legendName">Yeni dünyaya hazırlanıyorum</span></div>
                <div className="label"><span className="legend legend8">4.9</span><span className="legendName">Yeni dünyaya hazırlanıyorum</span></div>
                <div className="label"><span className="legend legend8">4.9</span><span className="legendName">Yeni dünyaya hazırlanıyorum</span></div>
              </div>
            </div>
          </div>
        </ProfileCard>

        <ProfileCard title="Tobeto Seviye Testlerim">
            <div className="envantoryList"><div className=" envantory-result"><div className="d-flex justify-content-between w-100"><span className="examName">Herkes için Kodlama 1B Değerlendirme Sınavı<br/></span><span className="examTime">12-10-2023</span></div><span className="examResult">76.00</span></div>
            </div>
        </ProfileCard>

        <ProfileCard title="Yetkinlik Rozetlerim">
        <div className="badge-container">
        {Array.from({ length: 3 }, (_, index) => (
        <div key={index} className="badge-card">
        </div>
      ))}
        </div>
        </ProfileCard>

        <ProfileCard title="Aktivite Haritam">
          <ReactCalendarHeatmap
            startDate={new Date('2022-01-01')}
            endDate={new Date('2022-12-31')}
            values={[
              { date: '2022-01-01', count: 3 },
            ]}
          />
        </ProfileCard>

        {experienceData.map((data) => (
  <ProfileCard title="Eğitim Hayatım ve Deneyimlerim" key={data.id}>
  <div className="cv-info">
      <div className="info-box">
        <span className="text">
          {data.companyName}<br />
          {data.cityId} <br />
          {data.endDate} <br />
          {data.startDate} <br />
          {data.position}
        </span>
      </div>
  </div>
</ProfileCard>
))}

      </div>
    </div>
  );
};

export default Profile;
