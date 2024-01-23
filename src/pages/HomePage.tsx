import { useDispatch, useSelector } from "react-redux";
import App from "../App";
import { RootState } from "../store";

const HomePage = () => {
  // const userState = useSelector(({ user }: RootState) => user.user);
  // const dispatch = useDispatch();
  // console.log(userState);
  return (
    <>
      <App />
      {/* <button className="bg-amber-400">Click me</button> */}
    </>
  );
};
export default HomePage;
