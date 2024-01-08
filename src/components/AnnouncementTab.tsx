function AnnouncementTab() {
  return (
    <div className="flex gap-6 p-8">
      <div className=" w-1/2 p-4 border-l-[6px] border-[#076b34] shadow-2xl rounded-l-[8px] rounded-2xl space-y-8">
        <div className="flex justify-between text-[#00956e] text-sm">
          <span>Duyuru</span>
          <span>İstanbul Kodluyor</span>
        </div>
        <h2 className="font-semibold">11 Ocak Kampüs Buluşması</h2>
        <div className="flex items-center justify-between text-zinc-400">
          <div className="">
            <span className="flex items-center justify-center gap-x-1">
              <img src="/public/date.svg" />
              <span>06.01.2024</span>
            </span>
          </div>
          <span>Devamını oku</span>
        </div>
      </div>
    </div>
  );
}
export default AnnouncementTab;
