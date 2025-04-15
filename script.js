
let score = 0;
let total = 15;

const correctSound = new Audio('https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg');
const wrongSound = new Audio('https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg');

function showPage(pageNumber) {
  const pages = document.querySelectorAll('.page');
  const buttons = document.querySelectorAll('.nav-buttons button');

  pages.forEach((page, index) => {
    page.classList.remove('active');
    page.style.display = "none";
  });

  const target = document.getElementById('page' + pageNumber);
  setTimeout(() => {
    target.style.display = "block";
    target.classList.add('active');
  }, 100);

  buttons.forEach((btn, index) => {
    btn.classList.remove('active');
    if (index + 1 === pageNumber) {
      btn.classList.add('active');
    }
  });
}

function checkAnswer(btn, choice) {
  const question = btn.parentElement;
  const correct = question.getAttribute("data-answer");
  const allButtons = question.querySelectorAll("button");
  allButtons.forEach(b => b.disabled = true);

  if (choice === correct) {
    btn.classList.add("correct");
    btn.innerHTML += " ✅";
    correctSound.play();
    score++;
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

  // Show result if last question
  const allAnswered = document.querySelectorAll('.question button:disabled').length / 4;
  if (allAnswered === total) {
    const box = document.createElement('div');
    box.className = 'result-box';
    box.innerHTML = `You got <strong>${score} / ${total}</strong> correct!<br>${score >= 12 ? "🎉 Amazing!" : score >= 8 ? "👍 Good job!" : "💡 Keep practicing!"}`;
    document.querySelector('.quiz').appendChild(box);
  }
}


// Text-to-Speech for English content
function speakText(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  } else {
    alert("Sorry, your browser doesn't support text-to-speech.");
  }
}

// Riddle cevaplarını aç/kapa
function toggleAnswer(el) {
  const answer = el.querySelector('.riddle-answer');
  if (answer.style.display === 'none' || !answer.style.display) {
    answer.style.display = 'inline';
  } else {
    answer.style.display = 'none';
  }
}


let ttsUtterance = null;
let isPaused = false;
let lastClicked = 0;

function toggleTTS(button, text) {
  const now = new Date().getTime();

  // İki kere hızlı tıklama (500ms içinde)
  if (now - lastClicked < 500) {
    speechSynthesis.cancel(); // tamamen durdur
    speakText(text); // baştan oku
    lastClicked = 0;
    return;
  }

  lastClicked = now;

  if (!ttsUtterance || speechSynthesis.speaking === false) {
    ttsUtterance = new SpeechSynthesisUtterance(text);
    ttsUtterance.lang = 'en-US';
    speechSynthesis.speak(ttsUtterance);
    isPaused = false;
  } else if (speechSynthesis.speaking && !speechSynthesis.paused) {
    speechSynthesis.pause();
    isPaused = true;
  } else if (isPaused) {
    speechSynthesis.resume();
    isPaused = false;
  }
}
