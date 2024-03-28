import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('./books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <div>
            <h1 className="text-3xl lg:text-5xl text-center font-bold mb-10">Books</h1>
            <div className="grid lg:grid-cols-3 gap-8 mb-8 lg:mb-24">
                {
                    books.map(book => <Book key={book.book_id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;