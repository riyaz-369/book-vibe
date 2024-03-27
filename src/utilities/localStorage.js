export const getLocalStorage = () => {
  const storedBooks = localStorage.getItem("book");

  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
};

export const saveBooks = (book) => {
  const storeBook = getLocalStorage();
  const alreadyExist = storeBook.find((item) => item.book_id === book.book_id);

  if (!alreadyExist) {
    storeBook.push(book);
    localStorage.setItem("book", JSON.stringify(storeBook));
  }
};

// local storage for wishlist
export const getLocalStorage2 = () => {
  const storedWishlist = localStorage.getItem("wishlist");

  if (storedWishlist) {
    return JSON.parse(storedWishlist);
  }
  return [];
};

export const saveWishlist = (wishlist) => {
  const storeWishlist = getLocalStorage();
  const alreadyExist2 = storeWishlist.find(
    (item) => item.book_id === wishlist.book_id
  );

  if (!alreadyExist2) {
    storeWishlist.push(wishlist);
    localStorage.setItem("wishlist", JSON.stringify(storeWishlist));
  }
};
