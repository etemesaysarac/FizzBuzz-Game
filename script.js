function runFizzBuzz() {
  const limit = parseInt(document.getElementById("limitInput").value);
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";

  if (isNaN(limit) || limit < 1) {
    outputDiv.innerHTML = "<p>Please enter a valid positive number.</p>";
    return;
  }

  for (let i = 1; i <= limit; i++) {
    let result = "";

    if (i % 3 === 0) result += "Fizz";
    if (i % 5 === 0) result += "Buzz";

    const line = document.createElement("p");
    line.textContent = result || i;
    line.className = result.toLowerCase(); // fizz, buzz, fizzbuzz
    outputDiv.appendChild(line);
  }
}