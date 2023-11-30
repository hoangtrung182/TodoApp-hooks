import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AuthForm from "../../features/auth/AuthForm";
import Login from "../../features/auth/Login";
import SignUp from "../../features/auth/SignUp";

const AuthRouter = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Routes>
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default AuthRouter;
