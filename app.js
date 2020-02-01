let word = document.getElementById("word");
let wrongLetters = document.getElementById("wrong-letters");
let svgHangman = document.getElementById("svg-hangman");
let selectedWord = prompt("What is your word?")
  .toLowerCase()
  .replace(/[^a-zZ-a]+/g, "");
let incorrectLetters = [];

let correctLetters = selectedWord.split("");

correctLetters.map(letter => {
  let node = document.createElement("span"); // Create a <li> node
  let textnode = document.createTextNode(""); // Create a text node
  node.appendChild(textnode); // Append the text to <li>
  word.appendChild(node);
});

document.addEventListener("keydown", addLetter);

function addLetter(e) {
  if (e.keyCode > 64 && e.keyCode < 91) {
    let letterPressed = e.key.toLowerCase();
    let span = word.children;
    for (let i = 0; i < word.children.length; i++) {
      if (correctLetters.includes(letterPressed)) {
        if (correctLetters[i] == letterPressed) {
          span[i].innerHTML = letterPressed;
        }
      } else {
        incorrectLetters.push(letterPressed);
        incorrectLetters = Array.from(new Set(incorrectLetters));
        addBodyPart(incorrectLetters.length);
        wrongLetters.innerHTML = incorrectLetters.join(",");
        break;
      }
    }
  } else {
    console.log("letters only!");
  }
}

function addBodyPart(turn) {
  let svg = svgHangman.children;
  if (turn > 5) {
    alert("game over");
    window.location.reload(true);
  } else {
    svg[turn + 3].setAttribute(
      "style",
      "stroke:#5C5D67;stroke-width:3;display:inline;"
    );
  }
}
