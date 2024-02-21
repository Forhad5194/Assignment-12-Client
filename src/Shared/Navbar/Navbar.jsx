import { NavLink } from "react-router-dom";
import logoImg from '../../assets/logo/logo.png'


const Navbar = () => {

    const navItem = <>
        <NavLink>Home</NavLink>
        <NavLink>All Properties</NavLink>
        <NavLink>Dashbord</NavLink>
        <NavLink>LogIn</NavLink>
    </>



    return (
        <div>
            <div className="navbar fixed z-30 bg-opacity-10 max-w-screen-xl mx-auto bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                   <NavLink>
                    <img src={logoImg} alt="" />
                   </NavLink>
                </div>
                <div className="navbar-end text-black font-medium hidden lg:flex">
                    <ul className="menu   gap-5 text-sm font-normal menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;