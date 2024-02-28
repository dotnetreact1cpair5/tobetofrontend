import { useState, useEffect, useRef } from "react";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import { Chart } from "chart.js/auto";
import "react-calendar-heatmap/dist/styles.css";
import { ForeignLanguage } from "../../models/foreignLanguageModel";
import { Account } from "../../models/accountModel";

interface DataItem {
  label: string;
  value: number;
}

interface ProfileCardProps {
  data?: any;
  skillData?: any;
  accountData?: any;
  languageData?: any;
  experienceData?: any;
  certificateData?: any;
  socialMediaData?: any;
  title: string;
  content?: string;
  badges?: string[];
  activity?: boolean;
  chart?: boolean;
  chartData?: DataItem[];
}

const sourceData: DataItem[] = [
  { label: "Yeni dünyaya hazırlanıyorum", value: 65 },
  { label: "Profesyonel duruşumu geliştiriyorum", value: 59 },
  { label: "Kendimi tanıyor ve yönetiyorum", value: 90 },
  { label: "Yaratıcı ve doğru çözümler geliştiriyorum", value: 90 },
  { label: "Kendimi sürekli geliştiriyorum", value: 90 },
  { label: "Başkaları ile birlikte çalışıyorum", value: 90 },
  { label: "Sonuç ve başarı odaklıyım", value: 90 },
  { label: "Anlıyorum ve anlaşılıyorum", value: 90 },
];

const ProfileCard: React.FC<ProfileCardProps> = ({
  data,
  accountData,
  languageData,
  experienceData,
  certificateData,
  socialMediaData,

  skillData,
  title,
  content,
  badges,
  activity,
  chart,
  chartData,
}) => {
  const chartRef = useRef<Chart>();

  useEffect(() => {
    const canvasElement = document.getElementById(
      "radarChart"
    ) as HTMLCanvasElement;

    if (canvasElement) {
      const existingChart = Chart.getChart(canvasElement);

      if (existingChart) {
        existingChart.destroy();
      }

      new Chart(canvasElement, {
        type: "radar",
        data: {
          labels: sourceData.map((data) => data.label),
          datasets: [
            {
              label: "Count",
              data: sourceData.map((data) => data.value),
              backgroundColor: [
                "rgba(43,63,229,0.8)",
                "rgba(250,192,19,0.8)",
                "rgba(253,135,135,0.8)",
              ],
            },
          ],
        },
      });
    }
  }, [sourceData]);
  return (
    <div className="flex flex-col items-center rounded-2xl p-8 shadow-2xl">
      <h3 className="text-center text-lg font-bold">{title}</h3>
      <hr className="h-1 w-full border-t-2" />
      <p className="mt-4">
        {accountData && <span> {accountData.description}</span>}
      </p>

      <div className="flex flex-col items-center justify-center space-y-8">
        {languageData &&
          languageData.map((lang: any) => (
            <div className="text-md mt-4 rounded-full px-6 py-2 font-medium shadow-2xl hover:bg-[#93f] hover:text-white">
              <p className="text-sm">{lang.foreignLanguageName}</p>
              <p className="text-sm">{lang.foreignLanguageLevelName}</p>
            </div>
          ))}
      </div>
      {skillData &&
        skillData.map((skill: any) => (
          <p className="my-2 rounded-full p-2 font-medium shadow-2xl hover:bg-[#93f] hover:text-white">
            {skill.skillName}
          </p>
        ))}
      <div className="space-y-2">
        {certificateData &&
          certificateData.map((cert: any) => (
            <div className="rounded-full p-2 text-center font-medium shadow-xl hover:bg-[#93f] hover:text-white">
              <p>{cert.name.replace(".pdf", "")}</p>
            </div>
          ))}
      </div>
      <div className="flex space-x-8">
        {socialMediaData &&
          socialMediaData.map((social: any) => (
            <p>
              {social.socialMediaPlatformName === "Instagram" && (
                <img
                  src="/assets/instagram.svg"
                  className="h-10 w-10 cursor-pointer"
                />
              )}
              {social.socialMediaPlatformName === "Twitter" && (
                <img
                  src="/assets/twitter.svg"
                  className="h-10 w-10 cursor-pointer"
                />
              )}
            </p>
          ))}
      </div>

      <div className="flex flex-col space-y-8">
        {experienceData &&
          experienceData.map((d: any) => (
            <div className="space-y-1 rounded-2xl px-16 py-2 font-medium shadow-2xl hover:bg-[#93f] hover:text-white">
              <p> {d.companyName}</p>
              <p className="text-xs italic"> {d.cityName}</p>
              <p> {d.position}</p>
              <p>Sektör: {d.sector}</p>
              {/* <p> {d.jobDescription}</p> */}
              <p className="text-sm italic">
                {new Date(d.startDate).toLocaleDateString()} -{" "}
                {new Date(d.endDate).toLocaleDateString()}
              </p>
              <p> </p>
            </div>
          ))}
      </div>

      {badges && (
        <div className="badge flex items-center justify-center space-x-8">
          <img
            src="/assets/iklogo.svg"
            className="h-20 w-20 rounded-lg bg-slate-100"
          />
          <img
            src="/assets/react.svg"
            className="h-20 w-20 rounded-lg bg-slate-100"
          />
          <img
            src="/assets/vite.svg"
            className="h-20 w-20 rounded-lg bg-slate-100"
          />
        </div>
      )}

      {activity && (
        <div className="flex h-40 w-full items-center justify-center p-2">
          <ReactCalendarHeatmap
            startDate={new Date("2024-01-01")}
            endDate={new Date("2024-12-31")}
            values={[
              { date: "2024-02-01", count: 1 },
              { date: "2024-03-03", count: 2 },
              { date: "2024-02-08", count: 4 },
              { date: "2024-04-08", count: 4 },
              { date: "2024-05-08", count: 4 },
              { date: "2024-06-08", count: 4 },
              { date: "2024-07-08", count: 4 },
              { date: "2024-08-08", count: 4 },
              { date: "2024-09-08", count: 4 },
              { date: "2024-11-04", count: 1 },
              { date: "2024-12-12", count: 3 },
            ]}
            classForValue={(value) => {
              if (!value) {
                return "color-empty";
              }
              if (value.count === 1) {
                return "color-low";
              } else if (value.count === 2) {
                return "color-medium";
              } else {
                return "color-high";
              }
            }}
          />
        </div>
      )}

      {chart && (
        <canvas
          id="radarChart"
          style={{ maxWidth: "400px", maxHeight: "400px" }}
        />
      )}
    </div>
  );
};

export default ProfileCard;
