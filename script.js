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
const addBook = (title, author) => {
  const books = getBooks();
  books.push({ title, author });
  localStorage.setItem('books', JSON.stringify(books));
  return { title, author }
}

const createBook = ({title, author}) => {
    const div = document.createElement('div');

    div.innerHTML = `
    <h3>${title}</h3>
    <h3>${author}</h3>
    <button class="delete btnDelete p-1 rounded">Remove</button>
    <hr>
    `
    output.appendChild(div);

}

const displayBooks = () => {
    const books = getBooks();
    books.forEach(createBook);
}

btnAdd.addEventListener('click', (event) => {
    event.preventDefault();

    const newBook = addBook(
      titleInput.value, 
      authorInput.value
    )

    createBook(newBook);
    titleInput.value = '';
    authorInput.value = '';
    titleInput.focus();
})

displayBooks();
