import { NavLink, Outlet } from "react-router-dom";
import EditProfileList from "../components/profile/EditProfileList";

const EditProfileLayout = () => {
  return (
    <div className="container mx-auto min-h-screen max-w-6xl">
      <div className="grid grid-cols-4">
        <div className="col-span-1 px-2 py-4">
          <EditProfileList />
        </div>
        <div className="col-span-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default EditProfileLayout;
