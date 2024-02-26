import Check from "./helpers/Check";

function ApplicationTab() {
  return (
    <div className="p-4 transition duration-300 hover:scale-y-105">
      <div className="relative w-1/2 rounded-2xl rounded-l-[8px] border-l-[6px] border-[#076b34] p-4 shadow-2xl">
        <h2 className="text-lg font-semibold">
          İstanbul Kodluyor Bilgilendirme
        </h2>
        <p className="flex items-center">
          <Check />
          <span>İstanbul Kodluyor Başvuru Formu onaylandı.</span>
        </p>
        <p className="flex items-center">
          <Check />
          <span>İstanbul Kodluyor Belge Yükleme Formu onaylandı.</span>
        </p>
        <div className="absolute -right-[4px] top-[12px] rounded-l-full bg-[#076b34] px-2 py-1 text-sm font-light text-white">
          Kabul Edildi
        </div>
      </div>
    </div>
  );
}
export default ApplicationTab;
