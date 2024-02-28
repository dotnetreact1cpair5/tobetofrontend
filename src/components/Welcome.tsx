import { useSelector } from "react-redux";
import { RootState } from "../store";

function Welcome() {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <section className="mt-12 py-5">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <h3 className="flex">
          <span className="text-4xl font-bold text-[#9933ff]">TOBETO</span>
          <span className="text-3xl font-normal">'ya hoş geldin</span>
        </h3>
        <h4 className="mb-5 mt-2 text-3xl">
          {user?.username}
        </h4>
        <p className="mt-[2em] text-2xl">
          Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin
          yanında!
        </p>
      </div>
    </section>
  );
}
export default Welcome;
