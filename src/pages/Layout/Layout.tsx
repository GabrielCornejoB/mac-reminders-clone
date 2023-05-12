import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { Sidebar } from "../../features";
import s from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={s.wrapper}>
      <Toaster richColors />
      <Sidebar />
      <Outlet />
    </div>
  );
};
export default Layout;
