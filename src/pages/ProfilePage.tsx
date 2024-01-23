// import React, { useState, useEffect } from "react";
// import ReactCalendarHeatmap from "react-calendar-heatmap";
// import "react-calendar-heatmap/dist/styles.css";
// // import { Card } from "flowbite-react";
// import "../Profile.css";
// import ProfileCard from "../components/profile/ProfileCard";
// import { fetchAccountData } from "../services/AccountService";
// import { fetchExperiences } from "../services/ExperienceService";
// import { Chart as ChartJS } from "chart.js/auto";
// // import { Bar, Doughnut, Line } from "react-chartjs-2";
// import RadarChart from "../components/profile/RadarChart";
// import sourceData from "../data/sourceData";
// import { useSelector } from "react-redux";
// import { selectAllPosts } from "../slices/postsSlice";

// interface ProfileData {
//   id: number;
//   firstName: string;
//   lastName: string;
//   nationalId: string;
//   birthDate: string;
//   phoneNumber: string;
// }

// interface ExperienceData {
//   id: number;
//   profileId: number;
//   companyName: string;
//   position: string;
//   field: string;
//   cityId: number;
//   startDate: string;
//   endDate: string;
//   jobDescription: string;
// }

const ProfilePage = () => {
//   // const [profileData, setProfileData] = useState<ProfileData[]>([]);
//   // const [experienceData, setExperienceData] = useState<ExperienceData[]>([]);
//   // const [loading, setLoading] = useState(true);
//   // const [error, setError] = useState<string | null>(null);
//   // const data = useSelector(selectAllPosts);
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const profileData = await fetchAccountData();
//   //       setProfileData(profileData);

//   //       const experienceData = await fetchExperiences();
//   //       setExperienceData(experienceData);

//   //       setLoading(false);
//   //     } catch (error) {
//   //       console.error("Veri alınırken hata oluştu:", error);
//   //       setError("Veri alınırken bir hata oluştu");
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);

//   // useEffect(() => {
//   //   const canvasElement = document.getElementById(
//   //     "radarChart"
//   //   ) as HTMLCanvasElement;

//   //   if (canvasElement) {
//   //     const existingChart = ChartJS.getChart(canvasElement);

//   //     if (existingChart) {
//   //       existingChart.destroy();
//   //     }

//   //     new ChartJS(canvasElement, {
//   //       type: "radar",
//   //       data: {
//   //         labels: sourceData.map((data) => data.label),
//   //         datasets: [
//   //           {
//   //             label: "Count",
//   //             data: sourceData.map((data) => data.value),
//   //             backgroundColor: [
//   //               "rgba(43,63,229,0.8)",
//   //               "rgba(250,192,19,0.8)",
//   //               "rgba(253,135,135,0.8)",
//   //             ],
//   //           },
//   //         ],
//   //       },
//   //     });
//   //   }
//   // }, [sourceData]);

//   // if (loading) {
//   //   return <p>Loading...</p>;
//   // }

//   // if (error) {
//   //   return <p>Error: {error}</p>;
//   // }

//   return (
//     <main
//       id="profile-page"
//       className="profile-page-container grid grid-cols-1 gap-4 p-4 md:grid-cols-3"
//     >
//       <div className="top">
//         <span>
//           <img src="/public/edit2.svg" alt="edit" className="ali" />
//         </span>

//         <span>
//           <img src="/public/share.svg" alt="share" className="ali" />
//         </span>
//       </div>
//       <div className="grid grid-rows-3 gap-4 md:col-span-1">
//         {/* {data.map((data) => (
//           <ProfileCard key={data.id} isShareImgVisible={false}>
//             <div className="cv-pp">
//               <img
//                 src="/public/images.png"
//                 alt="Name"
//                 className="cvName cvIcon"
//               /> */}
//             </div>
//             <div className="cv-info">
//               <div className="info-box">
//                 <div className="info-icon-name">
//                   <img
//                     src="/public/cv-name.svg"
//                     alt="Name"
//                     className="cvName"
//                   />
//                 </div>
//                 <div className="info-text">
//                   <span className="header">Ad Soyad</span>
//                   <br />
//                   <span className="text">
//                     {/* {data.firstName} {data.lastName} */}
//                     ali veli
//                   </span>
//                 </div>
//               </div>

//               <div className="info-box">
//                 <div className="info-icon-name">
//                   <img
//                     src="/public/cv-date.svg"
//                     alt="Date"
//                     className="cvDate"
//                   />
//                 </div>
//                 <div className="info-text">
//                   <span className="header">Doğum Tarihi</span>
//                   <br />
//                   <span className="text">
//                     {/* {new Date(data.birthDate).toLocaleDateString()} */}
//                     ali veli
//                   </span>
//                 </div>
//               </div>

