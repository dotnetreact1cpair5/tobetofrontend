import GenericButton from "../helpers/GenericButton";

const EditAcademicInfo = () => {
  return (
    <form className="form flex flex-col">
      <div className="input-container grid grid-cols-4 place-items-center gap-4 p-12">
        <div className="col-span-2">
          <label htmlFor="">Eğitim Durumu*</label>
          <input type="text" />
        </div>

        <div className="col-span-2">
          <label htmlFor="">Bölüm*</label>
          <input type="text" />
        </div>
        <div className="col-span-2">
          <label htmlFor="">Üniversite*</label>
          <select
            name="Cities"
            id=""
            className="rounded-xl transition duration-300 focus:border-0 focus:ring-4 focus:ring-purple-400"
          >
            <option value="">a</option>
          </select>
        </div>
        <div className="col-span-2">
          <label htmlFor="">Başlangıç Yılı*</label>
          <select
            name="Cities"
            id=""
            className="rounded-xl transition duration-300 focus:border-0 focus:ring-4 focus:ring-purple-400"
          >
            <option value="">a</option>
          </select>
        </div>
        <div className="col-span-2">
          <label htmlFor="">Başlangıç Yılı*</label>
          <select
            name="Cities"
            id=""
            className="rounded-xl transition duration-300 focus:border-0 focus:ring-4 focus:ring-purple-400"
          >
            <option value="">a</option>
          </select>
        </div>
      </div>
      <GenericButton className="w-1/4 place-self-center bg-violet-500 text-white">
        Kaydet
      </GenericButton>
    </form>
  );
};
export default EditAcademicInfo;
