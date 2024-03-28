import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {

    const [idx, setIdx] = useState(0);

    return (
        <div>
            <h1 className="text-3xl lg:text-5xl text-center font-bold mb-10 bg-[#1313130D] p-8 rounded-xl">Books</h1>
            <div className="dropdown dropdown-bottom flex justify-center">
                <div tabIndex={0} role="button" className="btn btn-outline bg-green-500 border-none lg:px-5 text-white text-lg">Sort By <TiArrowSortedDown /> </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-52">
                    <li><a>Rating</a></li>
                    <li><a>Number of pages</a></li>
                    <li><a>Published year</a></li>
                </ul>
            </div>
            {/* my tabs */}
            <div className="my-14">
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
                    <Link to='' onClick={() => setIdx(0)} className={`flex items-start flex-shrink-0 px-5 py-3 space-x-2 ${idx === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                        <span>Read Books</span>
                    </Link>
                    <Link to={`wishlist`} onClick={() => setIdx(1)} className={`flex items-start flex-shrink-0 px-5 py-3 space-x-2 ${idx === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                        <span>Wishlist</span>
                    </Link>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;