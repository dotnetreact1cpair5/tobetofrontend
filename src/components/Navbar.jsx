import { NavLink } from "react-router-dom";
import tbtLogo from "/tbtlogo.svg";
import { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="font-normal">
      <nav>
        <div className="flex justify-between items-center p-4 border-b-[1px] border-[#f8f3fb] h-[93px]">
          <a href="">
            <img src="../public/tobetocolored.png" alt="" className="w-40" />
          </a>
          <ul className="flex space-x-7">
            <li>
              <NavLink to="/">Ana Sayfa</NavLink>
            </li>
            <li>
              <NavLink to="/profilim">Profilim</NavLink>
            </li>
            <li>
              <NavLink to="/degerlendirmeler">Değerlendirmeler</NavLink>
            </li>
            <li>
              <NavLink to="/katalog">Katalog</NavLink>
            </li>
            <li>
              <NavLink to="/takvim">Takvim</NavLink>
            </li>
            <li>
              <NavLink to="/">İstanbul Kodluyor</NavLink>
            </li>
          </ul>
          <div className="right flex space-x-2 items-center">
            <a href="#">
              <img src={tbtLogo} alt="" className="w-6" />
            </a>
            <button
              className="user-menu relative flex items-center justify-around space-x-4 px-4 py-1 text-[#828282] text-sm rounded-full ring-1"
              onClick={() => setIsOpen(true)}
            >
              <img
                src="../public/pfp.png"
                alt=""
                className="w-10 rounded-full"
              />
              <span>Efe Tekce</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </div>
          {isOpen && <div className="absolute bg-teal-400">abc</div>}
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
