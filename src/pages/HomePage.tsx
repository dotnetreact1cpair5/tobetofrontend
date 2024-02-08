import { useDispatch, useSelector } from "react-redux";
import App from "../App";
import { RootState } from "../store";
import { useEffect } from "react";
import videoService from "../services/videoService";

const HomePage = () => {
  useEffect(() => {
    videoService.getAll().then();
    videoService.delete(1).then();
  });
  return (
    <>
      <App />
      {/* <button className="bg-amber-400">Click me</button> */}
    </>
  );
};
export default HomePage;
