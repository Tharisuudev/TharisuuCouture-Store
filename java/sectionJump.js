const sections = document.querySelectorAll("section:not(#header)")

const options = {
  threshold: 0.25
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const section = entry.target
    const elementsToAnimate = section.querySelectorAll("h1, h2, p, ul, li, button, div:not(.container)")

    if (entry.isIntersecting) {
      elementsToAnimate.forEach(element => {
        element.classList.add("fadeIn")
        element.classList.remove("fadeOut")
      })
    } else {
      elementsToAnimate.forEach(element => {
        element.classList.remove("fadeIn")
        element.classList.add("fadeOut")
      })
    }
  })
}, options)

sections.forEach(section => {
  observer.observe(section)
})
