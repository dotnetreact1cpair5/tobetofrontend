import GenericButton from "../helpers/GenericButton";

const EditExperiences = () => {
  const transition = {
    duration: 1,
  };

  const slideTransition = {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
  };
  return (
    <form className="form flex flex-col">
      <div className="input-container grid grid-cols-4 place-items-center gap-4 p-12">
        <div className="col-span-2">
          <label htmlFor="">Kurum Adı*</label>
          <input type="text" />
        </div>
        <div className="col-span-2">
          <label htmlFor="">Pozisyon*</label>
          <input type="text" />
        </div>
        <div className="col-span-2">
          <label htmlFor="">Sektör*</label>
          <input type="text" />
        </div>
        <div className="col-span-2">
          <label htmlFor="">Şehir*</label>
          <select
            name="Cities"
            id=""
            className="rounded-xl transition duration-300 focus:border-0 focus:ring-4 focus:ring-purple-400"
          >
            <option value="">a</option>
          </select>
        </div>
        <div className="col-span-2">
          <label htmlFor="">İş Başlangıcı*</label>
          <input type="date" />
        </div>
        <div className="col-span-2">
          <label htmlFor="">İş Bitiş*</label>
          <input type="date" placeholder="gg/aa/yyyy" />
        </div>
        <div className="col-span-4">
          <label htmlFor="">İş Açıklaması</label>
          <textarea className="max-h-[200px] rounded-lg" />
        </div>
      </div>
      <GenericButton className="w-1/4 place-self-center bg-violet-500 text-white">
        Kaydet
      </GenericButton>
    </form>
  );
};
export default EditExperiences;
