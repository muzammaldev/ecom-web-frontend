
import React from "react";

type Props = {};

const Banner = (props: Props) => {
    return <div>
        <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 ">
            <img src="https://readymadeui.com/cardImg.webp" alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />
            <div className="min-h-[300px] relative  h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                <h2 className="sm:text-4xl text-2xl font-bold mb-6">Explore the World</h2>
                <p className="text-lg text-center text-gray-200">Embark on unforgettable journeys. Book your dream vacation today!</p>
                <a href="javascript:void(0)"
                    className="mt-8 bg-transparent text-white text-base font-semibold py-2.5 px-6 border-2 border-white rounded hover:bg-white hover:text-black transition duration-300 ease-in-out">
                    Book Now
                </a>
            </div>
        </div>
    </div>;
};

export default Banner;
