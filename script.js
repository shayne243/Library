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
    bookForm.setAttribute("style", "display: none;")
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
    let bookTitle = document.createElement('h2');
    bookTitle.innerHTML = library[0].name;
    let bookAuthor = document.createElement('h2');
    bookAuthor.innerHTML = library[0].author;
    let bookInfo = document.createElement('p');
    bookInfo.innerHTML = "PAGES: " + library[0].pages + "<br>YEAR: " + library[0].year;
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookInfo);
    bookDiv.setAttribute("style", "box-shadow: 0px 0px 47px -14px rgba(0,0,0,0.75); border: solid 1px white; border-radius: 10px; margin: auto; width: 200px;")
    bookSection.setAttribute("style", "margin: auto; display: grid; grid-template-columns: repeat(5, 250px); gap: 50px; justify-content: space-evenly");        bookSection.appendChild(bookDiv);
}

addBook("hi", "hi", 2000, 2000);
addBook("hi", "hi", 2000, 2000);
addBook("hi", "hi", 2000, 2000);
addBook("hi", "hi", 2000, 2000);
addBook("hi", "hi", 2000, 2000);
for (let i = 0; i < library.length; ++i) {
    let bookDiv = document.createElement('div');
    let bookTitle = document.createElement('h2');
    bookTitle.innerHTML = library[i].name;
    let bookAuthor = document.createElement('h2');
    bookAuthor.innerHTML = library[i].author;
    let bookInfo = document.createElement('p');
    bookInfo.innerHTML = "PAGES: " + library[i].pages + "<br>YEAR: " + library[i].year;
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookInfo);
    bookDiv.setAttribute("style", "box-shadow: 0px 0px 47px -14px rgba(0,0,0,0.75); border: solid 1px white; border-radius: 10px; margin: auto; width: 200px;")
    bookSection.setAttribute("style", "margin: auto; display: grid; grid-template-columns: repeat(5, 250px); gap: 50px; justify-content: space-evenly")
    bookSection.appendChild(bookDiv);
}
setNewBookBtn();
setSubmitBtn();