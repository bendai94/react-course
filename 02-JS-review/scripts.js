const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      genres: [
        "fantasy",
        "high-fantasy",
        "adventure",
        "fiction",
        "novels",
        "literature",
      ],
      hasMovieAdaptation: true,
      pages: 1216,
      translations: {
        spanish: "El señor de los anillos",
        chinese: "魔戒",
        french: "Le Seigneur des anneaux",
      },
      reviews: {
        goodreads: {
          rating: 4.52,
          ratingsCount: 630994,
          reviewsCount: 13417,
        },
        librarything: {
          rating: 4.53,
          ratingsCount: 47166,
          reviewsCount: 452,
        },
      },
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      genres: [
        "science fiction",
        "humor",
        "speculative fiction",
        "short stories",
        "fantasy",
      ],
      hasMovieAdaptation: false,
      pages: 295,
      translations: {},
      reviews: {
        goodreads: {
          rating: 4.16,
          ratingsCount: 11663,
          reviewsCount: 812,
        },
        librarything: {
          rating: 4.13,
          ratingsCount: 2434,
          reviewsCount: 0,
        },
      },
    },
    {
      id: 3,
      title: "Dune",
      publicationDate: "1965-01-01",
      author: "Frank Herbert",
      genres: ["science fiction", "novel", "adventure"],
      hasMovieAdaptation: true,
      pages: 658,
      translations: {
        spanish: "",
      },
      reviews: {
        goodreads: {
          rating: 4.25,
          ratingsCount: 1142893,
          reviewsCount: 49701,
        },
      },
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      publicationDate: "1997-06-26",
      author: "J. K. Rowling",
      genres: ["fantasy", "adventure"],
      hasMovieAdaptation: true,
      pages: 223,
      translations: {
        spanish: "Harry Potter y la piedra filosofal",
        korean: "해리 포터와 마법사의 돌",
        bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
        portuguese: "Harry Potter e a Pedra Filosofal",
      },
      reviews: {
        goodreads: {
          rating: 4.47,
          ratingsCount: 8910059,
          reviewsCount: 140625,
        },
        librarything: {
          rating: 4.29,
          ratingsCount: 120941,
          reviewsCount: 1960,
        },
      },
    },
    {
      id: 5,
      title: "A Game of Thrones",
      publicationDate: "1996-08-01",
      author: "George R. R. Martin",
      genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
      hasMovieAdaptation: true,
      pages: 835,
      translations: {
        korean: "왕좌의 게임",
        polish: "Gra o tron",
        portuguese: "A Guerra dos Tronos",
        spanish: "Juego de tronos",
      },
      reviews: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 2295233,
          reviewsCount: 59058,
        },
        librarything: {
          rating: 4.36,
          ratingsCount: 38358,
          reviewsCount: 1095,
        },
      },
    },
  ];
  
  function getBooks() {
    return data;
  }
  
  function getBook(id) {
    return data.find((d) => d.id === id);
  }

// Quokka.js: Start on Current File

// Destructuring

const book = getBook(1);
book;

// const title = book.title; 
// const author = book.author;

const {title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;

console.log(author, title);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

// Spread operator

const newGenres = [...genres, 'epic fantasy'];
newGenres;

const updatedBook = { 
  // spread object needs to be first, or the spread object will overwrite the explicit definitions
  ...book, 
  // Add new property 
  moviePublicationDate: "2001-12-19", 
  // Overwrite existing property
  pages: 1210, 
};
updatedBook;

// Arrow functions

// function declaration
// function getYear(str) {
//   return str.split("-")[0]
// }

// function expression
const getYear = (str) => str.split("-")[0];

// Template literals
const summary = `${title} is ${pages}-page long book in a series of ${1 + 2}, and was written by ${author} and published in ${
  getYear(publicationDate)
}. The book has ${
  // Turnary operator standard ( condition ) ? if true : if false
  hasMovieAdaptation ? "" : "not"
} been adapted as a movie.
`;
summary;

publicationDate.split("-")[0]

// Short circuiting operators 

console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy: 0, '', null, undefined
console.log("jonas" && "Some string");
console.log(0 && "Some string");

console.log(true || "Some String");
console.log(false || "Some string");

console.log(book.translations.portuguese);

const portugueseTranslation = book.translations.portuguese || "NOT TRANSLATED";
portugueseTranslation;

// Coalescing operator ??
console.log(book.translations.spanish ?? "no translated title");

// Optional Chaining
function getTotalReviewCount(book) {
  const goodread = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodread + librarything;
}

console.log(getTotalReviewCount(getBook(3)));

// Array functions

// Array Map
// preform functon on each element
const books = getBooks();

const titles =  books.map((book)=>book.title);

titles;

const essentialData = books.map((book) => ({
    title: book.title,
    author: book.author,
    reviewsCount: getTotalReviewCount(book),
}));

essentialData;

// Array Filter
// return elements where function returns true
const longBooksWithMovie = books.filter((book)=> book.pages > 500).filter((book)=>book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books.filter((book)=>
  book.genres.includes('adventure')
).map(book=>book.title);
adventureBooks;

// Array Reduce
const pagesAllBooks = books.reduce((sum, book)=> sum+book.pages, 0);
pagesAllBooks;

// Array Sort
const arr = [3, 7, 1, 9, 6];
const sortedAscending = arr.sort((a, b) => a - b);
sortedAscending;
const sortedDescending = arr.sort((a, b) => b - a);
sortedDescending;
// Sort mutates original array:
arr;
// to preseerve original
const arrtwo = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arrtwo;

const sortedByPages = books.slice().sort((a,b)=> b.pages - a.pages).map((a)=>a.pages);
sortedByPages

// Immutabe Arrays

// 1 add book object to array
const newBook = {
  id: 6,
  title: "Lord of the Rings, the Two Towers",
  author: "J.R.R. Tolkein",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2 delete a book from array
const booksAfterDelete = booksAfterAdd.filter(book => book.id !== 6);
booksAfterDelete;

// 3 update a single book object in the array
const booksAfterUpdate = booksAfterDelete.map(book => 
  book.id === 1 ? {...book, pages: 1210 } : book);
booksAfterUpdate;

// Promises

console.log(fetch("https://jsonplaceholder.typicode.com/todos"))

// with promise that calls then()
fetch("https://jsonplaceholder.typicode.com/todos")
.then(res=> res.json())
.then(data=> console.log(data[0]));

console.log("promise started");

// Async/Await

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data[0]);
}

console.log(getTodos());

console.log("called async")

