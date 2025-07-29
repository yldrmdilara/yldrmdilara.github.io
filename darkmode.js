fetch("darkmode-button.html")
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML("afterbegin", html);

    const btn = document.getElementById("darkModeToggle");
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      btn.textContent = document.body.classList.contains("dark-mode")
        ? "☀️"
        : "🌙";
    });
  });
