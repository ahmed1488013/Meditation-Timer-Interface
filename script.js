let timer;
let timeRemaining = 5 * 60; // 5 minutes in seconds
let isTimerRunning = false;

const timerDisplay = document.getElementById("timer-display");
const startStopButton = document.getElementById("start-stop-btn");
const resetButton = document.getElementById("reset-btn");
const soundSelect = document.getElementById("sounds");

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}

function startStopTimer() {
  if (isTimerRunning) {
    clearInterval(timer);
    startStopButton.textContent = "Start";
  } else {
    timer = setInterval(() => {
      timeRemaining--;
      timerDisplay.textContent = formatTime(timeRemaining);
      
      if (timeRemaining <= 0) {
        clearInterval(timer);
        startStopButton.textContent = "Start";
      }
    }, 1000);

    startStopButton.textContent = "Pause";
  }

  isTimerRunning = !isTimerRunning;
}
function setTimer() {
    const selectedTime = document.getElementById("time-select").value;
    timeRemaining = selectedTime * 60; // تحويل الوقت إلى ثواني
    timerDisplay.textContent = formatTime(timeRemaining);
  }
  
  document.getElementById("time-select").addEventListener("change", setTimer);
  

function playSound() {
  const sound = soundSelect.value;

  let audio;
  switch (sound) {
    case "sound1":
      audio = new Audio("calm-waves.mp3");
      break;
    case "sound2":
      audio = new Audio("chimes.mp3");
      break;
    case "sound3":
      audio = new Audio("forest-birds.mp3");
      break;
    default:
      return;
  }

  audio.play();
}

startStopButton.addEventListener("click", startStopTimer);
resetButton.addEventListener("click", resetTimer);
soundSelect.addEventListener("change", playSound);
