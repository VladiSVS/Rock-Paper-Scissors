let iRounds = 0
let uScore = 0
let cScore = 0

function rockFunc() {
    playBegin(1)
}

function paperFunc() {
    playBegin(2)
}

function scissorsFunc() {
    playBegin(3)
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

    let userScore = document.getElementById("userScore")
    let compScore = document.getElementById("compScore")

    let rock = document.getElementById("rock")
    let paper = document.getElementById("paper")
    let scissors = document.getElementById("scissors")

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
        return Math.floor(Math.random() * 3) + 1
    }

    let compAnswer = compRandomRes()

    compColor = () => {
        if (compAnswer == 1) {
            rock.style.borderColor = "red"
            paper.style.borderColor = "black"
            scissors.style.borderColor = "black"
        } else if (compAnswer == 2) {
            paper.style.borderColor = "green"
            rock.style.borderColor = "black"
            scissors.style.borderColor = "black"
        } else if (compAnswer == 3) {
            scissors.style.borderColor = "orange"
            paper.style.borderColor = "black"
            rock.style.borderColor = "black"
        } else {
            return
        }
    }

    winLos = () => {
        if (x > compAnswer) {
            console.log("You win")
            uScore++
            userScore.innerHTML = uScore
            console.log(compAnswer)
        } else if (x < compAnswer) {
            console.log("You loss")
            cScore++
            compScore.innerHTML = cScore
            console.log(compAnswer)
        } else {
            console.log("Dead heat")
            console.log(compAnswer)
        }
    }

    countAttempts = (s) => {
        if (iRounds < s) {
            iRounds++
            resultAttempt.innerHTML = iRounds
            compColor()
            winLos()
        } else {
            return
        }
    }

    checkRounds()

}

