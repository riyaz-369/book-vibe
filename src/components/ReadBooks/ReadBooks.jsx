import { useEffect, useState } from "react";
import { RiPagesLine } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const ReadBooks = () => {
    const [listedBook, setListedBook] = useState([]);
    useEffect(() => {
        const getReadData = JSON.parse(localStorage.getItem('book')) || [];
        setListedBook(getReadData);
    }, [])

    return (
        <div className="mt-8 mb-24">
            {listedBook.map(book =>
                <div key={book.book_id} className="card lg:card-side border-2 bg-base-100 lg:pl-8 mb-8">
                    <figure className="w-full lg:max-w-64">
                        <img className="rounded-2xl" src={book.image} alt={book.book_name} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl lg:text-4xl">{book.book_name}</h2>
                        <p>By: {book.author}</p>
                        <p className="space-y-4 lg:space-y-0 lg:flex"><span className="font-bold">Tag:</span>
                            <button
                                className="bg-green-100 lg:px-4 ml-4 mr-2 text-green-500 font-medium rounded-full p-1">#{book.tags[0]}
                            </button>
                            <button
                                className="bg-green-100 lg:px-4 text-green-500 font-medium rounded-full p-1 lg:mr-5">#{book.tags[1]}
                            </button>
                            <div className="flex items-center gap-2">
                                <SlLocationPin />
                                <span>Year of Publishing: {book.year_of_publishing}</span>
                            </div>
                        </p>
                        <div className="lg:flex gap-7">
                            <div className="flex items-center gap-2">
                                <FaUserFriends />
                                <span> Publisher: {book.publisher}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <RiPagesLine />
                                <span> Page {book.total_pages}</span>
                            </div>
                        </div>
                        <hr />
                        <div className="card-actions mt-4">
                            <button
                                className="bg-sky-100 px-4 text-sky-500 font-medium rounded-full p-1">{book.category}
                            </button>
                            <button
                                className="bg-orange-100 px-3 text-orange-400 font-medium rounded-full p-1">Rating: {book.rating}
                            </button>
                            <Link to=''><button className="btn btn-outline bg-green-500 border-none px-3 rounded-full text-lg text-white btn-sm">View Details</button></Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReadBooks;