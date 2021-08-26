const rockImg = `<img style="background: red; border: 0.5em solid red;" src="assets/img/hand-rock-regular.svg">`
const paperImg = `<img style="background: green; border: 0.5em solid green;" src="assets/img/hand-paper-regular.svg">`
const scissorsImg = `<img style="background: orange; border: 0.5em solid orange;" src="assets/img/hand-scissors-regular.svg">`

let iRounds = 0
let uScore = 0
let cScore = 0

function rockFunc() {
    playBegin('rock')
}

function paperFunc() {
    playBegin('paper')
}

function scissorsFunc() {
    playBegin('scissors')
}

function playBegin(x) {

    let rounds = document.getElementById("rounds")
    let countRounds = document.getElementById("countRounds")
    let radioFive = document.getElementById("radioFive")
    let radioTen = document.getElementById("radioTen")
    let radioFifteen = document.getElementById("radioFifteen")
    let radioTwenty = document.getElementById("radioTwenty")
    let totalAttempts = document.getElementById("totalAttempts")
    let resultAttempt = document.getElementById("attempt")
    let commitText = document.getElementById("commitText")

    let userScore = document.getElementById("userScore")
    let compScore = document.getElementById("compScore")

    function checkRounds() {
        if (radioFive.checked) {
            totalAttempts.innerHTML = radioFive.value
            showHide()
            countAttempts(radioFive.value)
        } else if (radioTen.checked) {
            totalAttempts.innerHTML = radioTen.value
            showHide()
            countAttempts(radioTen.value)
        } else if (radioFifteen.checked) {
            totalAttempts.innerHTML = radioFifteen.value
            showHide()
            countAttempts(radioFifteen.value)
        } else if (radioTwenty.checked) {
            totalAttempts.innerHTML = radioTwenty.value
            showHide()
            countAttempts(radioTwenty.value)
        } else {
            return
        }
    }

    showHide = () => {
        rounds.style.display = "none"
        countRounds.style.display = "block"
    }

    compRandomRes = () => {
        let wordArray = ['rock', 'paper', 'scissors'],
            randomNumber = Math.floor(Math.random() * wordArray.length),
            word = wordArray[randomNumber];

        return word;
    }

    let compAns = compRandomRes()

    compColor = () => {
        if (compAns === 'rock') {
            commitText.innerHTML = `${rockImg} Robocop shows`
        } else if (compAns === 'paper') {
            commitText.innerHTML = `${paperImg} Robocop shows`
        } else if (compAns === 'scissors') {
            commitText.innerHTML = `${scissorsImg} Robocop shows`
        } else {
            return
        }
    }

    winLos = () => {
        if (x === compAns) {
            uScore++
            userScore.innerHTML = uScore
            console.log("You win")
            console.log("Robot shows: " + compAns)
        } else if (x !== compAns) {
            cScore++
            compScore.innerHTML = cScore
            console.log("You loss")
            console.log("Robot shows: " + compAns)
        } else {
            console.log("Dead heat")
            console.log("Robot shows: " + compAns)
        }
    }

    totalWinResult = () => {
        if (uScore > cScore) {
            commitText.innerHTML = `You win!!!`
        } else if (uScore < cScore) {
            commitText.innerHTML = `You los!!!`
        } else {
            commitText.innerHTML = `Dead heat!!!`
        }
    }

    countAttempts = (s) => {
        if (iRounds < s) {
            iRounds++
            resultAttempt.innerHTML = iRounds
            compColor()
            winLos()
        } else {
            return totalWinResult()
        }
    }

    checkRounds()

}
