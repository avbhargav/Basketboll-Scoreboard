let totalScore = 0;
// TODO - need to give hover blink effect on button click. 
// TODO - need to add the reset button. 
const homeDisplayEle = document.getElementById("home-display");
console.log(homeDisplayEle);

//Add one point to the totalScore
function addOnePointToHome() {
    totalScore += 1;
    //Update the display with the total Score
    homeDisplayEle.textContent = totalScore;
    console.log(totalScore);
}

//Add one two points to the totalScore
function addTwoPointsToHome() {
    totalScore += 2;
    homeDisplayEle.textContent = totalScore;
    console.log(totalScore);
}

//Add one three points to the totalScore
function addThreePointsToHome() {
    totalScore += 3;
    homeDisplayEle.textContent = totalScore;
    console.log(totalScore);
}

const guestDisplayEle = document.getElementById("guest-display");
console.log(guestDisplayEle);

//Add one point to the totalScore
function addOnePointToGuest() {
    totalScore += 1;
    //Update the display with the total Score
    guestDisplayEle.textContent = totalScore;
    console.log(totalScore);
}

//Add one two points to the totalScore
function addTwoPointsToGuest() {
    totalScore += 2;
    guestDisplayEle.textContent = totalScore;
    console.log(totalScore);
}

//Add one three points to the totalScore
function addThreePointsToGuest() {
    totalScore += 3;
    guestDisplayEle.textContent = totalScore;
    console.log(totalScore);
}

function reset() {
    totalScore = 0;
    homeDisplayEle.textContent = totalScore;
    guestDisplayEle.textContent = totalScore;
}



