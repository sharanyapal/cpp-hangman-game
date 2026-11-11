<div align="center">

# Hangman Game

**Guess a word one character at a time.**

<sub>CLASSIC C++ &nbsp; • &nbsp; Word game &nbsp; • &nbsp; Console application</sub>

</div>

---

## What this project explores

Guess country names one letter at a time before five wrong guesses.

**Try this:** Follow guesses, attempts and the displayed word state.

## Source & structure

| Path | Description |
|---|---|
| [`docs`](./docs) | Original project asset / directory |
| [`hangman-turbo-cplusplus.cpp`](./hangman-turbo-cplusplus.cpp) | Original C++ source code |
| [`hangman-visual-cplusplus.cpp`](./hangman-visual-cplusplus.cpp) | Original C++ source code |
| [`run-in-browser.html`](./run-in-browser.html) | Original project asset / directory |


## Running the C++ version

The checked-in source includes historical console programs. Some variants use Turbo C++ / DOS-specific headers and APIs, so **a modern C++ compiler may require porting or a compatibility layer**. Open the original source to find its entry point; compile with a compiler compatible with the program's dialect.

## Learning objectives

- Trace the input/output cycle of a stateful console program.
- Inspect the program's control flow and data handling.
- Identify portability improvements needed for modern compilers or browsers.

## Disclaimer

A programming exercise, not a production word game system. Use invented test records and do not store confidential information.

<details><summary><strong>Original project notes</strong></summary>

# Hangman Game

Guess country names one letter at a time before five wrong guesses.

## Run in your browser (no setup)

**Open [`run-in-browser.html`](run-in-browser.html)** or double-click [`docs/index.html`](docs/index.html) after extracting the repository. You can also deploy the `docs/` folder to any static host.

> The browser playground is an independently written **JavaScript adaptation** of this repository's original C++ logic. It is not a C++ interpreter or WebAssembly binary. Original C++ sources are retained unchanged, and the HTML, CSS and JS demo is immediately usable offline.

### Static GitHub Pages

Go to **Settings → Pages → Build and deployment → Deploy from a branch**; choose `main` and `/docs`, then Save. Your site's intended address is `https://sharanyapal.github.io/cpp-hangman-game/` after GitHub confirms a successful deployment.

The previous WebAssembly GitHub Actions workflow is not required for this standalone browser build. The included bulk upload script removes just that previous demo workflow and the superseded `web/` adapter from the **eight named repositories**, without deleting other project files.

### Original C++ source

- [hangman-visual-cplusplus.cpp](hangman-visual-cplusplus.cpp)
- All other historical C++, data and document files are kept unchanged.

### Browser features

- Interactive terminal-style output with keyboard input, restart, and downloadable transcript
- Games follow the original scoring, turns and rule logic
- Data apps use `localStorage` for records within the same browser, replacing local `.DAT` files; records can be cleared explicitly
- Files: `docs/index.html`, `docs/style.css`, `docs/terminal.js`, `docs/program.js`

### Note

This repository contains archived, third-party classroom-style C++ examples from a previously supplied collection. Review attribution and redistribution rights before publishing as your own original work.

</details>

---

<sub>Part of the [C++ project collection](https://github.com/sharanyapal?tab=repositories).</sub>
