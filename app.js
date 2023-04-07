const optionA = document.getElementById('optionA');
const optionB = document.getElementById('optionB');
const optionC = document.getElementById('optionC');
const yourChoice = document.getElementById('yourchoice');
const computerChoice = document.getElementById('computerchoice');
let result = document.getElementById('Result');
let w = 0;
function clclclA () {
    optionA.classList.add('useroptionclicked');
    optionB.classList.remove('useroptionclicked');
    optionC.classList.remove('useroptionclicked');
    yourChoice.style.backgroundImage = "url('rockimage.png')";
   return c = 1;
}
function clclclB () {
    optionB.classList.add('useroptionclicked');
    optionA.classList.remove('useroptionclicked');
    optionC.classList.remove('useroptionclicked');
    yourChoice.style.backgroundImage = "url('papperimage.png')";
    return c = 2;
}
function clclclC () {
    optionC.classList.add('useroptionclicked');
    optionB.classList.remove('useroptionclicked');
    optionA.classList.remove('useroptionclicked');
    yourChoice.style.backgroundImage = "url('scissorsimage.png')";
    return c = 3;
}
function checkForWin () {
    let p = Math.floor(Math.random() * 3 + 1);
    if (p === 1) {
        computerChoice.style.backgroundImage = "url('rockimage.png')";
    } else if (p === 2) {
        computerChoice.style.backgroundImage = "url('papperimage.png')";
    } else if (p === 3) {
        computerChoice.style.backgroundImage = "url('scissorsimage.png')";
    }

    if (c === 3 && p === 1) {
        result.innerHTML = "You lost";
        w--;
        document.getElementById('yourwins').innerText = w;
    }
    if (c === 3 && p === 2) {
        console.log("You won");
        result.innerHTML = "You won";
        w++;
        document.getElementById('yourwins').innerText = w;
    }
    if (c === 3 && p === 3) {
        console.log("it's a draw");
        result.innerHTML = "it's a draw";
        document.getElementById('yourwins').innerText = w;
    }
    if (c === 2 && p === 1) {
        console.log("You won");
        result.innerHTML = "You won";
        w++;
        document.getElementById('yourwins').innerText = w;
    }
    if (c === 2 && p === 2) {
        console.log("it's a draw");
        result.innerHTML = "it's a draw";
        document.getElementById('yourwins').innerText = w;
    }
    if (c === 2 && p === 3) {
        console.log("You lost");
        result.innerHTML = "You lost";
        w--;
        document.getElementById('yourwins').innerText = w;
    }
    if (c === 1 && p === 1) {
        console.log("it's a draw");
        result.innerHTML = "it's a draw";
        document.getElementById('yourwins').innerText = w;
    }
    if (c === 1 && p === 2) {
        console.log("You lost");
        result.innerHTML = "you lost";
        w--;
        document.getElementById('yourwins').innerText = w;
    }
    if (c === 1 && p === 3) {
        console.log("You won");
        result.innerHTML = "You won";
        w++;
        document.getElementById('yourwins').innerText = w;
    }
}
