function SurveyTab() {
  return (
    (
        <div className="p-4">
          <div className="bg-[#e6e6e6] flex flex-col items-center rounded-xl">
            <img src="/public/notFound.svg" className="w-60 h-60" />
            <p className="text-[#6a359f] font-medium">Atanmış herhangi bir anketiniz bulunmamaktadır.</p>
          </div>
        </div>
      )
  );
}
export default SurveyTab;
