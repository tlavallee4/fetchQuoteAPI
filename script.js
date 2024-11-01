// Function to fetch a random quote from the API
async function fetchQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // turn the api into jason
        const data = await response.json();
        // fetch the quote from the data
        const quote = data.content;
        // fetch the author from the data
        const author = data.author;
        
        // Call  the displayQuote function to show the fetched quote
        displayQuote(quote, author);
    } catch (error) {
        console.error("Error fetching quote:", error.message);
    }
}

// unction to display the quote on the website
function displayQuote(quote, author) {
    const quoteContainer = document.getElementById("quote-container");
    quoteContainer.innerHTML = `<p>"${quote}"</p><p>- ${author}</p>`;
}

// Attach an event listener to the button to fetch the quote from the fetch quote function
document.getElementById("fetch-quote-button").addEventListener("click", fetchQuote);
