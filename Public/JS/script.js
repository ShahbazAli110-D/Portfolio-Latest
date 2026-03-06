function changeTheme(mode) {
  if (mode === "dark") {
    document.body.style.background = "#121212";
    document.body.style.color = "white";
    localStorage.setItem("theme", "dark");
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
    localStorage.setItem("theme", "light");
  }
}

function toggleTheme() {
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") {
    changeTheme("light");
    document.getElementById("themeToggle").textContent = "🌙";
  } else {
    changeTheme("dark");
    document.getElementById("themeToggle").textContent = "☀️";
  }
}

// Load saved theme when page refreshes
window.onload = function () {
  const savedTheme = localStorage.getItem("theme") || "light";
  changeTheme(savedTheme);

  if (savedTheme === "dark") {
    document.getElementById("themeToggle").textContent = "☀️";
  } else {
    document.getElementById("themeToggle").textContent = "🌙";
  }
};