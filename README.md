<p align="center">
  <a href="https://etemesaysarac.github.io/FizzBuzz-Game/" target="_blank">
    <img src="assets/easyso_logo.png" alt="EASYSO logo" width="160" />
  </a>
</p>

<h1 align="center">FizzBuzz Game</h1>

<p align="center">
  <a href="https://etemesaysarac.github.io/FizzBuzz-Game/" target="_blank"><b>Live Demo</b> — etemesaysarac.github.io/FizzBuzz-Game</a>
</p>

<p align="center">
  <a href="https://etemesaysarac.github.io/FizzBuzz-Game/"><img src="assets/game.png" alt="FizzBuzz live demo screenshot" width="760" style="max-width:100%;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.08)" /></a>
</p>

<p align="center">
  <img alt="Language badge" src="https://img.shields.io/badge/Language-JavaScript-yellow" />
  <img alt="Style badge" src="https://img.shields.io/badge/Stack-HTML%20%7C%20CSS%20%7C%20JS-blue" />
  <img alt="License badge" src="https://img.shields.io/badge/License-MIT-lightgrey" />
</p>

---

## Overview

A clean, single‑page implementation of the classic **FizzBuzz** exercise with a modern UI and accessible interaction model. The project is intentionally minimal but organized and documented for professional presentation and quick evaluation.

**Key objectives**

* Demonstrate separation of concerns (**HTML** markup, **CSS** layout, **JS** logic).
* Provide clear input validation and friendly error states.
* Keep the algorithm pure, readable, and O(n) with O(1) extra space.

---

## Repository Structure

```
FIZZBUZZ/
├─ .vscode/
│  └─ launch.json            # optional: local debug config
├─ assets/
│  ├─ easyso_logo.png        # project logo (proprietary/brand asset)
│  ├─ game.png               # screenshot: landing / initial state
│  └─ game1.png              # screenshot: sample run
├─ index.html                # single-page app markup
├─ script.js                 # core logic (runFizzBuzz)
├─ style.css                 # visual design / theme
└─ README.md                 # this document
```

---

## Features

* **Zero‑dependency** front‑end (works offline; no build step)
* **Accessible input** (`type=number`, inline error messaging, `aria-live` on output suggested)
* **Scrollable results** for large ranges; stable layout
* **Color‑coded output** with semantic classes (`.fizz`, `.buzz`, `.fizzbuzz`)
* **Ready for GitHub Pages** deployment

---

## How It Works (Algorithm)

For `i = 1..limit`:

* If `i % 3 === 0` append `"Fizz"`.
* If `i % 5 === 0` append `"Buzz"`.
* Output concatenation result or the integer `i`.

This composition naturally yields **FizzBuzz** when divisible by both 3 and 5.
**Time:** O(n)  •  **Space:** O(1) extra (DOM output grows linearly by design).

---

## Quick Start (Local)

1. Clone or download the repository.
2. Open `index.html` directly in a browser **or** start a tiny static server:

```bash
# Python 3 built‑in server
python -m http.server 3000
# then open http://127.0.0.1:3000/index.html
```

3. Enter a positive integer and click **Run**.

---

## Deployed Version

* **Live Site:** [https://etemesaysarac.github.io/FizzBuzz-Game/](https://etemesaysarac.github.io/FizzBuzz-Game/)
* Hosting via **GitHub Pages**. To (re)deploy:

  1. Keep `index.html`, `style.css`, `script.js`, and `assets/` at repo root.
  2. In GitHub → **Settings → Pages**, choose branch `main` and folder `/ (root)` (or `/docs` if you prefer).

> Tip: Add an OpenGraph preview by keeping `assets/game.png` and using appropriate `<meta property="og:*">` tags in `index.html`.

---

## Screenshots

<p align="center">
  <img src="assets/game.png" alt="Initial UI" width="360" style="max-width:100%;margin:6px;border-radius:8px;box-shadow:0 6px 18px rgba(0,0,0,.05)" />
  <img src="assets/game1.png" alt="Sample run output" width="360" style="max-width:100%;margin:6px;border-radius:8px;box-shadow:0 6px 18px rgba(0,0,0,.05)" />
</p>

---

## Code Walkthrough

### `script.js`

```js
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
    line.className = result.toLowerCase(); // fizz | buzz | fizzbuzz | ""
    outputDiv.appendChild(line);
  }
}
```

### `style.css` (excerpt)

```css
.container { background:#fff; padding:2rem; border-radius:8px; box-shadow:0 0 10px rgba(0,0,0,.1); width:400px; text-align:center; }
#output { margin-top:1rem; text-align:left; max-height:300px; overflow-y:auto; }
.fizz { color: #16a34a; }
.buzz { color: #2563eb; }
.fizzbuzz { color: #7c3aed; font-weight:700; }
```

### `index.html` (excerpt)

```html
<div class="container">
  <h1>FizzBuzz Game</h1>
  <input type="number" id="limitInput" placeholder="Enter a number (e.g. 100)" />
  <button onclick="runFizzBuzz()">Run</button>
  <div id="output"></div>
</div>
```

---

## Accessibility & UX

* Numeric input with proper keyboard on mobile (`type="number"`).
* Inline error message for invalid input; consider `aria-live="polite"` on `#output` for screen readers.
* Visual distinction: color + font‑weight on `.fizzbuzz` for color‑impaired users.

---

## Testing Suggestions

Promote the loop into a pure helper to facilitate unit tests:

```js
function fizzbuzzSequence(limit){
  if (!Number.isInteger(limit) || limit < 1) throw new Error('limit must be a positive integer');
  const out = [];
  for (let i = 1; i <= limit; i++){
    let r = '';
    if (i % 3 === 0) r += 'Fizz';
    if (i % 5 === 0) r += 'Buzz';
    out.push(r || i);
  }
  return out;
}
```

Example assertions (Jest):

```js
expect(fizzbuzzSequence(3)).toEqual([1,2,'Fizz']);
expect(fizzbuzzSequence(5)[4]).toBe('Buzz');
expect(fizzbuzzSequence(15)[14]).toBe('FizzBuzz');
```

---

## Author & Credits

* **Author / Maintainer:** EASYSO — <a href="https://github.com/etemesaysarac">@etemesaysarac</a>
* **Logo:** `assets/easyso_logo.png` — proprietary brand asset licensed to this repository. Do not use outside this project without permission.

---

## License

**MIT License** (code). Logo excluded — see note above.

```
MIT License

Copyright (c) 2025 EASYSO

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<p align="center">Made with ♥ by EASYSO — <a href="https://etemesaysarac.github.io/FizzBuzz-Game/">Play the demo</a></p>
