// Mobile nav toggle + smooth scrolling + contact form validation (front-end only).
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        links.classList.remove("open");
      }
    });
  });

  var form = document.getElementById("quote-form");
  var note = form.querySelector(".form-note");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var message = form.message.value.trim();
    if (!name || !email || !message) {
      note.textContent = "Please fill in every field.";
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      note.textContent = "That email doesn't look right.";
      return;
    }
    note.textContent = "Thanks, " + name + "! Your request was received (demo — no backend).";
    form.reset();
  });
})();
