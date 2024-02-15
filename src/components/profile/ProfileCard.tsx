import { useState, useEffect, useRef } from "react";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import { Chart } from "chart.js/auto";
import "react-calendar-heatmap/dist/styles.css";
import { ForeignLanguage } from "../../models/foreignLanguageModel";

interface DataItem {
  label: string;
  value: number;
}

interface ProfileCardProps {
  data?: ForeignLanguage | null;
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
    <div className="flex flex-col items-center rounded-2xl p-4 shadow-2xl">
      <h3 className="text-lg font-bold">{title}</h3>
      <hr className="h-1 w-full border-t-2" />
      {data && <span>{data.name}</span>}
      {badges &&
        badges.map((badge, index) => (
          <div className="badge" key={index}>
            {badge}
          </div>
        ))}
      {activity && (
        <ReactCalendarHeatmap
          startDate={new Date("2022-01-01")}
          endDate={new Date("2022-12-31")}
          values={[{ date: "2022-01-01", count: 3 }]}
        />
      )}
      {chart && <canvas id="radarChart" />}
    </div>
  );
};

export default ProfileCard;
