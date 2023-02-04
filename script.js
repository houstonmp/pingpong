const select = document.querySelector("#select");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const scoreSpan1 = document.querySelector("#scoreSpan1");
const scoreSpan2 = document.querySelector("#scoreSpan2");
let winScore = 5;
let score1 = 0;
let score2 = 0;


select.addEventListener("input", (e) => {
    e.preventDefault();
    winScore = parseInt(select.value);
    console.log(winScore);
});

player1.addEventListener("click", (e) => {
    e.preventDefault();
    if (score1 !== winScore) {
        score1++;
        scoreSpan1.textContent = score1;
        if (score1 === winScore) {
            scoreSpan1.classList.add("win");
            scoreSpan2.classList.add("lose");
        }

    }
});

player2.addEventListener("click", (e) => {
    e.preventDefault();
    if (score2 !== winScore) {
        score2++;
        scoreSpan2.textContent = score2;
        if (score2 === winScore) {
            scoreSpan2.classList.add("win");
            scoreSpan1.classList.add("lose");
        }
    }
});

reset.addEventListener("click", (e) => {
    e.preventDefault();
    winScore = 5;
    winScore.value = 5;
    score1 = 0;
    score2 = 0;
    scoreSpan1.innerText = 0;
    scoreSpan2.innerText = 0;
    scoreSpan1.classList.contains("win") && scoreSpan1.classList.remove("win");
    scoreSpan1.classList.contains("lose") && scoreSpan1.classList.remove("lose");
    scoreSpan2.classList.contains("win") && scoreSpan2.classList.remove("win");
    scoreSpan2.classList.contains("lose") && scoreSpan2.classList.remove("lose");
});

