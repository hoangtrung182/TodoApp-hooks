import { ToastContainer, toast } from "react-toastify";
import { IUser } from "../../common/types";
import { useAuthMutations } from "../../hooks/useAuthMutations";
import backgroundImage from "../../assets/img/cover-img.jpg";
import Error from "../../components/Error";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    form: {
      handleSubmit,
      register,
      formState: { errors },
    },
    onSubmit,
  } = useAuthMutations({
    action: "LOGIN",
    onSuccess: () => {
      toast.success("Login successfull", {
        autoClose: 3000,
        position: "top-center",
        theme: "colored",
      });
      // setTimeout(() => navigate("/admin"));
    },
  });

  const onHandleSubmit = (value: IUser) => {
    onSubmit(value);
  };

  return (
    <div
      className="relative w-full h-full bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className={`absolute top-[50%] left-[50%] w-[350px] ${
          errors ? "h-[325px]" : "h-[285px]"
        }  rounded-md overflow-hidden bg-gray-300 mt-[-190px] mr-0 mb-0 ml-[-175px]`}
      >
        <h2 className="w-full leading-[50px] text-center text-2xl text-white border-b-2 ">
          Login Form
        </h2>
        <form className="p-10 w-full" onSubmit={handleSubmit(onHandleSubmit)}>
          <div
            className={`flex flex-wrap items-center flex-1 leading-[32px] relative min-w-0 ${
              errors.email ? "border border-red-600 mb-1" : "mb-5"
            }`}
          >
            <div className="inline-flex w-full items-stretch">
              <div className=" bg-white inline-flex relative items-center min-h-full justify-center rounded-l-sm px-5 whitespace-nowrap border-r-2 border-gray-300">
                <span className=" text-inherit bg-transparent border-transparent">
                  <i className="fa-regular fa-user"></i>
                </span>
              </div>
              <div className="inline-flex grow items-center justify-center px-2 bg-white shadow-gray-300 rounded-r-sm">
                <input
                  type="text"
                  className={`w-full grow text-gray-500 text-sm p-0 mb-[2px] box-border outline-none `}
                  placeholder="username"
                  {...register("email")}
                  value="admin@gmail.com"
                />
              </div>
            </div>
          </div>
          {errors.email && <Error error={errors.email.message!} />}
          <div
            className={`flex flex-wrap items-center flex-1 leading-[32px] relative min-w-0 ${
              errors.email ? "border border-red-600 mb-1" : "mb-5"
            }`}
          >
            <div className="inline-flex w-full items-stretch">
              <div className=" bg-white inline-flex relative items-center min-h-full justify-center rounded-l-sm px-5 whitespace-nowrap border-r-2 border-gray-300">
                <span className=" text-inherit bg-transparent border-transparent">
                  <i className="fa-solid fa-lock"></i>
                </span>
              </div>
              <div className="inline-flex grow items-center justify-center px-2 bg-white shadow-gray-300 rounded-r-sm">
                <input
                  type="password"
                  className="w-full grow text-gray-500 text-sm p-0 mb-[2px] box-border outline-none"
                  placeholder="password"
                  {...register("password")}
                  value="anhtrung"
                />
              </div>
            </div>
          </div>
          {errors.password && (
            <Error error={errors.password.message!} size="8px" />
          )}
          <div className="text-center bg-blue-500 mb-2">
            <button
              type="submit"
              className="w-full h-[36px] text-white hover:shadow-md hover:bg-blue-400"
            >
              Login
            </button>
          </div>
          <p className="text-sm text-white leading-7">
            Tips: You should type exactly one of the following
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
