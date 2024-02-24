import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                       <img className='w-[544px] h-[352px]' src={LogImg} alt="" />
                    </div> */}
                    <div className="">
                        <div className="sm::flex justify-center items-center">
                            <h2 className="text-4xl text-center font-bold p-8">Pleae Login .. </h2>
                            <button className="btn btn-outline w-[600px] mx-auto ml-8 text-black">Login With Google</button>
                            <p className="text-xl text-center font-bold pt-8" >or</p>
                        </div>

                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email" className="input input-bordered w-[600px]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="Password " className="input input-bordered w-[600px]" />
                                <a href="#" className="label-text-alt link mt-5 link-hover">Forgot password?</a>
                            </div>

                            <input className="btn btn-outline w-[600px] mx-auto mt-5 text-black" type="button" value="Login " />

                        </form>
                        <div className="border border-black p-8 w-[600px] ml-8 rounded-2xl mt-8">
                            <h2 className="text-xl text-center font-medium  ">Don’t have an account? <Link className="text-blue-500">Join</Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;