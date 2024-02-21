import neckleImg from '../../../assets/reviewer/Neckle.jpg'
const Neckle = () => {
    return (
        <section>
            <div className='flex justify-between items-center gap-5'>

                <div className='w-1/2 '>

                    <img className='rounded-xl' src={neckleImg} alt="" />


                </div>


                <div className='w-1/2 p-8 mb-8'>
                    <p className='text-sm font-normal text-yellow-500 p-4'>(Since-1994)</p>
                    <h2 className='text-2xl font-bold text-black p-4'>Get To Know About Neckle</h2>
                    <p className='text-sm font-normal text-black p-4'>Welcome to our Neckle!
                        We re thrilled to have you join our community of automotive enthusiasts and professionals. Whether you re a passionate driver, a car owner, or someone who loves all things automotive, you ve come to the right place.</p>
                    <div className="collapse bg-white hover:bg-base-300">
                        <input type="radio" name="my-accordion-1" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Home For Sales?
                        </div>
                        <div className="collapse-content">
                            <p>This sector focuses on properties used for residential.</p>
                        </div>
                    </div>
                    <div className="collapse bg-white hover:bg-base-300">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">
                        High Quality Property?
                        </div>
                        <div className="collapse-content">
                            <p>This sector focuses on properties used for residential.</p>
                        </div>
                    </div>

                </div>




            </div>
        </section>
    );
};

export default Neckle;