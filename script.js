const library = new Library(); // eslint-disable-line no-undef

const form = document.querySelector('form');
const titleInput = form.title;
const authorInput = form.author;
const btnAdd = form.btn;
const output = document.querySelector('.output');

const createBook = ({ title, author, id }) => {
  const div = document.createElement('div');

  div.innerHTML = `
    <h3>${title}</h3>
    <h3>${author}</h3>
    <button class="delete btnDelete p-1 rounded" id="${id}" onclick="library.removeBook(this)">Remove</button>
    <hr>
    `;
  output.appendChild(div);
};

// Add event listener to the add button
btnAdd.addEventListener('click', (event) => {
  event.preventDefault();

  // Get the values of the input boxes and assign it to a variable
  const newBook = library.addBook(
    titleInput.value,
    authorInput.value,
    new Date().getTime().toString(),
  );

  createBook(newBook);
  library.resetForm();
});

library.displayBooks();
