
function showPage(pageNumber) {
  const pages = document.querySelectorAll('.page');
  const buttons = document.querySelectorAll('.nav-buttons button');

  pages.forEach((page, index) => {
    page.classList.remove('active');
  });

  document.getElementById('page' + pageNumber).classList.add('active');

  buttons.forEach((btn, index) => {
    btn.classList.remove('active');
    if (index + 1 === pageNumber) {
      btn.classList.add('active');
    }
  });
}

// Ses efektleri
const correctSound = new Audio('https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg');
const wrongSound = new Audio('https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg');

function checkAnswer(btn, choice) {
  const question = btn.parentElement;
  const correct = question.getAttribute("data-answer");
  const allButtons = question.querySelectorAll("button");
  allButtons.forEach(b => b.disabled = true);

  if (choice === correct) {
    btn.classList.add("correct");
    btn.innerHTML += " ✅";
    correctSound.play();
  } else {
    btn.classList.add("wrong");
    btn.innerHTML += " ❌";
    wrongSound.play();
    const correctBtn = Array.from(allButtons).find(b => b.textContent.trim().startsWith(correct));
    if (correctBtn) {
      correctBtn.classList.add("correct");
      correctBtn.innerHTML += " ✅";
    }
  }
}
