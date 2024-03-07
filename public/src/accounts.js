function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a,b) => a.name.last.toLowerCase() < b.name.last.toLowerCase() ? -1 : 1);
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total, book) => {
  const numBorrows = book.borrows.filter(borrow => borrow.id === account.id);
  return total + numBorrows.length;
}, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  let list = books.filter(book => (book.borrows.some(borrow => (borrow.id === account.id) && (borrow.returned === false))));
 return list.map(book => {
    const author = authors.find(author => author.id ===book.authorId);
    return {...book, author};
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
