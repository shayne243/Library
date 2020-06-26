let library = [];
let date = new Date();
let bookSection = document.getElementById("book-section");
let newBook = document.getElementById("new-book");

function Book(name, author, year, genre, src) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.src = src;
}

function addBook(name, author, year, genre, src) {
    let book = new Book(name, author, year, genre, src);
    library.push(book);
}

function setNewBookBtn() {
    newBook.addEventListener()
}

function render() {
    for (let i = 0; i < library.length; ++i) {
        let bookDiv = document.createElement('div');
        let bookCover = document.createElement('img');
        bookCover.setAttribute("src", library[i].src);
        bookCover.setAttribute("style", "width: 125x; height: 200px; margin: 10px;");
        let bookTitle = document.createElement('h1');
        bookTitle.innerHTML = library[i].name;
        let bookAuthor = document.createElement('h2');
        bookAuthor.innerHTML = library[i].author;
        let bookInfo = document.createElement('h3');
        bookInfo.innerHTML = library[i].genre + ", " + library[i].year;
        bookDiv.appendChild(bookCover);
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookInfo);
        bookDiv.setAttribute("style", "box-shadow: 0px 0px 47px -14px rgba(0,0,0,0.75); background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(87,87,87,0.6421919109440651) 0%); border-radius: 10px; margin: auto; width: 200px;")
        bookSection.setAttribute("style", "margin: auto; display: grid; grid-template-columns: repeat(5, 250px); gap: 50px; justify-content: space-evenly")
        bookSection.appendChild(bookDiv);
    } 
}

addBook("hi", "hi", "hi", "hi", "https://marketplace.canva.com/EADao3x6uFI/1/0/251w/canva-green-and-pink-science-fiction-book-cover-f6ZLyPhf4-E.jpg");
addBook("hi", "hi", "hi", "hi", "https://marketplace.canva.com/EADao3x6uFI/1/0/251w/canva-green-and-pink-science-fiction-book-cover-f6ZLyPhf4-E.jpg");
addBook("hi", "hi", "hi", "hi", "https://marketplace.canva.com/EADao3x6uFI/1/0/251w/canva-green-and-pink-science-fiction-book-cover-f6ZLyPhf4-E.jpg");
addBook("hi", "hi", "hi", "hi", "https://marketplace.canva.com/EADao3x6uFI/1/0/251w/canva-green-and-pink-science-fiction-book-cover-f6ZLyPhf4-E.jpg");
addBook("hi", "hi", "hi", "hi", "https://marketplace.canva.com/EADao3x6uFI/1/0/251w/canva-green-and-pink-science-fiction-book-cover-f6ZLyPhf4-E.jpg");
addBook("hi", "hi", "hi", "hi", "https://marketplace.canva.com/EADao3x6uFI/1/0/251w/canva-green-and-pink-science-fiction-book-cover-f6ZLyPhf4-E.jpg");
addBook("hi", "hi", "hi", "hi", "https://marketplace.canva.com/EADao3x6uFI/1/0/251w/canva-green-and-pink-science-fiction-book-cover-f6ZLyPhf4-E.jpg");
addBook("hi", "hi", "hi", "hi", "https://marketplace.canva.com/EADao3x6uFI/1/0/251w/canva-green-and-pink-science-fiction-book-cover-f6ZLyPhf4-E.jpg");
addBook("hi", "hi", "hi", "hi", "https://marketplace.canva.com/EADao3x6uFI/1/0/251w/canva-green-and-pink-science-fiction-book-cover-f6ZLyPhf4-E.jpg");
addBook("hi", "hi", "hi", "hi", "https://marketplace.canva.com/EADao3x6uFI/1/0/251w/canva-green-and-pink-science-fiction-book-cover-f6ZLyPhf4-E.jpg");

render();