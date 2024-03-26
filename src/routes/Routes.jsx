import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Banner from "../components/Banner/Banner";
import ListedBooks from "../components/ListedBooks/ListedBooks";
import PagesToRead from "../components/PagesToRead/PagesToRead";
import LatestBooks from "../components/LatestBooks/LatestBooks";
import BookDetails from "../components/BookDetails/BookDetails";
import ReadBooks from "../components/ReadBooks/ReadBooks";
import Wishlist from "../Wishlist/Wishlist";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: '/',
                element: <Banner></Banner>
            },
            {
                path: '/listed-books',
                element: <ListedBooks></ListedBooks>,
                children: [
                    {
                        index: true,
                        element: <ReadBooks></ReadBooks>
                    },
                    {
                        path: 'wishlist',
                        element: <Wishlist></Wishlist>
                    }
                ]
            },
            {
                path: '/pages-read',
                element: <PagesToRead></PagesToRead>
            },
            {
                path: '/latest',
                element: <LatestBooks></LatestBooks>
            },
            {
                path: '/book-details/:book_id',
                element: <BookDetails></BookDetails>,
                loader: () => fetch('./books.json')
            }
        ]
    },
]);
