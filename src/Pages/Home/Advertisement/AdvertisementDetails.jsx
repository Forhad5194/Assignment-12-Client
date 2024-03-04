import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Wishlist from "../../../component/Wishlist/Wishlist";

const AdvertisementDetails = () => {

    const { id } = useParams()
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/Card')
            .then(res => res.json())
            .then(data => {
                const details = data.find(card => card._id === id);
                setCard(details)
            })

    }, [id])

    return (
        <div>
            <div className=" mt-10  block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                        className="rounded-t-lg w-full"
                        src={card?.img}
                        alt=""
                    />
                </div>
                <div className="p-6">
                    <h5 className="mb-2 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {card?.price_range}
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {card?.Description}
                    </p>
                    <p className="text-base text-neutral-600 dark:text-neutral-200">
                        <p className="text-xl font-medium text-black">
                            {card?.location}
                        </p>
                    </p>
                    <p>{card?.verification_status}</p>
                </div>
                <div className="p-5">
                    <Wishlist />
                </div>

            </div>
        </div>
    );
};

export default AdvertisementDetails;