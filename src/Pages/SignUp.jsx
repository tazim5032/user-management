import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { IoEyeOffSharp } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import { useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAuth from "../Hooks/useAuth";
import SocialLogIn from "./SocialLogin";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile, logOut } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const from = '/login';

    const onSubmit = async (data) => {
        const { accountType } = data;
        const passwordRegex = /^.+$/
        if (!passwordRegex.test(data.password)) {
            Swal.fire({
                icon: 'error',
                // title: 'Password Format is not matched',
                text: "Password can't empty!",
            });
            return;
        }

        const imageFile = data.photo[0];
        const formData = new FormData();
        formData.append('image', imageFile);

        try {
            const res = await axiosPublic.post(image_hosting_api, formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });

            if (res.data.success) {
                const imageUrl = res.data.data.url;
                await createUser(data.email, data.password);
                await updateUserProfile(data.fullName, imageUrl);

               // let coin = 50;
               // let total_income = 0;
                // if (accountType === 'worker') {
                //     coin = 10;
                // }

                let status= 'active'

                const userInfo = {
                    name: data.fullName,
                    email: data.email,
                    status: status,
                };

                const dbResponse = await axiosPublic.post('/users', userInfo);
                if (dbResponse.data.insertedId) {
                    logOut();
                    navigate(from);
                    Swal.fire({
                        icon: 'success',
                        title: 'Congrats',
                        text: 'Registration Successful!',
                    });
                }
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops',
                text: 'User Already Exists or Image Upload Failed!',
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-6 sm:p-12 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Create an Account</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Full Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            className="input input-bordered w-full p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
                            {...register("fullName", { required: true })}
                        />
                        {errors.fullName && <span className="text-red-600">Full Name is Required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered w-full p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className="text-red-600">Email is Required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Photo</span>
                        </label>
                        <input
                            {...register('photo', { required: true })}
                            type="file"
                            name='photo'
                            className="file-input w-full max-w-xs"
                        />
                        {errors.photo && <span className="text-red-600">Photo is Required</span>}
                    </div>

                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Account Type</span>
                        </label>
                        <select
                            className="select select-bordered w-full p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
                            {...register("accountType", { required: true })}
                        >
                            <option value="">Select Account Type</option>
                            <option value="worker">Worker</option>
                            <option value="taskCreator">Task Creator</option>
                        </select>
                        {errors.accountType && <span className="text-red-600">Please select an Account Type</span>}
                    </div> */}

                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Password</span>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            className="input input-bordered w-full p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
                            {...register("password", { required: true })}
                        />
                        <span className="absolute top-12 right-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <IoEyeOffSharp /> : <FiEye />}
                        </span>
                        {errors.password && <span className="text-red-600">Password is Required</span>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Register
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <div className="mt-4 flex justify-center gap-4">
                        <SocialLogIn />
                    </div>
                </div>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-600 font-semibold hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
