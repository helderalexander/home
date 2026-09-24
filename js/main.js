const toggle = document.getElementById("theme-toggle");
const saved = localStorage.getItem("theme");
if (saved) document.documentElement.dataset.theme = saved;

function updateIcon() {
  toggle.textContent = document.documentElement.dataset.theme === "dark" ? "☀" : "☾";
}
updateIcon();

toggle.addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme === "dark";
  document.documentElement.dataset.theme = dark ? "light" : "dark";
  localStorage.setItem("theme", dark ? "light" : "dark");
  updateIcon();
});

document.getElementById("year").textContent = new Date().getFullYear();
