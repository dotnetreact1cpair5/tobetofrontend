import GenericButton from "./helpers/GenericButton";
const LoginHeader = () => {
  return (
    <header>
      <div className="bg-[#1e0f41] p-4">
        <div className="container mx-auto flex max-w-6xl items-center justify-between">
          <img src="/assets/iklogolight.svg" className="w-40" />
          <h3 className="text-2xl font-bold text-white">
            Aradığın <span className="text-[#00b078]">"</span>İş
            <span className="text-[#00b078]">"</span> Burada!
          </h3>

          <GenericButton className="bg-green-400 px-2 text-white">
            Başvur
          </GenericButton>
        </div>
      </div>
    </header>
  );
};
export default LoginHeader;
