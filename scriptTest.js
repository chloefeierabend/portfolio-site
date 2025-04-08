document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const html = document.body;

  const sun = "🌞";
  const moon = "🌙";

  const savedTheme = localStorage.getItem("theme") || "light";
  html.setAttribute("data-theme", savedTheme);
  themeToggle.textContent = savedTheme === "dark" ? moon : sun;

  themeToggle.addEventListener("click", () => {
    themeToggle.classList.add("animate");
    setTimeout(() => themeToggle.classList.remove("animate"), 400);

    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    themeToggle.textContent = newTheme === "dark" ? moon : sun;
  });
});
