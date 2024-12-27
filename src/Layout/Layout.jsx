import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
