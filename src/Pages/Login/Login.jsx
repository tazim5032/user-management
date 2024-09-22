import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { setEmail } from "../../utils/setStorage";

const Login = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const info = {
      email: data.email,
      password: data.pin,
    };
    try {
      const { data } = await axiosPublic.get(
        `/userLogin?email=${info.email}&password=${info.password}`
      );

      if (data.message == "blocked") {
        return Swal.fire({
          icon: "error",
          text: "Your Account is blocked",
        });
      }

      if (data.message == "matched") {
        setEmail(info.email);
        setUser(info.email);
        Swal.fire({
          icon: "success",
          text: "login successfull",
        });
        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          text: "User not found",
        });
      }
    } catch (error) {
      alert("something went wrong!");
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 lg:p-10">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6 lg:p-10 space-y-6">
        <p className="text-3xl lg:text-6xl font-bold text-center mb-10">
          Login
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 border-2 p-2 lg:p-10 rounded-xl"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input border p-4 rounded-xl w-full"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input border p-4 rounded-xl w-full"
              {...register("pin", {
                required: "Password is required",
              })}
            />
            {errors.pin && (
              <span className="text-red-500">{errors.pin.message}</span>
            )}
          </div>

          <div className="form-control">
            <button
              type="submit"
              className="btn btn-primary text-white text-xl bg-green-600 p-4 rounded-xl hover:bg-black w-full"
            >
              Submit
            </button>
          </div>
        </form>
        <p className="text-center mt-5 text-xl">
          Don't Have an Account ?{" "}
          <Link to={"/signup"} className="text-blue-600 font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
