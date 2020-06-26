let libraryArr = [];

function Book(name, author, year, genre) {
    this.name = name;
    this.author = author;
    this.pubYear = year;
    this.genre = genre;
}

function addBook(name, author, year, genre) {
    let book = new Book(name, author, year, genre);
    libraryArr.push(book);
}