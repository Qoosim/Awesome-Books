const library = new Library(); // eslint-disable-line no-undef

const form = document.querySelector('form');
const titleInput = form.title;
const authorInput = form.author;
const addBtn = document.querySelector('.addBtn');
const listItem = document.getElementById('listItem');
const newForm = document.getElementById('newForm');
const contactInfo = document.getElementById('contactInfo');
const brand = document.getElementById('brand');
const theList = document.querySelector('.theList');
const theForm = document.querySelector('.theForm');
const theContact = document.querySelector('.theContact');
const output = document.querySelector('.output');
const dateAndTime = document.getElementById('dateAndTime');

const { DateTime } = luxon; // eslint-disable-line no-undef
dt = DateTime.utc().toLocal(); // eslint-disable-line no-undef
const time = dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS); // eslint-disable-line no-undef

dateAndTime.textContent = time;

const createBook = ({ title, author, id }) => {
  const div = document.createElement('div');
  div.classList.add(
    'row',
    'm-1',
    'justify-content-center',
    'custom-row',
  );

  div.innerHTML = `
    <h4 class="col-sm-10 text-start">"${title}" by ${author}</h4>
    <button class=
    "col-sm-2 btn-danger rounded" 
    id="${id}" 
    onclick="library.removeBook(this)">Remove</button>
    `;
  output.appendChild(div);
  output.style.display = library.books.length === 0 ? 'none' : 'block';
};

output.style.display = library.books.length === 0 ? 'none' : 'block';

// Add event listener to the add button
addBtn.addEventListener('click', (event) => {
  event.preventDefault();

  // Validation
  if (titleInput.validity.valueMissing) {
    titleInput.setCustomValidity('Please enter title!');
    titleInput.reportValidity();
  } else if (authorInput.validity.valueMissing) {
    authorInput.setCustomValidity('Please enter author\'s name!');
    authorInput.reportValidity();
  } else {
    // Get the values of the input boxes and assign it to a variable
    const newBook = library.addBook(
      titleInput.value,
      authorInput.value,
      new Date().getTime().toString(),
    );
    createBook(newBook);
    library.resetForm();
  }
});

brand.addEventListener('click', () => {
  listItem.classList.add('active');
  theList.classList.remove('hidden');
  theForm.classList.add('hidden');
  theContact.classList.add('hidden');
  newForm.classList.remove('active');
  contactInfo.classList.remove('active');
});

listItem.addEventListener('click', () => {
  listItem.classList.add('active');
  theList.classList.remove('hidden');
  theForm.classList.add('hidden');
  theContact.classList.add('hidden');
  newForm.classList.remove('active');
  contactInfo.classList.remove('active');
});

newForm.addEventListener('click', () => {
  newForm.classList.add('active');
  theList.classList.add('hidden');
  theContact.classList.add('hidden');
  theForm.classList.remove('hidden');
  listItem.classList.remove('active');
  contactInfo.classList.remove('active');
});

contactInfo.addEventListener('click', () => {
  contactInfo.classList.add('active');
  theContact.classList.remove('hidden');
  theList.classList.add('hidden');
  theForm.classList.add('hidden');
  newForm.classList.remove('active');
  listItem.classList.remove('active');
});

library.displayBooks();
