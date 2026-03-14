let homeCount = document.getElementById("home-count")
let awayCount = document.getElementById("away-count")
let homeScore = 0
let awayScore = 0
homeCount.textContent = homeScore
awayCount.textContent = awayScore

function homeOne() {
  homeScore += 1
  homeCount.textContent = homeScore
}
function homeTwo() {
  homeScore += 2
  homeCount.textContent = homeScore
}
function homeThree() {
  homeScore += 3
  homeCount.textContent = homeScore
}
function awayOne() {
  awayScore += 1
  awayCount.textContent = awayScore
}
function awayTwo() {
  awayScore += 2
  awayCount.textContent = awayScore
}
function awayThree() {
  awayScore += 3
  awayCount.textContent = awayScore
}
function newGame() {
  homeScore = 0
  awayScore = 0
  homeCount.textContent = homeScore
  awayCount.textContent = awayScore
}