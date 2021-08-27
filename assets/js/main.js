
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

    let rockImg = `<img style="background: red; border: 0.5em solid red;" src="assets/img/hand-rock-regular.svg">`
    let paperImg = `<img style="background: green; border: 0.5em solid green;" src="assets/img/hand-paper-regular.svg">`
    let scissorsImg = `<img style="background: orange; border: 0.5em solid orange;" src="assets/img/hand-scissors-regular.svg">`

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
        let wordArray = ['rock', 'paper', 'scissors']
        let randomNumber = Math.floor(Math.random() * wordArray.length)
        let word = wordArray[randomNumber];

        return word;
    }

    let compAns = compRandomRes()

    compColor = () => {
        if (compAns == 'rock') {
            commitText.innerHTML = `${rockImg} Robocop shows`
        } else if (compAns == 'paper') {
            commitText.innerHTML = `${paperImg} Robocop shows`
        } else if (compAns == 'scissors') {
            commitText.innerHTML = `${scissorsImg} Robocop shows`
        } else {
            return
        }
    }

    winLos = () => {
        if (x == compAns) {
            console.log("Dead heat")
            console.log("User shows: " + x)
            console.log("Robot shows: " + compAns)
        } else if (x == 'rock') {
            if (compAns == 'paper') {
                cScore++
                compScore.innerHTML = cScore
                console.log("Los")
                console.log("User shows: " + x)
                console.log("Robot shows: " + compAns)
            }
            else {
                uScore++
                userScore.innerHTML = uScore
                console.log("Win")
                console.log("User shows: " + x)
                console.log("Robot shows: " + compAns)
            }
        } else if (x == 'scissors') {
            if (compAns == 'rock') {
                cScore++
                compScore.innerHTML = cScore
                console.log("Los")
                console.log("User shows: " + x)
                console.log("Robot shows: " + compAns)
            }
            else {
                uScore++
                userScore.innerHTML = uScore
                console.log("Win")
                console.log("User shows: " + x)
                console.log("Robot shows: " + compAns)
            }
        } else if (x == 'paper') {
            if (compAns == 'scissors') {
                cScore++
                compScore.innerHTML = cScore
                console.log("Los")
                console.log("User shows: " + x)
                console.log("Robot shows: " + compAns)
            }
            else {
                uScore++
                userScore.innerHTML = uScore
                console.log("Win")
                console.log("User shows: " + x)
                console.log("Robot shows: " + compAns)
            }
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
