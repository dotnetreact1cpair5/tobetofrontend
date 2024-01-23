const AssessmentCard = () => {
  return (
    <div className="flex flex-col items-center justify-around space-y-5 rounded-2xl bg-gradient-to-tr from-[#e37afe] to-[#3c0b8c] p-4 text-white">
      <h3 className="text-center text-2xl font-semibold">
        Yazılımda Başarı Testi
      </h3>
      <p className="text-xl">
        Çoktan seçmeli sorular ile teknik bilgini test et.
      </p>
      <span>&gt;&gt;&gt;</span>
    </div>
  );
};
export default AssessmentCard;
