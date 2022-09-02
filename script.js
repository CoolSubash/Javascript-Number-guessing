let start = document.querySelector('#start')
let firstPage = document.querySelector('#first-page')
let secondpage = document.querySelector('#second-page')
let thirdpage = document.querySelector('#third-page')
let personname = document.querySelector('#name')
thirdpage.style.display = 'none'

function nameperson() {
  let nameask = prompt('Enter your name')
  if (nameask === '') {
    alert('Please Enter your name')
  } else {
    firstPage.style.display = 'none'

    personname.textContent = `Welcome ${nameask}`
    secondpage.style.display = 'block'

    setTimeout(() => {
      secondpage.style.display = 'none'
      thirdpage.style.display = 'block'

      console.log(textconfirm)
    }, 3000)
  }
}
start.addEventListener('click', nameperson)

// Implementing the game Logic;
let displayVictory = document.querySelector('#display-victory')
let computernumber = document.querySelector('.computer-number')
let randomnumber = Math.abs(Math.floor(Math.random() * 20 + 1))
let chance = 10
let chanceremain = document.querySelector('#chance')
console.log(randomnumber)
let checkyourguess = document.querySelector('span')
function winlosscheck() {
  let yournumber = document.querySelector('#yournumber')
  if (chance === 0) {
    alert('Sorry you cant play the game')
    return 0
  } else {
    if (yournumber.value === '') {
      alert('Please Enter a Number')
    } else {
      if (Number(yournumber.value) === randomnumber) {
        alert('Congratulation you win the game')
        computernumber.textContent = randomnumber
        yournumber.value = ''
        displayVictory.textContent = 'You Win the Game'
      } else {
        chance--
        chanceremain.textContent = chance
        yournumber.value = ''
        displayVictory.textContent = 'You Loss the Game'
      }
    }
  }
}
checkyourguess.addEventListener('click', winlosscheck)

// Setting of timer
let min = 0
let sec = 0
let time = document.querySelector('#time')
function timercall() {
  setInterval(() => {
    sec++
    if (sec === 60) {
      sec = 0
      min++
      time.textContent = `${min} min ${sec} sec `
    } else {
      time.textContent = `${min} min ${sec} sec`
    }
  }, 1000)
}
timercall()
