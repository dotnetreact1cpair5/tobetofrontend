import React from "react";
import { Account } from "../../models/accountModel";

interface PdatacardProps {
  data: Account | null;
}

const Pdatacard: React.FC<PdatacardProps> = ({ data }) => {
  if (!data) {
    return <div>No data available</div>;
  }
  const formattedBirthDate = new Date(data.birthDate).toLocaleDateString(
    "tr-TR"
  );
  return (
    <div className="flex flex-col justify-around space-y-8 rounded-2xl p-4 shadow-2xl">
      <div className="">
        <img
          src="/assets/pfp.png"
          className="mx-auto h-32 w-32 rounded-full"
          alt="Profile Picture"
        />
      </div>
      <div className="space-y-4">
        <div className="flex space-x-4">
          <img src="/cv-name.svg" alt="Name Icon" />
          <div className="flex flex-col">
            <h5 className="text-xs">Ad Soyad</h5>
            <span className="font-semibold">
              {data.firstName} {data.lastName}
            </span>
          </div>
        </div>
        <div className="flex space-x-4">
          <img src="/cv-date.svg" alt="Date Icon" />
          <div className="flex flex-col">
            <h5 className="text-xs">Doğum Tarihi</h5>
            <span className="font-semibold">{formattedBirthDate}</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <img src="/cv-mail.svg" alt="Mail Icon" />
          <div className="flex flex-col">
            <h5 className="text-xs">E-Posta Adresi</h5>
            <span className="font-semibold">{data.email}</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <img src="/cv-phone.svg" alt="Phone Icon" />
          <div className="flex flex-col">
            <h5 className="text-xs">Telefon Numarası</h5>
            <span className="font-semibold">{data.phoneNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pdatacard;
