import { Link, Outlet } from "react-router-dom";
import Button from "../../../components/ui/Button";

const CategoryPage = () => {
  return (
    <div className="relative bg-white ">
      <h1 className="text-center text-5xl font-bold text-blue-700 mb-4 shadow-sm ">
        Management Categories
      </h1>
      <div className="absolute top-[80px] right-[200px]">
        <Link to="/admin/category/add">
          <Button name="ADD" />
        </Link>
      </div>
      <div className="mt-[5rem] mx-20">
        <Outlet />
      </div>
    </div>
  );
};

export default CategoryPage;
