import { useForm } from "react-hook-form";
import StarRating from "../../component/StarRating/StarRating";
import { AxiosSecure } from "../../hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Reviwes = () => {
    const { register, handleSubmit, } = useForm()
    const [ratings, setRatings] = useState()
    const onSubmit = (data) => {
        setRatings(data)
    }
   
    const { user } = useContext(AuthContext)
    const handleRating = () => {
        const addedRating = {
            email: user.email,
            ratings



        }

        AxiosSecure.post('/rating', addedRating)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Thank your for your feedback.",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    

                }
            })


    }





const [rating , setRating] = useState({})

useEffect( () => {
    fetch('http://localhost:5000/rating')
    .then(res => res.json())
    .then(data => {
        setRating(data)
    })
} , [])






    return (
        <div>

            <h2 className="text-2xl font-medium text-center p-8 uppercase text-black">please write your reviwe for this properties. </h2>
            <p className=" text-xl font-bold text-black uppercase pb-8">Previwes feedback: {rating.length}  </p>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    Please Click.
                    <StarRating />
                </div>
                <div className="collapse-content">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="form-control mt-12 ">
                            <textarea name="title" {...register("title", { required: true })} className="textarea  textarea-ghost" placeholder="Title"></textarea>
                        </div>
                        <div className="form-control mt-12 ">
                            <textarea name="reviwes" {...register("reviwes", { required: true })} className="textarea textarea-ghost" placeholder="Share Your Experience"></textarea>
                        </div>
                        <input onClick={handleRating} className="btn btn-outline w-full font-bold text-xl btn-success uppercase mt-12" type="submit" value={'post'} />
                    </form>

                </div>
            </div>
            <div className="collapse collapse-arrow bg-white mb-10">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">

                </div>
                <div className="collapse-content">

                </div>
            </div>


        </div>
    );
};

export default Reviwes;