import Image from "next/image";
import React from "react";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid"

function Header() {
    return (
        <header
            className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10"> {/* grid-cols-3 ile column 3'e bölündü */}
            {/* Left (Logo) */}
            <div className="relative flex items-center my-auto h-10">
                <Image alt="logo"
                    fill
                    src={"https://links.papareact.com/qd3"}
                    className="object-contain object-left cursor-pointer"
                />
            </div>
            {/* Middle Search Bar */}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input
                    type="text"
                    placeholder="Start your search"
                    className="pl-5 text-sm bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400"
                />
                <SearchIcon
                    className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
                />
            </div>
            {/* Right Action Buttons */}
            <div className="flex items-center justify-end md:space-x-4 text-gray-500">
                <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-4 cursor-pointer mr-2" />

                <div className="flex items-center space-x-2 border-2 rounded-full p-2 ">
                    <MenuIcon className="md:h-6 h-4 cursor-pointer" />
                    <UserCircleIcon className="md:h-6 h-4 cursor-pointer" />
                </div>
            </div>
        </header>
    )
}

export default Header;