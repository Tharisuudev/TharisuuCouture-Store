const dropdown = document.getElementsByClassName("dropdown")[0];

dropdown.firstElementChild.onclick = function () {
  dropdown.classList.toggle("active");
}