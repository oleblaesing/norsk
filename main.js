const form = document.getElementById('form')
const question = document.getElementById('question')
const languageDisplay = document.getElementById('language')
const answer = document.getElementById('answer')
const solution = document.getElementById('solution')
const accept = document.getElementById('accept')
const points = document.getElementById('points')
const missed = document.getElementById('missed')
const german = 'german'
const norsk = 'norsk'
const languages = [german, norsk]
const words = vocables(german, norsk)

const getRandomElement = list => list[Math.floor(Math.random() * list.length)]
const getOtherLanguage = (language) => {
  if (language === german) {
    return norsk
  }

  return german
}

let currentWord = null
let currentLanguage = null
const isMatchingAnswer = answer => currentWord[getOtherLanguage(currentLanguage)]
  .map(x => x.toLowerCase())
  .includes(answer.toLowerCase())

const drawNext = () => {
  let pool = words

  if (currentWord) {
    pool = words.filter(x => x.german.join(';') !== currentWord.german.join(';'))
  }

  currentWord = getRandomElement(pool)
  currentLanguage = getRandomElement(languages)
}

let pointsCounter = 0
let missedCounter = 0
let madeAPoint = false

form.addEventListener('submit', (e) => {
  e.preventDefault()
  e.stopPropagation()

  if (isMatchingAnswer(answer.value)) {
    solution.innerText = '🎉 Korrekt!'

    if (!madeAPoint) {
      pointsCounter += 1
      madeAPoint = true
      points.innerText = pointsCounter
    }
  } else {
    solution.innerHTML = `🧐 Falsch, eigentlich: <span>${currentWord[getOtherLanguage(currentLanguage)][0]}</span>`

    if (!madeAPoint) {
      missedCounter += 1
      madeAPoint = true
      missed.innerText = missedCounter
    }
  }

  accept.innerText = 'Nächstes'

  accept.addEventListener('click', function next(e) {
    e.preventDefault()
    e.stopPropagation()

    madeAPoint = false
    drawNext()
    question.innerText = getRandomElement(currentWord[currentLanguage])
    languageDisplay.innerText = getOtherLanguage(currentLanguage) === german ? 'auf Deutsch' : 'in Norsk'
    answer.value = ''
    answer.focus()
    solution.innerText = 'Keine Tipps!'
    accept.innerText = 'OK'

    accept.removeEventListener('click', next)
  })
})

drawNext()
points.innerText = pointsCounter
missed.innerText = missedCounter
question.innerText = getRandomElement(currentWord[currentLanguage])
languageDisplay.innerText = getOtherLanguage(currentLanguage) === german ? 'auf Deutsch' : 'in Norsk'
solution.innerText = 'Keine Tipps!'
