const library = new Library(); // eslint-disable-line no-undef

const form = document.querySelector('form');
const titleInput = form.title;
const authorInput = form.author;
const addBtn = document.querySelector('.addBtn');

// Add event listener to the add button
addBtn.addEventListener('click', (event) => {
  event.preventDefault();

  // Get the values of the input boxes and assign it to a variable
  const newBook = library.addBook(
    titleInput.value,
    authorInput.value,
    new Date().getTime().toString(),
  );
  library.createBook(newBook);
  library.resetForm();
});

library.displayBooks();
