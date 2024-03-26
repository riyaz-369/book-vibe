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
