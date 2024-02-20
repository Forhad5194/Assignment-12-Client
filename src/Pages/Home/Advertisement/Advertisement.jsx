import { useEffect } from "react";
import { useState } from "react";
import AdvertisementCard from "./AdvertisementCard";




const Advertisement = () => {

    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('Card.json')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])





    return (
        <div>
            <section>
                <h2 className="text-3xl font-bold text-center uppercase  p-8">Advertisement </h2>
            </section>
            <div className="grid sm:grid-cols md:grid-cols-2 lg:grid-cols-4 pt-5 pb-5  justify-center gap-5">
                {
                    item.map(item => <AdvertisementCard key={item._id} item={item} ></AdvertisementCard>)
                }
            </div>
        </div>
    );
};

export default Advertisement;