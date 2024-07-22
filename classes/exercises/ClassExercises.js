// Define your Book class here:

class Book {
  constructor(
    title,
    author,
    copyrightDate,
    ISBN,
    numOfPages,
    numOfTimesBookCheckedOut,
    hasBookBeenDiscarded
  ) {
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.ISBN = ISBN;
    this.numOfPages = numOfPages;
    this.numOfTimesBookCheckedOut = numOfTimesBookCheckedOut;
    this.hasBookBeenDiscarded = hasBookBeenDiscarded;
  }
  checkout(uses = 1) {
    this.numOfTimesBookCheckedOut += uses;
  }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
  constructor(
    title,
    author,
    copyrightDate,
    ISBN,
    numOfPages,
    numOfTimesBookCheckedOut,
    hasBookBeenDiscarded
  ) {
    super(
      title,
      author,
      copyrightDate,
      ISBN,
      numOfPages,
      numOfTimesBookCheckedOut,
      hasBookBeenDiscarded
    );
  }
  dispose(currentYear) {
    if (currentYear - this.copyrightDate > 5) {
      this.hasBookBeenDiscarded = "Yes";
    } else {
      this.hasBookBeenDiscarded = "No";
    }
  }
}

class Novel extends Book {
  constructor(
    title,
    author,
    copyrightDate,
    ISBN,
    numOfPages,
    numOfTimesBookCheckedOut,
    hasBookBeenDiscarded
  ) {
    super(
      title,
      author,
      copyrightDate,
      ISBN,
      numOfPages,
      numOfTimesBookCheckedOut,
      hasBookBeenDiscarded
    );
  }
  dispose(insertBook) {
    if (this.numOfTimesBookCheckedOut > 100) {
      this.hasBookBeenDiscarded = "Yes";
    } else {
      this.hasBookBeenDiscarded = "No";
    }
  }
}

// Declare the objects for exercises 2 and 3 here:
let book1 = new Novel(
  "Pride and Prejudice",
  "Jane Austen",
  1813,
  1111111111111,
  432,
  32,
  "No"
);

let book2 = new Manual(
  "Top Secret Shuttle Building Manual",
  "Redacted",
  2013,
  "0000000000000",
  1147,
  1,
  "No"
);

// book2.checkout(5);
// book2.dispose(book2);
// book1.dispose(2014);

// console.log(book1, book2);
