
import { userSignup } from "@/utils/apis";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

type Props = {
    setSteps: (steps: number) => void;
};

type signupData = {
    name: string
    email: string
    password: string
}

const Signup = ({ setSteps }: Props) => {

    const { register, handleSubmit } = useForm<signupData>()

    const { mutate, isLoading } = useMutation(userSignup, {
        onSuccess: (response) => {
            console.log(response, "res");

            // toast.success(
            //     response?.message || 'Password reset email sent! Check your email.'
            // );
            setSteps(2)

            console.log(response);

            //   history.push('/lostpassword');
        },
        onError: (error) => {
            console.log(error, "err");
            // toast.error(error?.response?.data?.message || 'Something went wrong!');
        }
    });

    const onSignup = (data: any) => {
        mutate(data)
    };


    return (
        <div className="flex flex-col items-center justify-center  mx-auto lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border m dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create and account
                    </h1>
                    <form onSubmit={handleSubmit(onSignup)} className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label
                                htmlFor="Name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                {...register('name')}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name..."

                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                {...register('email')}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="email@company.com"

                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                {...register('password')}
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                            />
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    aria-describedby="terms"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"

                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label
                                    htmlFor="terms"
                                    className="font-light text-gray-500 dark:text-gray-300"
                                >
                                    I accept the{" "}
                                    <a
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                        href="#"
                                    >
                                        Terms and Conditions
                                    </a>
                                </label>
                            </div>
                        </div>
                        {
                            isLoading ? <button
                                type="submit"
                                disabled
                                className="w-full text-white bg-[#3bafae] hover:bg-[#46c3c1] transition-all duration-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Loading...
                            </button> :
                                <button
                                    type="submit"
                                    className="w-full text-white bg-[#3bafae] hover:bg-[#46c3c1] transition-all duration-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Signup
                                </button>
                        }
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account?{" "}
                            <span
                                onClick={() => {
                                    setSteps(2)
                                }}
                                className="font-medium cursor-pointer text-primary-600 hover:underline dark:text-primary-500"
                            >
                                Login here
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Signup;
