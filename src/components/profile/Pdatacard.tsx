const Pdatacard = () => {
  return (
    <div className="flex flex-col justify-around space-y-8 rounded-2xl p-4 shadow-2xl">
      <div className="">
        <img src="/assets/pfp.png" className="mx-auto h-32 w-32 rounded-full" />
      </div>
      <div className="space-y-4">
        <div className="flex space-x-4">
          <img src="/assets/cv-name.svg" />
          <div className="flex flex-col">
            <h5 className="text-xs">Telefon Numarası</h5>
            <span className="font-semibold">data</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <img src="/assets/cv-date.svg" />
          <div className="flex flex-col">
            <h5 className="text-xs">Telefon Numarası</h5>
            <span className="font-semibold">data</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <img src="/assets/cv-mail.svg" />
          <div className="flex flex-col">
            <h5 className="text-xs">Telefon Numarası</h5>
            <span className="font-semibold">data</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <img src="/assets/cv-phone.svg" />
          <div className="flex flex-col">
            <h5 className="text-xs">Telefon Numarası</h5>
            <span className="font-semibold">data</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pdatacard;
