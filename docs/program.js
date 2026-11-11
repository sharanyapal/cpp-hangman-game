/* Faithful browser port of hangman-visual-cplusplus.cpp. Original C++ is unchanged. */
window.runProject = async function (ui) {
  const words = ['india','pakistan','nepal','malaysia','philippines','australia','iran','ethiopia','oman','indonesia'];
  const word = words[Math.floor(Math.random() * words.length)];
  let unknown = '*'.repeat(word.length);
  const MAX_TRIES = 5;
  let wrongGuesses = 0;
  ui.line('\nWelcome to hangman...Guess a country Name');
  ui.line('\nEach letter is represented by a star.');
  ui.line('\nYou have to type only one letter in one try');
  ui.line('\nYou have ' + MAX_TRIES + ' tries to try and guess the word.');
  ui.line('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  while (wrongGuesses < MAX_TRIES) {
    ui.line('\n' + unknown);
    const raw = await ui.ask('Guess a letter:');
    const letter = raw.trim().toLowerCase();
    if (!/^[a-z]$/.test(letter)) { ui.line('Enter exactly one letter (A-Z).'); continue; }
    let matches = 0;
    const chars = unknown.split('');
    // Original letterFill() treats already-revealed letters as zero matches.
    if (!unknown.includes(letter)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) { chars[i] = letter; matches++; }
      }
    }
    if (!matches) {
      ui.line("Whoops! That letter isn't in there!");
      wrongGuesses++;
    } else {
      unknown = chars.join('');
      ui.line("You found a letter! Isn't that exciting!");
    }
    ui.line('You have ' + (MAX_TRIES - wrongGuesses) + ' guesses left.');
    if (word === unknown) {
      ui.line(word);
      ui.line('Yeah! You got it!');
      return;
    }
  }
  ui.line("Sorry, you lose...you've been hanged.");
  ui.line('The word was : ' + word);
};
