import { Helmet } from "react-helmet-async";
import AboutUs from "../AboutUs/AboutUs";
import Advertisement from "../Advertisement/Advertisement";
import Banner from "../Banner/Banner";
import Neckle from "../Neckle/Neckle";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet
            
            title="Neckle Home"
            
            
            
            />
           <Banner />
           <Advertisement />
           <Testimonials />
           <AboutUs />
           <Neckle />
        </div>
    );
};

export default Home;