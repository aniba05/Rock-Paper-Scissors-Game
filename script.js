const firstHeading = document.getElementById("firstH2");
const secoundHeading = document.getElementById("secoundH2");
const thiredHeading = document.getElementById("thired");



function uiResult(player, computer, won) {
  firstHeading.textContent = `Player Choice  ${player}`;
  secoundHeading.textContent = `Computer Choice  ${computer}`;
  thiredHeading.textContent = ` ${won}`;
}
