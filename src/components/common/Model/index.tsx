

import Login from "@/components/ui/Login";
import Otp from "@/components/ui/Otp";
import Signup from "@/components/ui/Signup";
import React, { useState } from "react";
import { TiArrowBackOutline } from "react-icons/ti";


const Model = () => {

    const [steps, setSteps] = useState<number>(0)
    const [closeModel, setCloseModel] = useState(false)

    return (
        <>
            {/* Main modal */}
            <div
                id="default-modal"
                tabIndex={-1}
                aria-hidden="true"
                className={`${closeModel ? 'hidden' : ''} fixed top-0 right-0 bottom-0 left-0 flex items-center z-50 justify-center bg-gray-900 bg-opacity-50`}
            >
                <div className="relative p-4 w-full max-w-xl max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            {/* <span className="text-2xl text-gray-900 dark:text-white hover:shadow-md">
                                <TiArrowBackOutline />
                            </span> */}
                            <button onClick={() => {
                                setCloseModel(!closeModel)
                            }}
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="default-modal"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        {
                            steps === 0 && <Signup setSteps={() => setSteps(1)} />
                        }
                        {
                            steps === 1 && <Otp setSteps={() => setSteps(2)} />
                        }

                        {
                            steps === 2 && <Login setSteps={() => setSteps(3)} setCloseModel={setCloseModel} />
                        }


                    </div>
                </div>
            </div>
        </>

    );
};

export default Model;
