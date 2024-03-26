import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import LatestBooks from './components/LatestBooks/LatestBooks';
import Banner from './components/Banner/Banner';
import BookDetails from './components/BookDetails/BookDetails';

const router = createBrowserRouter([
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
        element: <ListedBooks></ListedBooks>
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
