

const AboutUs = () => {
    return (
        <div >
            <h2 className="text-4xl font-bold text-center p-8 pt-8 ">About Us </h2>
            
            <div>
                <div className="bg-black rounded-xl mb-10 opacity-70 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-white leading-7 ">
                                    Transactions every 24 hours
                                </dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                                    44 million
                                </dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-white leading-7 ">
                                    Assets under holding
                                </dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                                    $119 trillion
                                </dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-white leading-7 ">
                                    New users annually
                                </dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                                    46,000
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;