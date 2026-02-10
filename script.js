let current = 0;
const memories = document.querySelectorAll(".memory");
const intro = document.querySelector(".intro");
const container = document.querySelector(".container");
const particles = document.querySelector(".particles");

function startJourney() {
  intro.style.display = "none";
  container.style.display = "block";
  showMemory(current);
}

function showMemory(index) {
  const memories = document.querySelectorAll(".memory");
  const buttons = document.querySelector(".buttons");

  // Safety check
  if (index < 0 || index >= memories.length) return;

  // Remove active class from all memories
  memories.forEach((memory) => {
    memory.classList.remove("active");
  });

  // Add active class to current memory
  memories[index].classList.add("active");

  // Hide buttons on final page
  if (index === memories.length - 1) {
    buttons.style.display = "none";
  } else {
    buttons.style.display = "block";
  }
}

function nextMemory() {
  current++;
  if (current >= memories.length) current = 0;
  showMemory(current);
}

function prevMemory() {
  current--;
  if (current < 0) current = memories.length - 1;
  showMemory(current);
}

/* Hearts + Rose Petals */
function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  const isHeart = Math.random() > 0.5;
  particle.innerHTML = isHeart ? "❤️" : "🌸";

  particle.style.left = Math.random() * 100 + "vw";
  particle.style.fontSize = Math.random() * 20 + 15 + "px";
  particle.style.animationDuration = Math.random() * 4 + 4 + "s";

  particles.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 8000);
}

setInterval(createParticle, 500);
