const lectionChooser = document.getElementById('lection-chooser')
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

const startApp = (words) => {
  lectionChooser.style.display = 'none'
  form.style.display = 'flex'
  let unsolvedWords = words

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
    let pool = unsolvedWords

    if (currentWord) {
      pool = unsolvedWords.filter(x => x.german.join(';') !== currentWord.german.join(';'))
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

      unsolvedWords = unsolvedWords.filter(x => x.german.join(';') !== currentWord.german.join(';'))

      if (unsolvedWords.length === 1) {
        unsolvedWords = words
      }

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
      question.innerText = currentWord[currentLanguage][0]
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
  question.innerText = currentWord[currentLanguage][0]
  languageDisplay.innerText = getOtherLanguage(currentLanguage) === german ? 'auf Deutsch' : 'in Norsk'
  solution.innerText = 'Keine Tipps!'
}

const lections = vocables(german, norsk)

Object.keys(lections).forEach((lection) => {
  const lectionButton = document.createElement('button')
  lectionButton.innerText = lection
  lectionButton.type = 'submit'
  lectionButton.addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()

    startApp(lections[lection])
  })

  lectionChooser.appendChild(lectionButton)
})

const lectionButton = document.createElement('button')
lectionButton.innerText = 'Alle'
lectionButton.type = 'submit'
lectionButton.addEventListener('click', (e) => {
  e.preventDefault()
  e.stopPropagation()

  startApp(Object.keys(lections).reduce((words, lection) => {
    return words.concat(lections[lection])
  }, []))
})

lectionChooser.appendChild(lectionButton)
