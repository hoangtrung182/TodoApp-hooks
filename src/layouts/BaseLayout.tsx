import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const BaseLayout = () => {
  return (
    <div className="w-full h-full overflow-hidden font-custom">
      <header>
        <Navbar />
      </header>
      <main className="relative w-auto p-[10px] box-border bg-gray-300">
        <Outlet />
      </main>
    </div>
  );
};

export default BaseLayout;
