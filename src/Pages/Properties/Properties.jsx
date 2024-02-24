import { useEffect, useState } from "react";
import Banner from "../Home/Banner/Banner";
import PropertiesCard from "./PropertiesCard";

const Properties = () => {
    const [propertie, setPropertie] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/Properties')
            .then(res => res.json())
            .then(data => setPropertie(data))

    }, [])
    console.log(propertie);

    return (
        <div>
            <Banner />
            <h2 className="text-4xl font-bold uppercase text-center p-8" >  All Properties <hr /> </h2>
            <div className="grid sm:grid-cols md:grid-cols-2 lg:grid-cols-4 pt-5 pb-5  justify-center gap-5">
                {
                    propertie.map(propertie => <PropertiesCard key={propertie._id} propertie={propertie}></PropertiesCard>)
                }
            </div>
        </div>
    );
};

export default Properties;

