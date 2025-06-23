const sunIconURL = "/static/images/sun.svg";
const moonIconURL = "/static/images/moon.svg";

let isDarkMode = false;

function toggleClass(elements, className, shouldAdd) {
    elements.forEach(el => el?.classList[shouldAdd ? 'add' : 'remove'](className));
}

document.querySelector("button.uploadbtn")?.addEventListener("click", function () {
    const btn = this;
    btn.classList.add("pressed");
    setTimeout(() => btn.classList.remove("pressed"), 100);
});


function showValidationMessage(message) {
    let msgBox = document.getElementById("validation-message");
    if (!msgBox) {
        msgBox = document.createElement("div");
        msgBox.id = "validation-message";
        msgBox.style.color = "red";
        msgBox.style.marginTop = "5px";
        const fileInput = document.querySelector("input[type='file']");
        fileInput?.parentNode?.appendChild(msgBox);
    }
    msgBox.textContent = message;
}

  function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function () {
      document.getElementById('preview').src = reader.result;
      document.getElementById('image-preview').style.display = 'block';
      document.getElementById('uploadbtn').style.display = 'none';
    };
    reader.readAsDataURL(event.target.files[0]);
  }

// Smooth scrolling for nav links
document.querySelectorAll(".nav-link[href^='#']").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});







// Bootstrap carousel initialization
document.addEventListener("DOMContentLoaded", function () {
    const carouselElement = document.getElementById('carouselExampleSlidesOnly');
    if (carouselElement && typeof bootstrap !== 'undefined') {
        new bootstrap.Carousel(carouselElement, {
            interval: 3000,
            ride: "carousel",
            wrap: true
        });
    }

    // Initialize dark mode from localStorage on page load
    initDarkMode();
});

// Dark mode button event listener
document.querySelector(".mode")?.addEventListener("click", toggleDarkMode);

// Image input change listener for preview
document.querySelector("input[type='file']")?.addEventListener("change", previewImage);


  let isSun = true;  // tracks current mode

  function toggleMode() {
    document.body.classList.toggle("dark-mode");
  }