console.log("Books loaded:", books.length);

function createBookCards() {
    const booksContainer = document.getElementById("books-container");
    console.log("Books container:", booksContainer);

    books.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";

        bookCard.innerHTML = `
            <img src="${book.cover.href}" alt="${book.titulo}" class="book-cover">
            <h3 class="book-title">${book.titulo}</h3>
            <p class="book-author">${book.autor}</p>
            <p class="book-price">R$ ${book.price.toFixed(2)}</p>
            <p class="book-synopsis">${book.sinopse.substring(0, 100)}...</p>
            <button class="add-to-cart-btn">Adicionar ao Carrinho</button>
          `;

        booksContainer.appendChild(bookCard);
    });
}

// Chamar a função quando a página carregar
document.addEventListener("DOMContentLoaded", function () {
    createBookCards();
});