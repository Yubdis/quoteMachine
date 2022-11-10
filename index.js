const COLORS = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

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
  
  var randColor = Math.floor(Math.random() * COLORS.length);

}

