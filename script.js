let library = [];
let date = new Date();
let bookSection = document.getElementById("book-section");
let newBook = document.getElementById("new-book");
let bookForm = document.getElementById("new-book-form");
let submit = document.getElementById("submit");
let form = document.getElementById("book-form");

function Book(name, author, year, pages) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.pages = pages;
}

function submitBtn() {
    let inputList = form.getElementsByTagName("input");
    addBook(inputList[0].value, inputList[1].value, inputList[2].value, inputList[3].value);
    render();
    bookForm.setAttribute("style", "display: none;");
    form.reset();
}

function setSubmitBtn() {
    submit.addEventListener("click", submitBtn);
}

function addBook(name, author, year, pages) {
    let book = new Book(name, author, year, pages);
    library.unshift(book);
}

function displayForm() {
    bookForm.setAttribute("style", "display: block;")
}

function setNewBookBtn() {
    newBook.addEventListener("click", displayForm);
}

function render() {
    let bookDiv = document.createElement('div');
    bookDiv.setAttribute("class", "book-div");
    let bookTitle = document.createElement('h2');
    bookTitle.innerHTML = library[0].name;
    let bookAuthor = document.createElement('h2');
    bookAuthor.innerHTML = library[0].author;
    let bookInfo = document.createElement('p');
    bookInfo.innerHTML = "PAGES: " + library[0].pages + "<br>YEAR: " + library[0].year;
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookInfo);
    let delButton = document.createElement('button');
    delButton.setAttribute("")
    bookSection.appendChild(bookDiv);
}

addBook("Life of Pi", "Yann Martel", 2001, 354);
addBook("Inferno", "Dan Brown", 2013, 609);
addBook("Percy Jackson & the Olympians: The Lightning Thief", "Rick Riordan", 2005, 377);
addBook("The Man Who Knew Infinity", "Robert Kanigel", 1991, 438);
addBook("Pride and Prejudice", "Jane Austen", 1813, 432);
addBook("Life of Pi", "Yann Martel", 2001, 354);
addBook("Inferno", "Dan Brown", 2013, 609);
addBook("Percy Jackson & the Olympians: The Lightning Thief", "Rick Riordan", 2005, 377);
addBook("The Man Who Knew Infinity", "Robert Kanigel", 1991, 438);
addBook("Pride and Prejudice", "Jane Austen", 1813, 432);
addBook("Life of Pi", "Yann Martel", 2001, 354);
addBook("Inferno", "Dan Brown", 2013, 609);
addBook("Percy Jackson & the Olympians: The Lightning Thief", "Rick Riordan", 2005, 377);
addBook("The Man Who Knew Infinity", "Robert Kanigel", 1991, 438);
addBook("Pride and Prejudice", "Jane Austen", 1813, 432);
addBook("Life of Pi", "Yann Martel", 2001, 354);
addBook("Inferno", "Dan Brown", 2013, 609);
addBook("Percy Jackson & the Olympians: The Lightning Thief", "Rick Riordan", 2005, 377);
addBook("The Man Who Knew Infinity", "Robert Kanigel", 1991, 438);
addBook("Pride and Prejudice", "Jane Austen", 1813, 432);


for (let i = 0; i < library.length; ++i) {
    let bookDiv = document.createElement('div');
    bookDiv.setAttribute("class", "book-div");
    let bookTitle = document.createElement('h2');
    bookTitle.innerHTML = library[i].name;
    let bookAuthor = document.createElement('h2');
    bookAuthor.innerHTML = library[i].author;
    let bookInfo = document.createElement('p');
    bookInfo.innerHTML = "pages: " + library[i].pages + " year: " + library[i].year;
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookInfo);
    bookSection.appendChild(bookDiv);
}
setNewBookBtn();
setSubmitBtn();