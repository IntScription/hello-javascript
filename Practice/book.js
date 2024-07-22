function book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(
      this.name + ', ' + this.author + ', ' + this.pages + ', ' + this.read
    );
  };
}

const book1 = new book(
  'Percy Jackson',
  'Rick Riordan',
  '295 pages',
  'not read yet'
);
const book2 = new book(
  '48 Laws of Power',
  'Robert Greene',
  '300 pages or so',
  'not read yet'
);
book1.info(); // logs the first book and it's author
book2.info(); // logs the second book and it's author
