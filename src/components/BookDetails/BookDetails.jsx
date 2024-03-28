import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBooks, saveWishlist } from "../../utilities/localStorage";
import { useState } from "react";

const BookDetails = () => {
    const books = useLoaderData();
    const { book_id } = useParams();
    const idInt = parseInt(book_id)
    
    const book = books.find(book => book.book_id === idInt);
    const wishlistBook = books.find(listBook => listBook.book_id === idInt);
    const { book_name, author, image, rating, category, tags, review, year_of_publishing, publisher, total_pages } = book;

    const [toastify, setToastify] = useState(true);
    const handleReadingList = () => {
        setToastify(false)
        toastify ? toast.success('Successfully added to reading list !') : toast.warning('Already have reading list.');
        saveBooks(book);
    }

    const [wishlist, setWishlist] = useState(true);
    const handleWishlist = () => {
        setWishlist(false)
        wishlist ? toast.success('Added to Wishlist !') : toast.warning('Already have Wishlist.');
        saveWishlist(wishlistBook);
    }

    return (
        <div className="card lg:card-side bg-base-100 mb-8">
            <figure className="w-full lg:min-w-[576px]">
                <img className="rounded-2xl" src={image} alt={book_name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-4xl">{book_name}</h2>
                <p>By: {author}</p> <hr />
                <p>{category}</p> <hr />
                <p className="font-bold">Review: <span className="font-normal">{review}</span></p> <br />
                <p className="font-bold">Tag: <button className="bg-green-100 px-4 lg:ml-4 mr-2 text-sm lg:text-base text-green-500 font-medium rounded-full p-1">#{tags[0]}</button>
                    <button className="bg-green-100 px-4 text-green-500 font-medium rounded-full p-1">#{tags[1]}</button></p>
                <hr /> <br />
                <div>
                    <div className="flex gap-14">
                        <div>
                            <p>Number of Pages: </p>
                            <p>Publisher: </p>
                            <p>Year of Publishing: </p>
                            <p>Rating: </p>
                        </div>
                        <div>
                            <div>
                                <span className="font-semibold">{total_pages}</span>
                            </div>
                            <div>
                                <span className="font-semibold">{publisher}</span>
                            </div>
                            <div>
                                <span className="font-semibold">{year_of_publishing}</span>
                            </div>
                            <div>
                                <span className="font-semibold">{rating}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-actions mt-4">
                    <button onClick={() => handleReadingList()} className="btn btn-outline text-lg">Read</button>
                    <button onClick={() => handleWishlist()} className="btn btn-outline bg-sky-500 border-none px-5 text-white text-lg">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;