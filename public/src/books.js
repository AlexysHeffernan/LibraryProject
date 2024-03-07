function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = books.filter(book => !book.borrows[0].returned);
  const returnedBooks = books.filter(book => book.borrows[0].returned);
  return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  const borrowers = book.borrows.map(borrow => {
  const account = accounts.filter(account => account.id === borrow.id)[0];
  return {...borrow, ...account};
});

const bookBorrowers = [];
for (let i = 0; i < 10; i++){
  bookBorrowers.push(borrowers[i]);
}
return bookBorrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
