class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu)
    this.navList = document.querySelector(navList)
    this.navLinks = document.querySelectorAll(navLinks)
    this.showClass = "show"

    this.handleClick = this.handleClick.bind(this)
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = ``)
        : (link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + 0.3}s`)
    })
  }

  handleClick() {
    this.navList.classList.toggle(this.showClass)
    this.mobileMenu.classList.toggle(this.showClass)
    this.animateLinks()
  }
  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick)
  }
  init() {
    if (this.mobileMenu) {
      this.addClickEvent()
    }
    return this
  }
}

const mobileNavbar = new MobileNavbar(".mobile-menu", ".navbar", ".navbar li")
mobileNavbar.init()

const links = document.querySelectorAll(".navbar a")

links.forEach(link => {
  link.addEventListener("click", function (event) {
    links.forEach(otherLinks => {
      otherLinks.classList.remove("active")
    })
    this.classList.add("active")
  })
})

