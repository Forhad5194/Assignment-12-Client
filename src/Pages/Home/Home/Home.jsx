import AboutUs from "../AboutUs/AboutUs";
import Advertisement from "../Advertisement/Advertisement";
import Banner from "../Banner/Banner";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
           <Banner />
           <Advertisement />
           <Testimonials />
           <AboutUs />
        </div>
    );
};

export default Home;