
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
import useWishlist from "../../hooks/useWishlist/useWishlist";


const Wishlist = () => {
    const [, refetch] = useWishlist()
    const AxiosSecure = useAxiosSecure()
        const [propertie , setPropertie] = useState()
    useEffect( () => {
        fetch('http://localhost:5000/propertie')
        .then(res => res.json())
        .then(data => {
            setPropertie(data)
        })
    } , [])






    const { user } = useContext(AuthContext)


    const handleAddtoCard = (propertie) => {
        const { image , property_title, property_location,agent_name, agent_image, price_range} =propertie;
        // console.log(propertie, user.email, propertie);

        const addedCard = {
            email: user.email,
            image,
            property_title, 
            property_location,
            agent_name, 
            agent_image,
            price_range
        }

        AxiosSecure.post('/addcard' , addedCard)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "successfully added Wishlist",
                        showConfirmButton: false,
                        timer: 1500
                      });

                      refetch()

                }
            })
    }
    
return (
        <div className="flex sm:flex-auto">
            <button onClick={() => handleAddtoCard(propertie)} className="btn btn-outline w-full font-bold text-xl btn-success">Add to wishlist</button>
            
        </div>
    );
};

export default Wishlist;