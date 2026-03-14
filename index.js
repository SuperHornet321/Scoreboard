let homeCount = document.getElementById("home-count")
let guestCount = document.getElementById("guest-count")
let homeScore = 0
let guestScore = 0
homeCount.textContent = homeScore
guestCount.textContent = guestScore

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
function guestOne() {
  guestScore += 1
  guestCount.textContent = guestScore
}
function guestTwo() {
  guestScore += 2
  guestCount.textContent = guestScore
}
function guestThree() {
  guestScore += 3
  guestCount.textContent = guestScore
}
function newGame() {
  homeScore = 0
  guestScore = 0
  homeCount.textContent = homeScore
  guestCount.textContent = guestScore
}