
window.onload = init;
function init() {
  getNewQuote()
}

function getNewQuote() {
  let randIndex = Math.floor(Math.random() * QUOTES.length);
  let randQuoteData = QUOTES[randIndex];
  
  let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
  
//   Add quote
  let quoteInApiFormat = randQuoteData.quote.replace(/ /g, "%20");
//   Add author
  let authorInApiFormat = randQuoteData.author.replace(/ /g, "%20");
  twitterLink += quoteInApiFormat + " - " + authorInApiFormat;
  
  
  document.getElementById("text").innerText = randQuoteData.quote;
  document.getElementById("author").innerText = randQuoteData.author;
  document.getElementById("tweet-quote").href = twitterLink
}

