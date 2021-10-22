
const form = document.querySelector('form');
const titleInput = form.title;
const authorInput = form.author;
const addBtn = document.querySelector('.addBtn');
const output = document.querySelector('.output');

// Get books from array of objects
const getBooks = () => {
  const books = JSON.parse(localStorage.getItem('books')) || [];
  return books;
};

// Add book to the array of book objects
const addBook = (title, author, id) => {
  const books = getBooks();
  books.push({ title, author, id });
  localStorage.setItem('books', JSON.stringify(books));
  return { title, author, id };
};

// Clear all the input boxes
const resetForm = () => {
  titleInput.value = '';
  authorInput.value = '';
  titleInput.focus();
};

const createBook = ({ title, author, id }) => {
  const div = document.createElement('div');

  div.innerHTML = `
    <h4>${title}</h4>
    <h4>${author}</h4>
    <button 
    id="${id}" 
    onclick="removeBook(this)">Remove</button>
    `;
  output.appendChild(div);
};

// Remove book from the collection
const removeBook = (elem) => { // eslint-disable-line no-unused-vars
  const books = getBooks();
  books.forEach((book) => {
    if (book.id === elem.id) {
      books.splice(books.indexOf(book), 1);
    }
  });
  localStorage.setItem('books', JSON.stringify(books));
  elem.parentElement.remove();
};

// Display all the books from the collection
const displayBooks = () => {
  const books = getBooks();
  books.forEach(createBook);
};

// Add event listener to the add button
addBtn.addEventListener('click', (event) => {
  event.preventDefault();

  // Get the values of the input boxes and assign it to a variable
  const newBook = addBook(
    titleInput.value,
    authorInput.value,
    new Date().getTime().toString(),
  );
  createBook(newBook);
  resetForm();
});

displayBooks();
