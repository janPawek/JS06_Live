document.addEventListener("DOMContentLoaded", function() {
    const bookList = document.getElementById("book-list");
    // Sample JSON data
    const books = `[
        {
            "title": "JavaScript for Dummies",
            "author": "Chris Minnick",
            "read": false,
            "cover": "media/img/js_book_cover.jpg"
        },
        {
            "title": "HTML & CSS Mastery",
            "author": "Angel Cathal",
            "read": true,
            "cover": "media/img/html_css_book_cover.jpg"
        },
        {
            "title": "Python for Beginners: Master Python",
            "author": "Tim Simon",
            "read": true,
            "cover": "media/img/python.jpg"
        },
        {
            "title": "Machine Learning and Programming with Python for Beginners",
            "author": "SAM CAMPBELL",
            "read": true,
            "cover": "media/img/machineLearning.jpg"
        },
        {
            "title": "JavaScript for Beginners",
            "author": "Tim Simon",
            "read": true,
            "cover": "media/img/JS.jpg"
        },
        {
            "title": "Engineers Survival Guide:",
            "author": "Merih Taze",
            "read": false,
            "cover": "media/img/Survival.jpg"
        },
        {
            "title": "HTML und CSS: Ganz einfach eigene Webseiten erstellen",
            "author": "Thomas Kobert",
            "read": true,
            "cover": "media/img/HTML_Kids.jpg"
        },
        {
            "title": "PHP und MySQL für Kids:",
            "author": "Johann-Christian Hanke",
            "read": false,
            "cover": "media/img/PHP_Kids.jpg"
        },
        {
            "title": "50 HTML & CSS Exercises",
            "author": "Daniel Christofis",
            "read": true,
            "cover": "media/img/50HTML_Exc.jpg"
        }
    ]`;
    let myobj = JSON.parse(books)
    // Iterate through the array of books
    myobj.forEach(book => {
        // Create a div element for each book
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");

        // Create a div for book info
        const bookInfo = document.createElement("div");
        bookInfo.classList.add("book-info");

        // Set the content of the div with book title and author
        const titleElement = document.createElement("div");
        titleElement.classList.add("title");
        titleElement.textContent = `${book.title} by`;

        const authorElement = document.createElement("div");
        authorElement.classList.add("author");
        authorElement.textContent = book.author;

        bookInfo.appendChild(titleElement);
        bookInfo.appendChild(authorElement);

        // Create an image element for the book cover
        const coverImage = document.createElement("img");
        coverImage.src = book.cover;
        bookElement.appendChild(coverImage);

        // Add appropriate style based on whether the book has been read or not
        if (book.read) {
            bookElement.classList.add("true");
        } else {
            bookElement.classList.add("false");
        }

        // Append the book info to the book element
        bookElement.appendChild(bookInfo);

        // Append the book element to the book list
        bookList.appendChild(bookElement);
    });
});
