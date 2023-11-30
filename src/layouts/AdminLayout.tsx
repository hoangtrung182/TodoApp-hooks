import { Outlet, redirect, useNavigate } from "react-router-dom";
import AdSidebar from "../components/AdSidebar";
import Header from "../components/Header";
import { stateContext } from "../context/header-sidebar";
import { useContext } from "react";
import Tags from "../components/Tags";

const AdminLayout = () => {
  const { isCollapse } = useContext(stateContext);
  return (
    <div className="w-full h-full overflow-hidden font-custom">
      <Header />
      <AdSidebar />
      <main
        className={`absolute right-0 ${
          isCollapse
            ? "left-[65px] transition-width ease-in-out duration-500"
            : "left-[250px] transition-width ease-in-out duration-500"
        } top-[70px] bottom-0 pb-7 bg-slate-200`}
      >
        <Tags />
        <div className="w-auto h-full p-[10px] overflow-y-hidden box-border ">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