//               <div className="info-box">
//                 <div className="info-icon-name">
//                   <img
//                     src="/public/cv-mail.svg"
//                     alt="Mail"
//                     className="cvMail"
//                   />
//                 </div>
//                 <div className="info-text">
//                   <span className="header">TC Kimlik No</span>
//                   <br />
//                   <span className="text">
//                     ali
//                     {/* {data.nationalId} */}
//                   </span>
//                 </div>
//               </div>

//               <div className="info-box">
//                 <div className="info-icon-name">
//                   <img
//                     src="/public/cv-phone.svg"
//                     alt="Mail"
//                     className="cvPhone"
//                   />
//                 </div>
//                 <div className="info-text">
//                   <span className="header">Telefon Numarası</span>
//                   <br />
//                   <span className="text">
//                     {/* {data.phoneNumber} */}
//                     qweqweqw
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </ProfileCard>
//         ))}

//         <ProfileCard title="Hakkımda" isShareImgVisible={false}>
//           Info
//         </ProfileCard>

//         <ProfileCard title="Yetkinliklerim" isShareImgVisible={false}>
//           Info
//         </ProfileCard>

//         <ProfileCard title="Yabancı Dillerim" isShareImgVisible={false}>
//           Info
//         </ProfileCard>

//         <ProfileCard title="Sertifikalarım" isShareImgVisible={false}>
//           Info
//         </ProfileCard>

//         <ProfileCard title="Medya Hesaplarım" isShareImgVisible={false}>
//           <a
//             className="cv-instagram"
//             target="_blank"
//             href="/https://www.instagram.com/"
//           >
//             Tıkla
//           </a>
//         </ProfileCard>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="grid grid-rows-2 gap-4 md:col-span-2">
//         <ProfileCard title="Tobeto İşte Başarı Modelim">
//           <div className="grid grid-cols-2">
//             <div className="col-span-1">
//               <RadarChart />
//             </div>
//             <div className="col-span-1">
//               <div className="radar-labels">
//                 <div className="label">
//                   <span className="legend legend8">4.9</span>
//                   <span className="legendName">
//                     Yeni dünyaya hazırlanıyorum
//                   </span>
//                 </div>
//                 <div className="label">
//                   <span className="legend legend8">4.9</span>
//                   <span className="legendName">
//                     Yeni dünyaya hazırlanıyorum
//                   </span>
//                 </div>
//                 <div className="label">
//                   <span className="legend legend8">4.9</span>
//                   <span className="legendName">
//                     Yeni dünyaya hazırlanıyorum
//                   </span>
//                 </div>
//                 <div className="label">
//                   <span className="legend legend8">4.9</span>
//                   <span className="legendName">
//                     Yeni dünyaya hazırlanıyorum
//                   </span>
//                 </div>
//                 <div className="label">
//                   <span className="legend legend8">4.9</span>
//                   <span className="legendName">
//                     Yeni dünyaya hazırlanıyorum
//                   </span>
//                 </div>
//                 <div className="label">
//                   <span className="legend legend8">4.9</span>
//                   <span className="legendName">
//                     Yeni dünyaya hazırlanıyorum
//                   </span>
//                 </div>
//                 <div className="label">
//                   <span className="legend legend8">4.9</span>
//                   <span className="legendName">
//                     Yeni dünyaya hazırlanıyorum
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </ProfileCard>

//         <ProfileCard title="Tobeto Seviye Testlerim" isShareImgVisible={false}>
//           <div className="envantoryList">
//             <div className="envantory-result">
//               <div className="d-flex justify-content-between w-100">
//                 <span className="examName">
//                   Herkes için Kodlama 1B Değerlendirme Sınavı
//                   <br />
//                 </span>
//                 <span className="examTime">12-10-2023</span>
//               </div>
//               <span className="examResult">76.00</span>
//             </div>
//           </div>
//         </ProfileCard>

//         <ProfileCard title="Yetkinlik Rozetlerim" isShareImgVisible={false}>
//           <div className="badge-container">
//             {Array.from({ length: 3 }, (_, index) => (
//               <div key={index} className="badge-card"></div>
//             ))}
//           </div>
//         </ProfileCard>

//         <ProfileCard title="Aktivite Haritam" isShareImgVisible={false}>
//           <ReactCalendarHeatmap
//             startDate={new Date("2022-01-01")}
//             endDate={new Date("2022-12-31")}
//             values={[{ date: "2022-01-01", count: 3 }]}
//           />
//         </ProfileCard>

//         {data.map((data) => (
//           <ProfileCard
//             title="Eğitim Hayatım ve Deneyimlerim"
//             key={data.id}
//             isShareImgVisible={false}
//           >
//             <div className="cv-info">
//               <div className="info-box">
//                 <span className="text">
//                   {data}
//                   <br />
//                   {data} <br />
//                   {data} <br />
//                   {data} <br />
//                   {data}
//                 </span>
//               </div>
//             </div>
//           </ProfileCard>
//         ))}
//       </div>
//     </main>
//   );
// };

export default ProfilePage;
