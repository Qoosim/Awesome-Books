const library = new Library(); // eslint-disable-line no-undef

const form = document.querySelector('form');
const titleInput = form.title;
const authorInput = form.author;
const btnAdd = form.btn;
const output = document.querySelector('.output');

const createBook = ({ title, author, id }) => {
  const div = document.createElement('div');
  div.classList.add(
    'row',
    'm-1',
    'justify-content-center',
    'custom-row',
  );

  div.innerHTML = `
    <h4 class="col-sm-10">"${title}" by ${author}</h4>
    <button class="col-sm-2 btn-danger rounded" id="${id}" onclick="library.removeBook(this)">Remove</button>
    `;
  output.appendChild(div);
  output.style.display = library.books.length === 0 ? 'none' : 'block';
};

output.style.display = library.books.length === 0 ? 'none' : 'block';

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
