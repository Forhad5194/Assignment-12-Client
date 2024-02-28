
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";





const Login = () => {
    const { signInUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "User LogIn SuccessFull ",
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
                navigate(from, { replace: true });
            })



    }



    return (
        <div>
            <div className="hero ">
                <Helmet
                    title="Neckle Login"
                />
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="">
                        <div className="sm::flex justify-center items-center">
                            <h2 className="text-4xl text-center font-bold p-8">Pleae Login .. </h2>
                            <button className="btn btn-outline w-[600px] mx-auto ml-8 text-black">Login With Google</button>
                            <p className="text-xl text-center font-bold pt-8" >or</p>
                        </div>

                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="Email" className="input input-bordered w-[600px]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password " className="input input-bordered w-[600px]" />
                                <a href="#" className="label-text-alt link mt-5 link-hover">Forgot password?</a>
                            </div>

                            <input className="btn btn-outline w-[600px] mx-auto mt-5 text-black" type="submit" value="Login " />

                        </form>
                        <div className="border border-black p-8 w-[600px] ml-8 rounded-2xl mt-8">
                            <h2 className="text-xl text-center font-medium  ">Don’t have an account? <Link className="text-blue-500" to={'/SingUp'}>Join</Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;