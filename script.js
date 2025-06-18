let startTime = 0, elapsedTime = 0, interval;

function updateTime() {
  const time = Date.now() - startTime;
  const total = new Date(time);
  const hrs = String(total.getUTCHours()).padStart(2, '0');
  const mins = String(total.getUTCMinutes()).padStart(2, '0');
  const secs = String(total.getUTCSeconds()).padStart(2, '0');
  document.getElementById('display').textContent = `${hrs}:${mins}:${secs}`;
}

function startStopwatch() {
  if (!interval) {
    startTime = Date.now() - elapsedTime;
    interval = setInterval(() => {
      updateTime();
      elapsedTime = Date.now() - startTime;
    }, 1000);
  }
}

function pauseStopwatch() {
  clearInterval(interval);
  interval = null;
}

function resetStopwatch() {
  clearInterval(interval);
  interval = null;
  elapsedTime = 0;
  document.getElementById('display').textContent = '00:00:00';
  document.getElementById('laps').innerHTML = '';
}

function lapTime() {
  const lapTime = document.getElementById('display').textContent;
  const lapList = document.getElementById('laps');
  const lapEntry = document.createElement('div');
  lapEntry.textContent = `Lap: ${lapTime}`;
  lapList.appendChild(lapEntry);
}