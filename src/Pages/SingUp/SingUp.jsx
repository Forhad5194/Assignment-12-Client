import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SingUp = () => {
    return (
        <div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Helmet 
                
                title="Neckle SingUp"/>
                <div className="">
                    <div className="sm::flex justify-center items-center">
                        <h2 className="text-4xl text-center font-bold p-8">Pleae Create Account .. </h2>
                        <div className="border border-black p-8 w-[600px] ml-8 rounded-2xl mt-8">
                            <h2 className="text-xl text-center font-medium  ">Already have an account? <Link className="text-blue-500" to={'/Login'}>Login</Link></h2>
                        </div>
                    </div>

                    <form className="card-body">
                        <div className="flex justify-between items-center gap-5 w-[600px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" placeholder="First Name" className="input input-bordered w-[280px]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" placeholder="Last Name" className="input input-bordered w-[280px]" />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Email " className="input input-bordered w-[600px]" />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                               
                            </label>
                            <input type="text" placeholder="Password " className="input input-bordered w-[600px]" />
                            
                        </div>

                        <input className="btn btn-outline w-[600px] mx-auto mt-5 text-black" type="button" value="Join " />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default SingUp;