import { userTypeDiscount } from "./database.js";
import { bookStoreBooks } from "./database.js";


const findBooksByCategory = (bookList, category) =>
  bookList.filter(book => book.categories.includes(category));


const findBookById = (bookList, bookId) =>
  bookList.find(book => book.id === bookId);


const sellBook = (bookList, bookId, userType = 'normal') => {
  const bookIndex = bookList.findIndex(book => book.id === bookId);
  if (bookIndex === -1 || bookList[bookIndex].quantity <= 0) {
    return 'Livro indisponível para compra.';
  }

  bookList[bookIndex].quantity -= 1;
  const discount = userTypeDiscount[userType];
  const price = bookList[bookIndex].price;
  const finalPrice = (price - price * discount).toFixed(2);
  const discountPercentage = (discount * 100).toFixed(0);

  return `Livro ${bookList[bookIndex].title} vendido com sucesso por R$ ${finalPrice} (${discountPercentage}% de desconto).`;
};


const calculateAverageRating = (bookList, bookId) => {
  const book = findBookById(bookList, bookId);
  if (!book) {
    return 'Livro não encontrado.';
  }

  if (book.ratings.length === 0) {
    return `O livro ${book.title} não possui nenhuma avaliação.`;
  }

  const averageRating = (book.ratings.reduce((acc, rating) => acc + rating, 0) / book.ratings.length).toFixed(2);
  return `O livro ${book.title} possui uma média de avaliação igual a ${averageRating}.`;
};


