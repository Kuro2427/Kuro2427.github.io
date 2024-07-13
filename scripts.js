import { now } from "https://cdn.pika.dev/dot-beat-time";

window.onload = function() {
  // Set the time on the hero in beats

  const setBeatTime = () => {
    const currentBeatTime = now();
    const longCurrentBeatTime = now(true);
    document.getElementById("beat-hero").textContent = `current time is: ${longCurrentBeatTime}`;
  };

  setBeatTime();

  setInterval(() => {
    setBeatTime();
  }, 1000);
}