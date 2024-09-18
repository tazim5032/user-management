import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const registrationDate = new Date(); // Use Date object
    const info = {
      name: data.name,
      email: data.email,
      password: data.pin,
      status: "active",
      registrationDate: registrationDate, // Store as Date object
    };

    try {
      const { data } = await axiosPublic.post("/users", info);
      if (data.message === "exist") {
        return Swal.fire({
          icon: "error",
          text: "This Email already exists. Choose another email!",
        });
      }
      Swal.fire({
        icon: "success",
        text: "Registration Successful",
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 lg:p-10">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6 lg:p-10 space-y-6">
        <p className="text-3xl lg:text-5xl font-bold text-center text-gray-800 mb-6">
          Register
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 grid gap-4"
        >
          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input border p-4 rounded-xl w-full"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Name Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input border p-4 rounded-xl w-full"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter Password</span>
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
              <span className="text-red-500 text-sm">{errors.pin.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-control">
            <button
              type="submit"
              className="btn btn-primary text-white text-xl bg-green-600 p-4 rounded-xl hover:bg-black w-full"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Login Redirect */}
        <p className="text-center mt-5 text-lg">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-600 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
