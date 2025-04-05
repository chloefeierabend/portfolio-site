// Typewriter effect
const titles = [
  "Junior Developer",
  "Digital Artist",
  "Climber",
  "Creative Technologist",
  "Photographer",
];
let index = 0;
let charIndex = 0;
const typewriterEl = document.getElementById("typewriter");

function type() {
  if (charIndex < titles[index].length) {
    typewriterEl.textContent += titles[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriterEl.textContent = titles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % titles.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (titles.length) type();

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle");
  const html = document.documentElement;
  themeToggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    html.setAttribute("data-theme", newTheme);
  });

  // Parallax scroll effect
  const parallaxItems = document.querySelectorAll(".parallax-item");

  function handleParallax() {
    const scrollY = window.scrollY;
    parallaxItems.forEach((el) => {
      const speed = parseFloat(el.dataset.speed);
      el.style.transform = `translateY(${scrollY * speed * 0.1}px)`;
    });
    requestAnimationFrame(handleParallax);
  }

  requestAnimationFrame(handleParallax);
});
