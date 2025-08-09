const quoteEl = document.getElementById("quote");
const inputEl = document.getElementById("input");
const resultEl = document.getElementById("result");

const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing fast is fun and improves your skills.",
  "Always focus on accuracy and speed together.",
  "Learning JavaScript makes websites interactive.",
  "Never give up because great things take time."
];

let startTime, currentQuote;

function startTest() {
  currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.textContent = currentQuote;
  inputEl.value = "";
  inputEl.disabled = false;
  inputEl.focus();
  resultEl.innerHTML = "<p>Click \"Show Result\" after you finish typing to view your speed.</p>";
  startTime = new Date();
}

function showResult() {
  const userInput = inputEl.value.trim();
  const endTime = new Date();
  const timeTaken = (endTime - startTime) / 1000; // in seconds

  if (userInput.length === 0) {
    resultEl.innerHTML = "❗ Please type something first!";
    return;
  }

  const letterCount = userInput.length;
  const wordCount = userInput.split(/\s+/).length;

  const lps = (letterCount / timeTaken).toFixed(2);
  const wpm = Math.round((wordCount / timeTaken) * 60);

  resultEl.innerHTML = `
    ⏱️ <strong>Time Taken:</strong> ${timeTaken.toFixed(2)} seconds<br>
    📝 <strong>Letters per Second (LPS):</strong> ${lps}<br>
    ⚡ <strong>Words per Minute (WPM):</strong> ${wpm}
  `;
  inputEl.disabled = true;
}

window.onload = startTest;
