const userName = document.getElementById("username");
const savedSCoreButton = document.getElementById("saveScoreBtn");
const mostRecentScores = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementById("finalScore");
const highScores = JSON.parse(localStorage.getItem("highSCores")) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScores;
userName.addEventListener("keyup", () => {
  savedSCoreButton.disabled = !userName.value;
});

const saveHighScore = (e) => {
  e.preventDefault();
  const score = {
    score: mostRecentScores,
    name: userName.value,
  };
  highScores.push(score);
  highScores.sort((a, b) => {
    return b.score - a.score;
  });

  highScores.splice(5);
  localStorage.setItem("highSCores", JSON.stringify(highScores));
  window.location.assign("/");
};
