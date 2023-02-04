const select = document.querySelector("#select");
let score = 5;


select.addEventListener("input", (e) => {
    e.preventDefault();
    score = select.value;
    console.log(score);
});

