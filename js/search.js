const input = document.querySelector(".input-search");

input.addEventListener('input', () => {
  const filter = input.value.toUpperCase();
  const cards = document.querySelectorAll('.card');
  cards.forEach(item => {
    const cardText = item.lastElementChild.firstElementChild.firstElementChild.innerHTML;
    if (cardText.toUpperCase().indexOf(filter) > -1) {
        item.style.display = "";
    } else {
        item.style.display = "none";
    }
  })
})

