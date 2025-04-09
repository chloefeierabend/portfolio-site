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

  // // Theme toggle (not the button use body instead)
  // const themeToggle = document.getElementById("theme-toggle");
  // const html = document.documentElement;
  // themeToggle.addEventListener("click", () => {
  //   const currentTheme = html.getAttribute("data-theme");
  //   const newTheme = currentTheme === "light" ? "dark" : "light";
  //   html.setAttribute("data-theme", newTheme);
  //   console.log(`Theme switched to ${newTheme}`);
  // });

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

// Smooth scroll
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Scroll to top
const scrollToTop = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTop.classList.remove("hidden");
  } else {
    scrollToTop.classList.add("hidden");
  }
});
scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Theme toggle FIX (Kind of FIXED)

// document.addEventListener("DOMContentLoaded", function () {
//   const themeToggle = document.getElementById("theme-toggle");
//   const html = document.documentElement;

//   // Use actual emoji characters
//   const sun = "🌞";
//   const moon = "🌙";

//   const savedTheme = localStorage.getItem("theme") || "light";
//   html.setAttribute("data-theme", savedTheme);

//   // Set emoji on initial load
//   themeToggle.textContent = savedTheme === "dark" ? moon : sun;

//   themeToggle.addEventListener("click", () => {
//     themeToggle.classList.add("animate");

//     setTimeout(() => themeToggle.classList.remove("animate"), 400);

//     const currentTheme = html.getAttribute("data-theme");
//     const newTheme = currentTheme === "light" ? "dark" : "light";
//     html.setAttribute("data-theme", newTheme);
//     localStorage.setItem("theme", newTheme);

//     // Set emoji on toggle
//     themeToggle.textContent = newTheme === "dark" ? moon : sun;
//   });
// });

// TODO Tooltip position FIX
// document.querySelectorAll(".tooltip").forEach((tooltip) => {
//   const textEl = tooltip.querySelector(".tooltip-text");

//   tooltip.addEventListener("mouseenter", () => {
//     const rect = textEl.getBoundingClientRect();
//     const windowWidth = window.innerWidth;

//     // Reset all positioning classes
//     textEl.classList.remove("left", "right", "centered");

//     // Smart repositioning
//     if (rect.left < 20) {
//       textEl.classList.add("right"); // shift right if too close to left
//     } else if (rect.right > windowWidth - 20) {
//       textEl.classList.add("left"); // shift left if too close to right
//     } else {
//       textEl.classList.add("centered"); // otherwise center
//     }
//   });
// });
