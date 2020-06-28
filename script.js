let library = [];
let date = new Date();
let bookSection = document.getElementById("book-section");
let newBook = document.getElementById("new-book");
let bookForm = document.getElementById("new-book-form");
let submit = document.getElementById("submit");
let form = document.getElementById("book-form");
let bookNo = 0;

function Book(name, author, year, pages) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.id = 0;
    this.read = false;
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
    bookDiv.dataset.number = bookNo;
    bookDiv.setAttribute("class", "book-div");
    let bookTitle = document.createElement('h2');
    library[0].id = bookNo;
    bookTitle.innerHTML = library[0].name;
    let bookAuthor = document.createElement('h2');
    bookAuthor.innerHTML = library[0].author;
    let bookInfo = document.createElement('p');
    bookInfo.innerHTML = "<em>" + library[0].pages + " pages" + ", " + library[0].year + "</em>";
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookInfo);
    let delButton = document.createElement('button');
    delButton.setAttribute("class", "del-btn");
    delButton.innerHTML = "Delete";
    delButton.addEventListener("click", function() {
        console.log(library);
        for (let i = 0; i < library.length; ++i) {
            if (library[i].id == bookDiv.dataset.number) {
                library.splice(i, 1);
                break;
            } 
        }
        console.log(library);
        bookSection.removeChild(bookDiv);       
    });
    bookDiv.appendChild(delButton);
    let readLabel = document.createElement("label");
    readLabel.innerHTML = 'Read: '
    let readToggle = document.createElement("input");
    readToggle.setAttribute("type", "checkbox");
    readToggle.addEventListener("click", function() {
        for (let i = 0; i < library.length; ++i) {
            if (library[i].id == bookDiv.dataset.number) {
                if (readToggle.checked) {
                    library[i].read = true;
                }
                else {
                    library[i].read = false;
                }
            }
        }
        console.log(library);
    });
    readLabel.appendChild(readToggle);
    bookDiv.appendChild(readLabel);
    bookSection.appendChild(bookDiv);
    bookNo++;
}

addBook("Life of Pi", "Yann Martel", 2001, 354);
render();
addBook("Inferno", "Dan Brown", 2013, 609);
render();
addBook("Percy Jackson & the Olympians: The Lightning Thief", "Rick Riordan", 2005, 377);
render();
addBook("The Man Who Knew Infinity", "Robert Kanigel", 1991, 438);
render();
addBook("Pride and Prejudice", "Jane Austen", 1813, 432);
render();
addBook("Life of Pi", "Yann Martel", 2001, 354);
render();
addBook("Inferno", "Dan Brown", 2013, 609);
render();
setNewBookBtn();
setSubmitBtn();
console.log(library);