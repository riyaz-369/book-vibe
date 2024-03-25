import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="px-28 py-20 bg-base-200 rounded-3xl mb-24">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-5xl font-bold mb-12">Books to freshen <br /> up your bookshelf</h1>
                    <Link><button className="btn btn-outline bg-green-500 border-none px-5 text-white text-lg">View The List</button></Link>
                </div>
                <img src="https://images.blinkist.io/images/books/64d35fb0c37e9e0008fba984/1_1/470.jpg" className="max-w-sm" />
            </div>
        </div>
    );
};

export default Banner;