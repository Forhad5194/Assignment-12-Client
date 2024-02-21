import AboutUs from "../AboutUs/AboutUs";
import Advertisement from "../Advertisement/Advertisement";
import Banner from "../Banner/Banner";
import Neckle from "../Neckle/Neckle";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
           <Banner />
           <Advertisement />
           <Testimonials />
           <AboutUs />
           <Neckle />
        </div>
    );
};

export default Home;