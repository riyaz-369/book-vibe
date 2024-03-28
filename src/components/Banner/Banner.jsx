import { Link } from "react-router-dom";
import Books from "../Books/Books";

const Banner = () => {
    return (
        <>
            <div className="lg:px-28 lg:py-20 bg-base-200 rounded-3xl mb-24">
                <div className="text-center lg:text-start lg:flex justify-between items-center p-6 lg:p-0">
                    <div>
                        <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-12">Books to freshen <br /> up your bookshelf</h1>
                        <Link to='/listed-books'><button className="btn btn-sm bg-green-500 text-white lg:btn lg:btn-outline lg:bg-green-500 border-none lg:px-5 lg:text-white lg:text-lg">View The List</button></Link>
                    </div>
                    <div className="flex justify-center mt-4 lg:mt-0">
                        <img src="https://images.blinkist.io/images/books/64d35fb0c37e9e0008fba984/1_1/470.jpg" className="max-w-60 lg:max-w-sm" />
                    </div>
                </div>
            </div>
            <Books></Books>
        </>
    );
};

export default Banner;