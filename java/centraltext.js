const centralText = document.querySelector("#centraltext")

const newTexts = [
  `Want the best merch from the market? <br> You can find them all here!`,
  `Get up to 45% discount off<br> in new products`,
  `The best merch for the better price? <br> Your place is here!`,
  `Want to find what fits you? <br> We all know that you can find it here!`
]

let currentIndex = Math.floor(Math.random() * newTexts.length)
let previousIndex = currentIndex

function getRandomIndex() {
  let randomIndex = Math.floor(Math.random() * newTexts.length)
  while (randomIndex === previousIndex) {
    randomIndex = Math.floor(Math.random() * newTexts.length)
  }
  return randomIndex
}

function updateText() {
  centralText.style.animation = "fadeOut 0.5s ease forwards"
  setTimeout(() => {
    centralText.style.animation = "fadeIn 0.5s ease forwards"
    currentIndex = getRandomIndex()
    centralText.innerHTML = newTexts[currentIndex]
    previousIndex = currentIndex
  }, 300)
}


updateText()

setInterval(updateText, 4000)
