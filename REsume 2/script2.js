
const quotes = [
  "Every line of code is a step forward in my journey.",
  "Debugging is like playing chess—every move matters.",
  "I started with curiosity, now I build with purpose.",
  "From atomic structures to full-stack dreams—this is my path."
];

function changeQuote() {
  const quoteText = document.getElementById("quoteText");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = `"${quotes[randomIndex]}"`;
}
