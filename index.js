let incorrect = 0;
let hp = 3;
let wordCount = 0;


// Get the result field
let resultEl = document.getElementById("result");
let wordEl = document.getElementById("word");
let hpEl = document.getElementById("hp");
let lwEl = document.getElementById("lw");
let randomWord = getRandomKeyFromMap(dict);

document.addEventListener('DOMContentLoaded', changeWord());

function changeResult(result) {
    // Change the inner HTML text
    resultEl.innerHTML = result;
}

function changeWord() {
    // Change the inner HTML text
    wordEl.innerHTML = randomWord;
}

function nextWord() {
    randomWord = getRandomKeyFromMap(dict);
    wordEl.innerHTML = randomWord;
}

function loseWinCheck() {
    if (hp <= 0)
    {
        const result = window.confirm("You lost");
      
        // If the user clicks "OK", reload the page
        if (result) {
          window.location.reload();
        }
    }
    if (wordCount >= 10)
    {
        const result = window.confirm("You won");
      
        // If the user clicks "OK", reload the page
        if (result) {
          window.location.reload();
        }
    }
}

function compareWords() {
    // Get the input word and the word to compare it to
    let inputWord = document.getElementById("inputWord").value;
    let compareWord = dict.get(randomWord);

    // Compare the input word to the word to compare it to
    if (inputWord == compareWord) {
        changeResult("Correct!");
    } else {
        changeResult(compareWord);
        hp--;
        hpEl.innerHTML = hp;
    }

    wordCount++; 
    lwEl.innerHTML = wordCount;

    loseWinCheck();
}

function getRandomKeyFromMap(map) {
    // Convert the map keys to an array
    const keysArray = Array.from(map.keys());
  
    // Generate a random index within the bounds of the array length
    const randomIndex = Math.floor(Math.random() * keysArray.length);
  
    // Retrieve the key at the randomly generated index
    const randomKey = keysArray[randomIndex];
  
    // Return the random key
    return randomKey;
  }

