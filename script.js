let library = [];
let date = new Date();
let bookSection = document.getElementById("book-section");
let newBook = document.getElementById("new-book");
let bookForm = document.getElementById("new-book-form");
let submit = document.getElementById("submit");

function Book(name, author, year, genre) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.genre = genre;
}

function submitBtn() {
    let name = "";
    let author = "";
    let year = 0;
    let genre = "";
    name = document.getElementById("title").value;
    author = document.getElementById("author").value;
    genre = document.getElementById("genre").value;
    year = document.getElementById("year").value;
}

function setSubmitBtn() {
    submit.addEventListener("click", submitBtn);
}

function addBook(name, author, year, genre) {
    let book = new Book(name, author, year, genre);
    library.push(book);
}

function displayForm() {
    bookForm.setAttribute("style", "display: block;")
}

function setNewBookBtn() {
    newBook.addEventListener("click", displayForm);
}

function render() {
    for (let i = 0; i < library.length; ++i) {
        let bookDiv = document.createElement('div');
        let bookTitle = document.createElement('h1');
        bookTitle.innerHTML = library[i].name;
        let bookAuthor = document.createElement('h2');
        bookAuthor.innerHTML = library[i].author;
        let bookInfo = document.createElement('h3');
        bookInfo.innerHTML = library[i].genre + ", " + library[i].year;
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookInfo);
        bookDiv.setAttribute("style", "box-shadow: 0px 0px 47px -14px rgba(0,0,0,0.75); border: solid 1px white; border-radius: 10px; margin: auto; width: 200px;")
        bookSection.setAttribute("style", "margin: auto; display: grid; grid-template-columns: repeat(5, 250px); gap: 50px; justify-content: space-evenly")
        bookSection.appendChild(bookDiv);
    } 
}

addBook("hi", "hi", "hi", "hi");
addBook("hi", "hi", "hi", "hi");
addBook("hi", "hi", "hi", "hi");
addBook("hi", "hi", "hi", "hi");
addBook("hi", "hi", "hi", "hi");
addBook("hi", "hi", "hi", "hi");
addBook("hi", "hi", "hi", "hi");
addBook("hi", "hi", "hi", "hi");
addBook("hi", "hi", "hi", "hi");
addBook("hi", "hi", "hi", "hi");
render();
setNewBookBtn();
setSubmitBtn();