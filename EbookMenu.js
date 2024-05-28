let currentBookIndex = 0;

function showBook(index) {
  const bookSlider = document.querySelector('.book-slider');
  const totalBooks = document.querySelectorAll('.book').length;
  
  if (index >= totalBooks) {
    currentBookIndex = 0;
  } else if (index < 0) {
    currentBookIndex = totalBooks - 1;
  } else {
    currentBookIndex = index;
  }

  const offset = -currentBookIndex * 825; // Adjust width according to the .rectangle-container
  bookSlider.style.transform = `translateX(${offset}px)`;
}

function prevBook() {
  showBook(currentBookIndex - 1);
}

function nextBook() {
  showBook(currentBookIndex + 1);
}

document.addEventListener('DOMContentLoaded', () => {
  showBook(currentBookIndex);
});
