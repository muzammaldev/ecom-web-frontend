"use client"
import { getAllProducts } from "@/utils/apis";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

interface Product {
    id: number;
    src: string
    name: string;
    description: string
    price: number
    discount: number

}

const ForYouProducts = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: () => getAllProducts(),
        refetchOnWindowFocus: true,
        notifyOnChangeProps: ['data', 'error']
    });

    return <div className="container mx-auto max-w-screen-xl text-center px-10">
        <h1 className="text-xl font-bold mb-10 pb-2 border-b border-slate-500">Just For You</h1>
        {
            isLoading ? 'Loading....' : (
                <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                    {data?.data.map((product: Product) => (
                        <div key={product.id} className="text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg block mx-auto" src={product.src} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {product.name}
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {product.description}
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Read more
                                    <svg
                                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            )
        }


    </div>;
};

export default ForYouProducts;
