import StarRating from "../../component/StarRating/StarRating";

const Reviwes = () => {
    return (
        <div>
            <h2 className="text-2xl font-medium text-center p-8 uppercase text-black">please write your reviwe for this properties. </h2>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    Please Click.
                    <StarRating  />
                </div>
                <div className="collapse-content">
                    <form className="">
                        <div className="form-control mt-12 ">
                            <textarea className="textarea textarea-ghost" placeholder="Title"></textarea>
                        </div>
                        <div className="form-control mt-12 ">
                            <textarea className="textarea textarea-ghost" placeholder="Share Your Experience"></textarea>
                        </div>
                        <input className="btn btn-outline w-full font-bold text-xl btn-success uppercase mt-12" type="submit" value={'post'} />
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