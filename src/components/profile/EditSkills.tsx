import GenericButton from "../helpers/GenericButton";

const EditSkills = () => {
  return (
    <form className="form flex flex-col">
      <div className="input-container grid grid-cols-4 place-items-center gap-4 p-12">
        <div className="col-span-4">
          <label htmlFor="">Yetkinlik</label>
          <select className="rounded-lg">
            <option value="">qwe</option>
          </select>
        </div>
      </div>
      <GenericButton className="w-1/4 place-self-center bg-violet-500 text-white">
        Kaydet
      </GenericButton>
    </form>
  );
};
export default EditSkills;
