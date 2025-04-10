document.addEventListener("DOMContentLoaded", function () {
  // --- Menu toggle (mobile) ---
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  // --- Dropdown logic ---
  const dropdowns = document.querySelectorAll(".has-dropdown");

  dropdowns.forEach(dropdown => {
    const menu = dropdown.querySelector(".dropdown");

    // Hover effect (desktop)
    dropdown.addEventListener("mouseenter", () => {
      if (window.innerWidth > 768) {
        menu.style.display = "flex";
        menu.style.opacity = "0";
        menu.style.transform = "translateY(10px)";
        setTimeout(() => {
          menu.style.transition = "all 0.3s ease";
          menu.style.opacity = "1";
          menu.style.transform = "translateY(0)";
        }, 10);
      }
    });

    dropdown.addEventListener("mouseleave", () => {
      if (window.innerWidth > 768) {
        menu.style.transition = "all 0.3s ease";
        menu.style.opacity = "0";
        menu.style.transform = "translateY(10px)";
        setTimeout(() => {
          menu.style.display = "none";
        }, 300);
      }
    });

    // Mobile toggle dropdown
    dropdown.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.stopPropagation();
        menu.classList.toggle("show");
      }
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function () {
    dropdowns.forEach(dropdown => {
      const menu = dropdown.querySelector(".dropdown");
      menu.classList.remove("show");
    });
  });

  const openMapBtn = document.getElementById("openMap");
  const mapModal = document.getElementById("mapModal");
  const closeBtn = document.querySelector(".close-btn");

  openMapBtn.addEventListener("click", function (e) {
    e.preventDefault();
    mapModal.style.display = "flex";

  });

  closeBtn.addEventListener("click", function () {
    mapModal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  window.addEventListener("click", function (e) {
    if (e.target === mapModal) {
      mapModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});
function openMapModal() {
  const modal = document.getElementById("mapModal");
  modal.classList.add("show");
}

function closeMap(event) {
  const modal = document.getElementById("mapModal");
  if (event.target.id === "mapModal" || event.target.classList.contains("close-btn")) {
    modal.classList.remove("show");
  }
}
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
const destinations = [
  "Hà Nội", "Hạ Long","Cà Mau", "Đà Nẵng", "Hội An", "Nha Trang", "Đà Lạt",
  "TP. Hồ Chí Minh", "Phú Quốc","Thanh Hóa", "Huế", "Cần Thơ", "Sa Pa", "Quy Nhơn"
];

const input = document.getElementById("search-input");
const suggestionsBox = document.getElementById("suggestions");

function showSuggestions(value = "") {
  const filter = value.toLowerCase();
  suggestionsBox.innerHTML = "";

  const filtered = destinations.filter(d =>
    d.toLowerCase().includes(filter)
  );

  if (filtered.length === 0) {
    suggestionsBox.style.display = "none";
    return;
  }

  filtered.forEach(destination => {
    const div = document.createElement("div");
    div.textContent = destination;
    div.onclick = () => {
      input.value = destination;
      suggestionsBox.style.display = "none";
    };
    suggestionsBox.appendChild(div);
  });

  suggestionsBox.style.display = "block";
}

input.addEventListener("input", function () {
  showSuggestions(this.value);
});
input.addEventListener("focus", function () {
  showSuggestions(this.value);
});

document.addEventListener("click", function (e) {
  if (!input.contains(e.target) && !suggestionsBox.contains(e.target)) {
    suggestionsBox.style.display = "none";
  }
});
const departureList = ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Huế", "Nha Trang", "Đà Lạt", "Cà Mau"];
const depInput = document.getElementById("departure-input");
const depSuggestBox = document.getElementById("departure-suggestions");

function showDepSuggestions(value = "") {
  const filter = value.toLowerCase();
  depSuggestBox.innerHTML = "";

  const filtered = departureList.filter(item => item.toLowerCase().includes(filter));
  if (filtered.length === 0) {
    depSuggestBox.style.display = "none";
    return;
  }

  filtered.forEach(city => {
    const div = document.createElement("div");
    div.textContent = city;
    div.onclick = () => {
      depInput.value = city;
      depSuggestBox.style.display = "none";
    };
    depSuggestBox.appendChild(div);
  });

  depSuggestBox.style.display = "block";
}

depInput.addEventListener("focus", () => showDepSuggestions(depInput.value));
depInput.addEventListener("input", () => showDepSuggestions(depInput.value));

document.addEventListener("click", function (e) {
  if (!depInput.contains(e.target) && !depSuggestBox.contains(e.target)) {
    depSuggestBox.style.display = "none";
  }
});
