

import React from "react";

type Props = {};

const Footer = (props: Props) => {
    return <div>
        <footer className="bg-white  shadow dark:bg-gray-900 ">
            <div className="w-full  p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a
                        href="https://flowbite.com/"
                        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="https://logowiki.net/wp-content/uploads/imgp/CIRW-online-Logo-1-8458.png"
                            className="h-10"
                            alt="Flowbite Logo"
                        />
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
                    © 2023{" "}
                    <a href="https://flowbite.com/" className="hover:underline">
                        Flowbite™
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>

    </div>;
};

export default Footer;

