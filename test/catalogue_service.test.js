const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });

  describe("catalogueService.checkBookByTitle", () => {
    test("returns true if the book exists", () => {
      expect(
        catalogueService.checkBookByTitle(
          "The Assassination of Margaret Thatcher"
        )
      ).toBe(true);
    });

    test("returns false if the book exists", () => {
      expect(
        catalogueService.checkBookByTitle(
          "The Assassination of Margaret Thatcher"
        )
      ).toBe(true);
    });
  });

  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns the total number of books in the catalogue that begin with this letter", () => {
      expect(catalogueService.countBooksByFirstLetter("")).toBe(0);
    });

    test("returns the total number of books in the catalogue that begin with this letter. Ignoring the case of this letter", () => {
      expect(catalogueService.countBooksByFirstLetter("letter.toLowerCase()")).toBe(0);
    });
  });

  describe("catalogueService.getQuantity", () => {
    test("returns the the quantity of the item with this title in stock.", () => {
      expect(catalogueService.getQuantity("title")).toBe(0);
    });
  });

  describe("catalogueService.getBooksByAuthor", () => {
    const expected = [
      { title: "2666", author: "Robert Bolaño", quantity: 17 },
      { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8 }
    ]
    test("returns an array of books by given Author in stock.", () => {
      expect(catalogueService.getBooksByAuthor("Robert Bolaño")).toEqual(catalogueService.getBooksByAuthor(expected))
  });
});

describe("catalogueService.checkQuantity", () => {
  const expected = 
  ("By Night In Chile", 4);
  ("By Night In Chile", 100);
    test("returns true if there are at least as many books in stock as the given quantity, and false otherwise.", () => {
    expect(catalogueService.checkQuantity("By Night In Chile", 4)).toEqual(catalogueService.checkQuantity(expected))
});
});
});