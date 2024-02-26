import { useDispatch, useSelector } from "react-redux";
import StyledButton from "../components/helpers/StyledButton";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";

import LoginHeader from "../components/LoginHeader";

import authService from "../services/authService";
import { authActions } from "../slices/authSlice";
import { userActions } from "../slices/userSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { OverlayLoader } from "../components/helpers/OverlayLoader/OverlayLoader";
import { Slide, ToastContainer, toast } from "react-toastify";

type FormFields = {
  email: string;
  password: string;
  name: string;
  lastName: string;
};

const LoginPage = () => {
  const { register, handleSubmit } = useForm<FormFields>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  console.log(isAuthenticated);
  const notify = () => toast.success("Giriş başarılı.");

  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const [isOpen, setOpen] = useState(false);
  // const loading = useSelector((state: RootState) => state.loading.requestCount);
  const handleLogin: SubmitHandler<FormFields> = (data: any) => {
    console.log("submitted");
    console.log(data);

    authService.login(data).then((response) => {
      // console.log(response);
      if (response.data?.token) {
        dispatch(authActions.addToken({ token: response.data.token }));
        dispatch(userActions.getUser());

        setTimeout(() => notify(), 500);
        setTimeout(() => navigate("/"), 3000);
      }
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <LoginHeader />
      <nav className="bg-black">
        <div className="flex w-full items-center justify-between p-4 text-white">
          <img src="/assets/tobetologobeyaz.png" className="w-40" />
          <ul className="flex justify-around space-x-8 p-2">
            <li>Biz Kimiz?</li>
            <li>Neler Sunuyoruz?</li>
            <li>Katalog</li>
            <li>Codecademy</li>
            <li>Tobeto'da Bu Ay</li>
          </ul>
          <div className="flex justify-between space-x-7">
            <StyledButton color="black" border onClick={() => setOpen(false)}>
              Giriş Yap
            </StyledButton>
            <StyledButton
              color="black"
              rainbow
              border
              onClick={() => setOpen(true)}
            >
              Ücretsiz Üye Ol
            </StyledButton>
          </div>
        </div>
      </nav>
      <main className="grid min-h-[640px] p-12">
        <div className="container mx-auto grid w-3/4 grid-cols-2 place-items-center space-x-12">
          <div className="rainbow-card flex w-3/4 justify-self-end p-2">
            {!isOpen && (
              <div className="login-card flex w-full flex-col items-center justify-center space-y-8 rounded-2xl bg-white p-8">
                <img src="/assets/tobetocolored.png" className="h-auto w-60" />
                <form
                  onSubmit={handleSubmit(handleLogin)}
                  className="flex w-full flex-col items-center justify-center space-y-6"
                >
                  <input
                    {...register("email", {
                      required: "Bu alanin doldurulmasi zorunludur.",
                    })}
                    type="text"
                    placeholder="E-mail adresiniz"
                    className="h-12 w-full rounded-xl bg-slate-200 p-4"
                  />
                  <input
                    {...register("password", {
                      required: "Bu alanin doldurulmasi zorunludur.",
                    })}
                    type="text"
                    placeholder="Şifreniz"
                    className="h-12 w-full rounded-xl bg-slate-200 p-4"
                  />

                  <StyledButton size="large">Giriş Yap</StyledButton>

                  <button>Şifremi Unuttum</button>
                </form>
                <p>
                  Henüz üye değil misin?{" "}
                  <button
                    className="font-semibold"
                    onClick={() => setOpen(!isOpen)}
                  >
                    Kayıt Ol
                  </button>
                </p>
              </div>
            )}
            {isOpen && (
              <div className="register-card flex h-auto w-full flex-col items-center justify-center space-y-8 rounded-2xl bg-white p-8">
                <img src="/assets/tobetocolored.png" className="h-auto w-60" />
                <h2 className="text-4xl font-bold">Hemen Kayit Ol</h2>
                <form
                  onSubmit={handleSubmit(handleLogin)}
                  className="flex w-full flex-col items-center justify-center space-y-6"
                >
                  <input
                    {...register("name", {
                      required: "Bu alanin doldurulmasi zorunludur.",
                    })}
                    type="text"
                    placeholder="Adini soyle bana"
                    className="h-12 w-full rounded-xl bg-slate-200 p-4"
                  />
                  <input
                    {...register("lastName", {
                      required: "Bu alanin doldurulmasi zorunludur.",
                    })}
                    type="text"
                    placeholder="Soyad"
                    className="h-12 w-full rounded-xl bg-slate-200 p-4"
                  />
                  <input
                    {...register("email", {
                      required: "Bu alanin doldurulmasi zorunludur.",
                    })}
                    type="text"
                    placeholder="E-mail adresiniz"
                    className="h-12 w-full rounded-xl bg-slate-200 p-4"
                  />
                  <input
                    {...register("password", {
                      required: "Bu alanin doldurulmasi zorunludur.",
                    })}
                    type="password"
                    placeholder="Şifreniz"
                    className="h-12 w-full rounded-xl bg-slate-200 p-4"
                  />

                  <StyledButton size="large">Giriş Yap</StyledButton>

                  <button>Şifremi Unuttum</button>
                </form>
                <p>
                  Zaten bir hesabın var mı?{" "}
                  <button
                    className="font-semibold"
                    onClick={() => setOpen(!isOpen)}
                  >
                    Giriş Yap
                  </button>
                </p>
              </div>
            )}
          </div>
          <div className="rainbow-card flex min-h-[450px] w-3/4 justify-self-start p-2">
            <div className="flex w-full flex-col items-center justify-center space-y-8 rounded-2xl bg-white p-8">
              <img src="/assets/iklogo.svg" className="h-auto w-60" />
              <span className="w-1/3 border-b-2 border-b-[#00b078]"></span>
              <p className="text-2xl font-bold">
                Aradığın <span className="text-[#00b078]">"</span>İş
                <span className="text-[#00b078]">"</span> Burada!
              </p>
              <StyledButton size="medium">Başvur</StyledButton>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-auto bg-black p-10">
        <div className="container mx-auto flex items-center justify-between text-white">
          <div>
            <img src="/assets/tobeto-logo-mini.png" className="h-7 w-32" />
          </div>
          <div>© 2024 Tobeto Platform Clone Project</div>
          <div>
            <ul className="login-footer flex justify-between space-x-4">
              <li>
                <a
                  href="https://www.facebook.com/tobetoplatform"
                  target="_blank"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                      stroke="#A628FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/tobeto_official/"
                  target="_blank"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                      stroke="#A628FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                      stroke="#A628FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M17.5 6.5H17.51"
                      stroke="#A628FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </li>

              <li>
                <a href="https://twitter.com/tobeto_platform" target="_blank">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z"
                      stroke="#A628FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/tobeto/"
                  target="_blank"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                      stroke="#A628FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M6 9H2V21H6V9Z"
                      stroke="#A628FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                      stroke="#A628FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default LoginPage;
