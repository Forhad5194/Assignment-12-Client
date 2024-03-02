import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SingUp = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { createUser, googleLogin } = useContext(AuthContext)
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const logUser = result.user;
                console.log(logUser);
                Swal.fire({
                    title: "join Successfully ",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
            })
        navigate(from, { replace: true });
    };

    const handleGoogle = (media) => {
        media()
            .then(res => console.log(res))
    }






    return (
        <div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Helmet

                    title="Neckle SingUp" />
                <div className="">
                    <div className="sm::flex justify-center items-center">
                        <h2 className="text-4xl text-center font-bold p-8">Pleae Create Account .. </h2>
                        <div className="border border-black p-8 w-[600px] ml-8 rounded-2xl mt-8">
                            <h2 className="text-xl text-center font-medium  ">Already have an account? <Link className="text-blue-500" to={'/Login'}>Login</Link></h2>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="flex justify-between items-center gap-5 w-[600px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" placeholder="First Name" name="name" {...register("name", { required: true })} className="input input-bordered w-[280px]" />
                                {errors.name && <span className="text-red-600 ">First name is Required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" placeholder="Last Name" name="last" {...register("last", { required: true })} className="input input-bordered w-[280px]" />
                                {errors.last && <span className="text-red-600 ">Last name is Required</span>}
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Email " name="email" {...register("email", { required: true })} className="input input-bordered w-[600px]" />
                            {errors.email && <span className="text-red-600 ">Email is Required</span>}


                        </div>
                        <div className="form-control">
                            <label className="label">

                            </label>
                            <input type="password" placeholder="Password " name="password" {...register("password", { required: true, minLength: 6, maxLength: 16, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/ })} className="input input-bordered w-[600px]" />
                            {errors.password?.type === 'required' && <span className="text-red-600 ">Password is Required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-600 ">Password mast be 6 character </span>}
                            {errors.password?.type === 'maxLength' && <span className="text-red-600 ">Password is under 16 character  </span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600  ">Password has an number one uppercase one small uppercase one spacal character   </span>}

                        </div>


                        <input className="btn btn-outline w-[600px] mx-auto mt-5 text-black" type="submit" value="Join " />
                    </form>
                    <div className="sm::flex justify-center items-center">
                        <h2 className="text-4xl text-center font-bold p-8">Pleae join with .. </h2>
                        <button onClick={() => handleGoogle(googleLogin)} className="btn btn-outline w-[600px] mx-auto ml-8 text-black">join With Google</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingUp;