import GenericButton from "../helpers/GenericButton";
import { AnimatePresence, motion } from "framer-motion";

const EditCertificates = () => {
  const transition = {
    duration: 1,
  };

  const slideTransition = {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={slideTransition}
      transition={transition}
    >
      {/* <form className="form flex flex-col">
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
      </form> */}
      <div className="flex flex-col justify-center p-24">
        <div className="flex cursor-pointer flex-col items-center justify-center space-y-4 bg-purple-100 p-12 outline-dashed outline-2 outline-purple-400">
          <svg
            width="78"
            height="78"
            viewBox="0 0 78 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2"
              width="74"
              height="74"
              rx="37"
              fill="#F1E3FF"
              stroke="#9933FF"
              stroke-width="4"
              stroke-dasharray="2 2"
            ></rect>
            <path
              d="M47 45L40 37L33 45"
              stroke="#9933FF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M40 37V53"
              stroke="#9933FF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M56.261 51C58.0342 50.0324 59.4349 48.5014 60.2422 46.6485C61.0495 44.7956 61.2173 42.7265 60.7191 40.7675C60.221 38.8086 59.0852 37.0715 57.4912 35.8304C55.8971 34.5892 53.9355 33.9148 51.9159 33.9135H49.6252C49.0749 31.7831 48.0493 29.8053 46.6254 28.1288C45.2015 26.4522 43.4164 25.1206 41.4044 24.234C39.3923 23.3474 37.2056 22.9289 35.0086 23.0099C32.8117 23.0909 30.6616 23.6693 28.7202 24.7018C26.7788 25.7342 25.0964 27.1937 23.7997 28.9705C22.5029 30.7474 21.6254 32.7953 21.2333 34.9605C20.8411 37.1256 20.9444 39.3515 21.5355 41.4709C22.1265 43.5904 23.1899 45.5481 24.6457 47.1969"
              stroke="#9933FF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <p className="text-stone-500">Dosya Yükle</p>
        </div>
      </div>
    </motion.div>
  );
};
export default EditCertificates;
