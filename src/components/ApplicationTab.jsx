import Check from "./Check";

function ApplicationTab() {
  return (
    <div className="p-4">
      <div className="relative w-1/2 p-4 border-l-[6px] border-[#076b34] shadow-2xl rounded-l-[8px] rounded-2xl">
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
        <div className="absolute text-sm font-light text-white bg-[#076b34] top-[12px] -right-[4px] py-1 px-2 rounded-l-full">
          Kabul Edildi
        </div>
      </div>
    </div>
  );
}
export default ApplicationTab;
