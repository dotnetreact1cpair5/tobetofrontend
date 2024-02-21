function SurveyTab() {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center rounded-xl bg-[#e6e6e6]">
        {1 && (
          <div className="survey-container">
            <img src="/assets/notFound.svg" className="h-60 w-60" />
            <p className="font-medium text-[#6a359f]">
              Atanmış herhangi bir anketiniz bulunmamaktadır.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default SurveyTab;
