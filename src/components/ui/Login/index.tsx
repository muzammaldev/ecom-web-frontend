

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type Props = {
    setSteps: (steps: number) => void;
    setCloseModel: (closeModel: boolean) => void;
};

type loginData = {
    email: string
    password: string
}


const Login = ({ setSteps, setCloseModel }: Props) => {

    const router = useRouter()

    const { register, handleSubmit } = useForm<loginData>()
    const [loading, setLoading] = useState(false)



    const onLogin = (data: loginData) => {
        console.log(data, 'loginData');


        setLoading(true)
        try {
            axios.post('http://localhost:8000/user/login', data).then((resp) => {
                if (resp.data) {
                    setCloseModel(true)
                }
            })
        } catch (error) {
            console.log(error);

        } finally {
            setLoading(false)
        }
    }



    return (
        <div className="flex flex-col items-center justify-center  mx-auto lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border m dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Login account
                    </h1>
                    <form onSubmit={handleSubmit(onLogin)} className="space-y-4 md:space-y-6" action="#">

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
                            loading ? <button
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
                                    Login
                                </button>
                        }
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account?{" "}
                            <span
                                onClick={() => {
                                    setSteps(1)
                                }}
                                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                            >
                                signup here
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
