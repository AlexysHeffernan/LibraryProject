function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const booksBorrowed = books.filter(book => !book.borrows[0].returned);
  return booksBorrowed.length;
}

function getMostCommonGenres(books) {
 const list = [];
  const genreCounts = books.reduce((total, {genre}) => {
  if (total[genre]){
    total[genre]++;
  } else {
    total[genre] = 1;
  }
   return total;
 }, {});

  const sortedGenres = Object.keys(genreCounts)
  .sort((a, b) => genreCounts[b] - genreCounts[a])
  .map(genre => ({name: genre, count: genreCounts[genre]}));
    for (let i = 0; i < 5; i++){
      list.push(sortedGenres[i]);
    }
  return list;
}

function getMostPopularBooks(books) {
  const list = [];
  const sortedBooks = books.sort((bookA, bookB) => bookB.borrows.length - bookA.borrows.length)
  .map(book => ({name: book.title, count: book.borrows.length}));
  for (let i = 0; i < 5; i++){
    list.push(sortedBooks[i]);
  }
  return list;
}

function getMostPopularAuthors(books, authors) {
  const authorBorrows = {};
  books.forEach(book => {
    const author = findAuthor(authors, book.authorId);
    const authorName = `${author.name.first} ${author.name.last}`;

    if (authorBorrows[authorName]){
      authorBorrows[authorName] += book.borrows.length;
    } else {
      authorBorrows[authorName] = book.borrows.length;
    }
  });

  const authorCounts = Object.keys(authorBorrows)
    .map(name => ({name, count: authorBorrows[name]}))
    .sort((authorA, authorB) => authorB.count - authorA.count);
  
  const popularList = [];
  for (let i = 0; i < 5; i++){
    popularList.push(authorCounts[i]);
  }
  return popularList;
}

function findAuthor(authors, id){
  return authors.find(author => author.id === id);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
