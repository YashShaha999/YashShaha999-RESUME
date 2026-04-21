(function () {
  // dark mode toggle with local storage persistence (nice interactive touch)
  const toggleBtn = document.getElementById("mode-toggle");
  const body = document.body;

  // check for saved theme preference
  const savedTheme = localStorage.getItem("resumeTheme");
  if (savedTheme === "dark") {
    body.classList.add("dark-resume");
  }

  function setDarkMode(isDark) {
    if (isDark) {
      body.classList.add("dark-resume");
      localStorage.setItem("resumeTheme", "dark");
    } else {
      body.classList.remove("dark-resume");
      localStorage.setItem("resumeTheme", "light");
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isDarkNow = body.classList.contains("dark-resume");
      setDarkMode(!isDarkNow);
    });
  }

  // small interactive: make summary highlight on click? just for extra JS engagement
  const summaryDiv = document.querySelector(".summary-text");
  if (summaryDiv) {
    summaryDiv.style.cursor = "pointer";
    summaryDiv.addEventListener("click", function (e) {
      // don't conflict with toggle button if accidentally clicked.
      e.stopPropagation();
      this.style.transition = "background 0.15s";
      const originalBg = window.getComputedStyle(this).backgroundColor;
      this.style.backgroundColor = "#e0edfe";
      setTimeout(() => {
        this.style.backgroundColor = originalBg;
      }, 200);
      // optional: show subtle tooltip? not needed but adds JS behavior
    });
  }

  // ensure that the links (demo/github) are just placeholder anchors but open blank for demo?
  // to preserve user expectation, we'll add a small console friendly but keep user experience
  // actually just prevent default for empty href and show message (optional)
  const demoLinks = document.querySelectorAll(".project-links a");
  demoLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (link.getAttribute("href") === "#") {
        e.preventDefault();
        alert(
          "🔗 Live demo / GitHub repository link would be available in the real portfolio. This is a replica of Yash Shaha’s resume.",
        );
      }
    });
  });

  // Add micro-interaction to certifications and skills
  const certItems = document.querySelectorAll(".cert-list li");
  certItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateX(3px)";
      item.style.transition = "0.1s ease";
    });
    item.addEventListener("mouseleave", () => {
      item.style.transform = "translateX(0)";
    });
  });

  console.log(
    "Resume page ready — matching Yash Shaha’s original content with interactive enhancements",
  );
})();
