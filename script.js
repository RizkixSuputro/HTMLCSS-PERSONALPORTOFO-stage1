const listnav = document.getElementById("icon-links");
const showNav = document.getElementById("nav-links");
const ulNavLinks = showNav.querySelector("ul");

listnav.addEventListener("click", function () {
  if (ulNavLinks.style.display === "flex") {
    ulNavLinks.style.display = "none";
  } else {
    ulNavLinks.style.display = "flex";
  }
});

// Ambil semua link di dalam nav
const navLinks = document.querySelectorAll(".navlinks a");

// Tambahkan event ke masing-masing link
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// function navbtn
function navBtn() {
  const targetElement = document.querySelector("#targetlink-contactme");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}
