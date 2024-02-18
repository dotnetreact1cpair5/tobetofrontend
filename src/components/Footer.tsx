function Footer() {
  return (
    <footer className="bottom-0 mt-auto h-[107.5px] w-full bg-[#9933ff] py-5 text-white">
      <div className="container mx-auto flex h-[67.5px] w-[1140px] items-center justify-between">
        <div className="logo">
          <a href="#">
            <img
              src="/assets/tobetologowhite.png"
              alt=""
              className="w-30 h-5"
            />
          </a>
        </div>
        <div className="contact">
          <ul className="">
            <li>
              <a
                className="rounded-full bg-white px-5 py-2 text-sm font-bold text-black"
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
