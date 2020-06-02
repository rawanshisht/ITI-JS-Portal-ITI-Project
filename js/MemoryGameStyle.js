// declaring move variable
var moves = 0;
var counter = document.querySelector(".moves");
// declare variables for star icons
const stars = document.querySelectorAll(".fa-star");
//Get flipped
var countCard = 0;
// declare modal
var modal = document.getElement

// stars list
let starsList = document.querySelectorAll(".stars li");

// close icon in modal
let closeicon = document.querySelector(".close");

// declare modal
var modal = document.getElementById("popup1")

const cards = document.querySelectorAll('.memory-card');
var hasFlippedCard = false;
var lockBoard = false;
var firstCard, secondCard;

function flipCard() {

    moveCounter()
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    secondCard = this;
    checkForMatch();
    congratulations(countCard);

}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    countCard++;

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 36);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));


// @description count player's moves
function moveCounter() {
    moves++;
    counter.innerHTML = moves;
    //start timer on first click
    if (moves == 1) {
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }
}

// @description game timer
var second = 0,
    minute = 0,
    hour = 0;
var timer = document.querySelector(".timer");
var interval;
var stopTimer = false;

function startTimer() {

    interval = setInterval(function() {
        timer.innerHTML = minute + "mins " + second + "secs";
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
        }
    }, 1000);
}

// @description congratulations when all cards match, show modal and moves, time and rating
function congratulations(countCard) {
    if (countCard == 6) {
        clearInterval(interval);
        finalTime = timer.innerHTML;

        // show congratulations modal
        modal.classList.add("show");

        // declare star rating variable
        var starRating = document.querySelector(".stars").innerHTML;

        //showing move, rating, time on modal
        document.getElementById("finalMove").innerHTML = moves;
        document.getElementById("starRating").innerHTML = starRating;
        document.getElementById("totalTime").innerHTML = finalTime;

        //closeicon on modal
        closeModal();
    };
}


// @description close icon on modal
function closeModal() {
    closeicon.addEventListener("click", function(e) {
        modal.classList.remove("show");
        startGame();
    });
}


// @desciption for user to play Again 
function playAgain() {
    modal.classList.remove("show");
    startGame();
}


// loop to add event listeners to each card
for (var i = 0; i < cards.length; i++) {
    card = cards[i];
    card.addEventListener("click", displayCard);
    card.addEventListener("click", cardOpen);
    card.addEventListener("click", congratulations);
};