import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Reviwes from "../Reviwes/Reviwes";

const PropertieDetails = () => {
    const { id } = useParams()
    const [propertie, setPropertie] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/propertie')
            .then(res => res.json())
            .then(data => {
                const details = data.find(propertie => propertie._id === id);
                setPropertie(details)
            })

    }, [id])
    return (

        <div>
            <Helmet>
                <title>Properties</title>
            </Helmet>

            <>

                <div className=" mt-10  block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="rounded-t-lg w-full"
                            src={propertie?.image}
                            alt=""
                        />
                    </div>
                    <div className="p-6">
                        <h5 className="mb-2 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            {propertie?.property_title}
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            {propertie?.Description}
                        </p>
                        <p className="text-base text-neutral-600 dark:text-neutral-200">
                            <p className="text-xl font-medium text-black">
                                {propertie?.price_range}
                            </p>
                        </p>
                        <div className="avatar mt-5 flex  items-center gap-3">
                            <div className="w-8 mt-5 rounded-full ring ring-green-500  ring-offset-2">
                                <img src={propertie?.agent_image} />
                            </div>
                            <h4 className="mt-4 font-medium">{propertie?.agent_name}</h4>
                        </div>
                    </div>
                    <div className="p-5">
                        <button className="btn btn-outline w-full font-bold text-xl btn-success">Add to wishlist</button>
                    </div>

                </div>


                <Reviwes />

            </>

        </div>
    );
};

export default PropertieDetails;