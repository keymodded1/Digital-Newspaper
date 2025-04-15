
let score = 0;
let total = 15;

const correctSound = new Audio('https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg');
const wrongSound = new Audio('https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg');




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




function speakText(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  speechSynthesis.speak(utter);
}

function toggleAnswer(p) {
  const a = p.querySelector('.riddle-answer');
  if (a) a.style.display = (a.style.display === 'inline' ? 'none' : 'inline');
}

function showPage(n) {
  const t = document.getElementById('page-transition');
  t.classList.add('active');
  setTimeout(() => {
    document.querySelectorAll('.page').forEach(p => {
      p.classList.remove('active');
      p.style.display = "none";
    });
    document.getElementById('page' + n).style.display = "block";
    setTimeout(() => {
      document.getElementById('page' + n).classList.add('active');
      t.classList.remove('active');
    }, 50);
    document.querySelectorAll('.nav-buttons button').forEach((b, i) => {
      b.classList.toggle("active", i + 1 === n);
    });
  }, 300);
}


function toggleInfo(btn) {
  const content = btn.nextElementSibling;
  content.style.display = (content.style.display === "block") ? "none" : "block";
}


function showPage(n) {
  const transition = document.getElementById('page-transition');
  transition.classList.add('active');
  setTimeout(() => {
    document.querySelectorAll('.page').forEach(p => {
      p.classList.remove('active');
      p.style.display = 'none';
    });
    const target = document.getElementById('page' + n);
    if (target) {
      target.style.display = 'block';
      setTimeout(() => {
        target.classList.add('active');
        transition.classList.remove('active');
      }, 50);
    } else {
      transition.classList.remove('active');
    }
    document.querySelectorAll('.nav-buttons button').forEach((b, i) => {
      b.classList.toggle("active", i + 1 === n);
    });
  }, 300);
}
