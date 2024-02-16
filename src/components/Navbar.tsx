import { NavLink } from "react-router-dom";
import tbtLogo from "/assets/tbtlogo.svg";
import { useState } from "react";
import { Dropdown } from "flowbite-react";
import { useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { authActions } from "../slices/authhSlice";
function Navbar() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="font-normal">
      <nav>
        <div className="flex h-[93px] items-center justify-between border-b-[1px] border-[#f8f3fb] p-4">
          <a href="">
            <img src="/assets/tobetocolored.png" alt="" className="w-40" />
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
          <div className="right flex items-center space-x-2">
            <a href="#">
              <img src={tbtLogo} alt="" className="w-6" />
            </a>

            <div className="user-menu relative">
              <button
                className="flex items-center justify-around space-x-4 rounded-full px-4 py-1 text-sm text-[#828282] ring-1 ring-zinc-100"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img
                  src="/assets/pfp.png"
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
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
              {isOpen && (
                <div className="absolute flex w-48 flex-col items-center justify-center space-y-3 rounded-md bg-[#93f] py-4 text-center text-sm font-normal text-zinc-100">
                  <button>Profil Bilgileri</button>
                  <hr className="w-full" />
                  <button onClick={() => dispatch(authActions.removeToken())}>
                    Oturumu Kapat
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
