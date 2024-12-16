class Book {
  constructor(title, author, ISBN, numCopies){
  this.title = title;
  this.author = author;
  this.ISBN = ISBN;
  this.numCopies = numCopies;
  }
}

Book.prototype.getAvailability = function() {
  
  if (this.numCopies === 0) {
    return "Out of stock";
  } else if (this.numCopies < 10) {
    return "Low stock";
  } else {
    return "In stock";
  }
}

Book.prototype.sell = function(numCopiesSold = 1) {
  this.numCopies -= numCopiesSold;
}

Book.prototype.restock = function(numCopiesStocked = 5) {
 this.numCopies += numCopiesStocked;
}

const HarryPotter = new Book("Harry Potter", "J.K Rowling", 123919, 5);
console.log(HarryPotter.getAvailability());

HarryPotter.restock(12);
console.log(HarryPotter.getAvailability());

HarryPotter.sell(17);
console.log(HarryPotter.getAvailability());