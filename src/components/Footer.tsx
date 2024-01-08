function Footer() {
  return (
    <footer className="bg-[#9933ff] text-white py-5 h-[107.5px]">
      <div className="container mx-auto w-[1140px] h-[67.5px] flex justify-between items-center">
        <div className="logo">
          <a href="#">
            <img
              src="./public/tobetologowhite.png"
              alt=""
              className="w-30 h-5"
            />
          </a>
        </div>
        <div className="contact">
          <ul className="">
            <li>
              <a
                className="bg-white rounded-full py-2 px-5 text-black text-sm font-bold"
                href="#"
              >
                Bize Ulaşın
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
