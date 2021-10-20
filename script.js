const form = document.querySelector('form');
const titleInput = form['title'];
const authorInput = form['author'];
const btnAdd = form['btn'];
const output = document.querySelector('.output');
const btnRemove = document.querySelector('.btnDelete');

// Get books from array of objects
const getBooks = () => {
    let books = JSON.parse(localStorage.getItem('books')) || [];
    return books;
}

// Add book to the array of book objects
const addBook = (title, author, id) => {
  const books = getBooks();
  books.push({ title, author, id });
  localStorage.setItem('books', JSON.stringify(books));
  return { title, author, id }
}

const createBook = ({title, author, id}) => {
    const div = document.createElement('div');

    div.innerHTML = `
    <h3>${title}</h3>
    <h3>${author}</h3>
    <button class="delete btnDelete p-1 rounded" id="${id}" onclick="removeBook(this)">Remove</button>
    <hr>
    `
    output.appendChild(div);
}

// Clear all the input boxes
const resetForm = () => {
    titleInput.value = '';
    authorInput.value = '';
    titleInput.focus();
}

// Display all the books from the collection
const displayBooks = () => {
    const books = getBooks();
    books.forEach(createBook);
}

// Remove a clicked book from the view
const removeBook = (elem) => {
    let books = getBooks();
    books.forEach((book) => {
        if (book.id === elem.id) {
            books.splice(books.indexOf(book), 1)
        }
    })
    localStorage.setItem('books', JSON.stringify(books));
    elem.parentElement.remove();
}

// Add event listener to the add button
btnAdd.addEventListener('click', (event) => {
    event.preventDefault();

    // Get the values of the input boxes and assign it to a variable
    const newBook = addBook(
      titleInput.value, 
      authorInput.value,
      new Date().getTime().toString()
    )

    createBook(newBook);
    resetForm();
})

displayBooks();
