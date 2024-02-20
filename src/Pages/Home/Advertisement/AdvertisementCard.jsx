/* eslint-disable react/prop-types */

const AdvertisementCard = ({ item }) => {

    const { img, location, price_range, verification_status } = item;
    return (
        <div>
            <div className="card w-70 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {location}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>${price_range}</p>
                    <p className="text-green-500">{verification_status}</p>
                    <div className="card-actions justify-end">
                         <input className="btn btn-outline btn-success" type="button" value="Lrean More" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertisementCard;


