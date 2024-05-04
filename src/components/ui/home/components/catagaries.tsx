

import Image from "next/image";
import React from "react";

type Props = {};


const CATAGARIES = [
    {
        imgUrl: '/images/catagaries-1.jpg',
        desc: 'Art Easels'
    },
    {
        imgUrl: '/images/catagaries-2.jpg',
        desc: 'Fashion'
    },
    {
        imgUrl: '/images/catagaries-3.jpg',
        desc: 'Jeckets'
    },
    {
        imgUrl: '/images/catagaries-4.jpg',
        desc: 'Suits'
    },
    {
        imgUrl: '/images/catagaries-5.jpg',
        desc: 'SmartWatches'
    },
    {
        imgUrl: '/images/catagaries-6.jpg',
        desc: 'T-Shirts'
    },
]


const Catagaries = (props: Props) => {
    return <div className="container mx-auto max-w-screen-lg py-16 text-center px-10">
        <h1 className="text-xl font-bold mb-10 pb-2 border-b border-slate-500">Catagaries</h1>
        <div className="grid grid-cols-6 gap-3 max-sm:gap-5 max-xl:grid-cols-3 max-sm:grid-cols-2">
            {
                CATAGARIES.map((items, index) => (
                    <div className=" flex flex-col justify-center items-center">
                        <Image className="rounded-full" width={120} height={120} src={items.imgUrl} alt={""} />
                        <p className="pt-3 font-bold max-sm:text-xs">{items.desc}</p>
                    </div>
                ))
            }
        </div>
    </div>;
};

export default Catagaries;
