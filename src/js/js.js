// Плавный скролл для навигации
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Эффект для хедера при скролле
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Обработчик для кнопки CTA
document.getElementById("ctaButton").addEventListener("click", function () {
  this.textContent = "Жду вашего сообщения!";
  this.style.backgroundColor = "#4CAF50";

  // Плавная прокрутка к контактам
  document.querySelector("#contact").scrollIntoView({
    behavior: "smooth",
  });
});

// Обработчик формы
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Сообщение отправлено! Свяжусь с вами в ближайшее время.");
    this.reset();
  });

// Анимация появления элементов при скролле
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Наблюдаем за элементами для анимации
document.querySelectorAll(".skill-category, .project-card").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});
