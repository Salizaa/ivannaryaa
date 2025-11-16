const cake = document.getElementById("cake");
const leftDoor = document.querySelector(".left-door");
const rightDoor = document.querySelector(".right-door");
const container = document.querySelector(".container");
const body = document.body;

cake.addEventListener("click", () => {
  // buka pintu
  leftDoor.classList.add("open-left");
  rightDoor.classList.add("open-right");

  // animasi kecil di kue
  cake.style.transform = "scale(1.1)";
  setTimeout(() => (cake.style.transform = "scale(1)"), 300);

  // fade out isi halaman (judul, teks, kue)
  container.classList.add("fade-out");

  // transisi ke platinum pas pintu mulai terbuka
  body.style.transition = "background-color 1.2s ease";
  body.style.backgroundColor = "#C8D9E6"; 

  // setelah pintu kebuka & warna stabil, masuk ke halaman 2
  setTimeout(() => {
    window.location.href = "page2.html";
  }, 2000);
});
