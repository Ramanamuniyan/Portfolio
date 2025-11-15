// Tab switching
const tabs = document.querySelectorAll("nav button");
const sections = document.querySelectorAll("main section");

tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    // Switch active class
    tabs.forEach(x => x.classList.remove("active"));
    btn.classList.add("active");

    // Show correct section
    const id = btn.dataset.sec;
    sections.forEach(s => {
      s.style.display = (s.id === id) ? "block" : "none";
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Contact button at top
document.getElementById("contactTop").addEventListener("click", () => {
  document.querySelector('nav button[data-sec="contact"]').click();
});

// CV Download (anchor tag)
document.getElementById("cvBtn").addEventListener("click", (e) => {
  // Allow anchor to directly download
});

