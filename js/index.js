const scoresAll = document.querySelectorAll(".score");

let rating;

scoresAll.forEach((score) => {
  score.addEventListener("click", (e) => {
    scoresAll.forEach((score) => {
      score.classList.remove("highlight");
    });
    e.target.classList.add("highlight");
    rating = e.target.innerText;
  });
});

const submit = document.querySelector("#submit");
const scoreBox = document.querySelector(".score-box");
const thankYouBox = document.querySelector(".thank-you-box");
const scoreChosen = document.querySelector("#chosen-score");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!rating) {
    alert("chose one number");
  } else {
    scoreBox.classList.add("hidden");
    thankYouBox.classList.remove("hidden");
    scoreChosen.textContent = rating;
  }
});
