import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import AdminLayout from "../layouts/AdminLayout";
import AdDashboardPage from "../pages/manager/dashboard/AdDashboardPage";
import AdProductPage from "../pages/manager/product/AdProductPage";
import AdUserPage from "../pages/manager/user/AdUserPage";
import CategoryPage from "../pages/manager/category/CategoryPage";
import PrivateRoute from "../components/PrivateRoute";
import { useLocalStorage } from "../hooks/useStotage";
import CategoryList from "../features/category/CategoryList";
import CategoryForm from "../features/category/CategoryForm";
import ProductList from "../features/product/ProductList";
import ProductForm from "../features/product/ProductForm";
import Login from "../features/auth/Login";
import SignUp from "../features/auth/SignUp";
import AuthLayout from "../layouts/AuthLayout";

const Routers = () => {
  const [user] = useLocalStorage("user", {});

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductPage />} />
          </Route>
          <Route
            path="/admin"
            element={
              <PrivateRoute
                isAllowed={
                  !!user &&
                  Object.keys(user).length > 0 &&
                  user.roles?.includes("admin")
                }
              >
                <AdminLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<AdDashboardPage />} />
            <Route path="dashboard" element={<AdDashboardPage />} />
            <Route path="products" element={<AdProductPage />}>
              <Route index element={<ProductList />} />
              <Route path="add" element={<ProductForm />} />
            </Route>
            <Route path="category" element={<CategoryPage />}>
              <Route index element={<CategoryList />} />
              <Route path="add" element={<CategoryForm />} />
            </Route>
            <Route
              path="users"
              element={
                <PrivateRoute
                  isAllowed={!!user && user?.permission?.includes("users")}
                  redirectPath="/admin/dashboard"
                >
                  <AdUserPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="/auth"
            element={
              <PrivateRoute
                isAllowed={!user || Object.keys(user).length === 0}
                redirectPath="/admin/dashboard"
              >
                <AuthLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<SignUp />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
