class Library { // eslint-disable-line no-unused-vars
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  // Get books from array of objects
  getBooks = () => {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    return this.books;
  };

  createBook = ({ title, author, id }) => {
    const div = document.createElement('div');

    div.innerHTML = `
      <h3>${title}</h3>
      <h3>${author}</h3>
      <button class="delete btnDelete p-1 rounded" id="${id}">Remove</button>
      <hr>
      `;
    document.querySelector('.output').appendChild(div);
    document.getElementById(id).addEventListener('click', () => {
      this.removeBook(document.getElementById(id));
    });
  };

  // Display all the books from the collection
  displayBooks = () => {
    this.books = this.getBooks();
    this.books.forEach(this.createBook);
  };

  // Add book to the array of book objects
  addBook = (title, author, id) => {
    this.books = this.getBooks();
    this.books.push({ title, author, id });
    localStorage.setItem('books', JSON.stringify(this.books));
    return { title, author, id };
  };

  // Clear all the input boxes
  resetForm = () => {
    titleInput.value = ''; // eslint-disable-line no-undef
    authorInput.value = ''; // eslint-disable-line no-undef
    titleInput.focus(); // eslint-disable-line no-undef
  };

  // Remove book from the collection
  removeBook = (elem) => {
    this.books = this.getBooks();
    this.books.forEach((book) => {
      if (book.id === elem.id) {
        this.books.splice(this.books.indexOf(book), 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(this.books));
    elem.parentElement.remove();
  };
}
