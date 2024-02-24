/* eslint-disable react/prop-types */


const PropertiesCard = ({ propertie }) => {
    const { image, property_title, property_location, agent_name, agent_image, verification_status, price_range } = propertie;
    return (
        <div>
            <div className="card w-70 h-[550px] bg-base-100 shadow-xl">
                <figure><img className="w-[305px] h-[204px]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {property_title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{property_location}</p>
                    <div className="avatar flex  items-center gap-3">
                        <div className="w-8 mt-5 rounded-full ring ring-green-500  ring-offset-2">
                            <img src={agent_image} />
                        </div>
                            <h4 className="mt-4 font-medium">{agent_name}</h4>
                    </div>
                            <p className=" font-medium"> Status: {verification_status}</p>
                            <p className="font-medium"> {price_range}</p>
                    <div className="card-actions justify-end">
                        <input className="btn btn-outline btn-success" type="button" value="Buy Now " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertiesCard;