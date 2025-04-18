// ========== TIMER FUNCTION ==========
function startTimer(duration, defaultLink) {
  const bar = document.getElementById("timerBar");
  let timer = duration;

  const interval = setInterval(() => {
    timer--;
    if (bar) bar.style.width = (timer / duration) * 100 + "%";

    if (timer <= 0) {
      clearInterval(interval);
      window.location.href = defaultLink;
    }
  }, 1000);
}

// ========== TEXT-TO-SPEECH ==========
function speakText(text) {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 1;
  synth.speak(utter);
}

// ========== UNDO FUNCTION ==========
// Store the *current* page as "lastPage" when navigating away
function setUndo() {
  const current = window.location.href;
  sessionStorage.setItem("undo", current);
}

// Use this to go back
function undo() {
  const previous = sessionStorage.getItem("undo");
  if (previous && previous !== window.location.href) {
    window.location.href = previous;
  } else {
    alert("No previous page to go back to.");
  }
}

function choose(nextPage) {
  setUndo();
  window.location.href = nextPage;
}
