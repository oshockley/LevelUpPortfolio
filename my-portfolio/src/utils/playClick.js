// utils/playClick.js
export function playClickSound() {
  const audio = new Audio('/src/sounds/click.mp3');
  audio.volume = 0.6;
  audio.play();
}
