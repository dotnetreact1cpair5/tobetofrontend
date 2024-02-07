import GenericButton from "./helpers/GenericButton";

const SlimCard = ({ children, toggleModal }: any) => {
  
  return (
    <div className="flex w-[514px] items-center justify-between rounded-full bg-gradient-to-r from-[#bda6fe] to-[#1d0b8c] px-4 py-2">
      <span>
      {children.status == false ?
        <img
          src="/public/assets/assessmenticon.png"
          className="h-12 w-12"
           onClick={toggleModal}
        /> : "toplam puan"}
      </span>
      {children.questionSetName}
      <GenericButton>{children.status == false ? "Başla" : "Raporu Görüntüle"}</GenericButton>
    </div>
  );
};
export default SlimCard;
