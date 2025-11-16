const music = document.getElementById('bg-music');
const btn = document.getElementById('music-btn');

btn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    btn.textContent = "🔇 Stop Music";
  } else {
    music.pause();
    btn.textContent = "🎧 Play Music";
  }
});

