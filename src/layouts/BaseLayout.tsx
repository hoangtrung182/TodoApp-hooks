import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const BaseLayout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default BaseLayout;
