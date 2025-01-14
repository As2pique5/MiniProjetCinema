const themeToggleButton = document.getElementById("theme-toggle");

// Vérifie si un thème est déjà enregistré
const currentTheme = localStorage.getItem("theme") || "light";
applyTheme(currentTheme);

themeToggleButton.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
    applyTheme(newTheme);
});

function applyTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggleButton.textContent = "☀️ Mode Clair";
    } else {
        document.body.classList.remove("dark-mode");
        themeToggleButton.textContent = "🌙 Mode Sombre";
    }
    localStorage.setItem("theme", theme);
}
