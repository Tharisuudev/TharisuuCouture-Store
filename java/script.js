const links = document.querySelectorAll('.navbar a');

for (const link of links) {
  link.addEventListener('click', function (event) {
    for (const otherLink of links) {
      otherLink.classList.remove('active');
    }
    this.classList.add('active');
  });
}
