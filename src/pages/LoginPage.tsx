const LoginPage = () => {
  return (
    <div className="min-h-screen">
      <header></header>
      <nav></nav>
      <main className="grid grid-cols-2 text-center">
        <div className="flex flex-col items-center justify-center bg-teal-300 p-12">
          <form action="" className="flex flex-col items-center justify-center">
            <input type="text" placeholder="E-mail adresiniz" />
            <input type="text" placeholder="Şifreniz" />
            <button>Giriş Yap</button>
            <button>Şifremi Unuttum</button>
          </form>
          <span>Henüz üye değil misin? Kayıt Ol</span>
        </div>
        <div></div>
      </main>
      <footer></footer>
    </div>
  );
};
export default LoginPage;
