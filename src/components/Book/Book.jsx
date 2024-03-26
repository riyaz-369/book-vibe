import { FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types';

const Book = ({ book }) => {

    const { book_id, book_name, author, image, rating, category, tags } = book;

    return (
        <div className="card bg-base-100 shadow-xl border-2">
            <figure className="px-6 pt-6">
                <img src={image} alt={book_name} className="rounded-xl" />
            </figure>
            <div className="flex px-6 my-5 gap-4">
                <button className="bg-green-100 px-4 text-green-500 font-medium rounded-full p-1">{tags[0]}</button>
                <button className="bg-green-100 px-4 text-green-500 font-medium rounded-full p-1">{tags[1]}</button>
            </div>
            <div className="px-6 my-2">
                <h2 className="card-title mb-2">{book_name}</h2>
                <p>By : {author}</p>
            </div>
            <div className="px-6 flex justify-between pb-6 mt-4">
                <p>{category}</p>
                <div className="flex justify-center items-center gap-2">
                    <p>{rating}</p>
                    <button><FaRegStar /></button>
                </div>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object,
}

export default Book;