import { useDispatch, useSelector } from "react-redux";
import App from "../App";
import { RootState } from "../store";
import { useEffect } from "react";
// import videoService from "../services/videoService";
import authService from "../services/authService";
import { AnimatePresence, motion } from "framer-motion";
import { userSlice } from "../slices/userSlice";
const HomePage = () => {
  const userId = useSelector((state: RootState) => {
    return state.user.user?.id;
  });

  // const user = useSelector((state: RootState) => {
  //   return state.user;
  //   // wait
  // });
  // console.log(user);

  // const loading = useSelector((state: RootState) => {
  //   return state.user.isLoading;
  // });

  // console.log(loading);
  console.log(userId);

  // useEffect(() => {
  //   // videoService.getAll().then();
  //   // videoService.delete(1).then();
  //   const id = authService.getUserInfo();
  //   console.log(id);
  // }, []);

  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <App />
    </motion.div>
  );
};
export default HomePage;
