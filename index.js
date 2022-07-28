function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const fetchPromise = fetch("https://anapioficeandfire.com/api/books");
  return fetchPromise.then(response => {
    return response.json();
  }).then(books => {
    return renderBooks(books)
  })
}
  

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
